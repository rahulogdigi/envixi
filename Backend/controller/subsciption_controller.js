const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
const db = require('../config/db')
var moment = require('moment');
const licenseGen = require("@mcnaveen/license-gen")
var structuredClone = require('realistic-structured-clone');
// Require logger.js
const logger = require('../utils/logger');

const { get_specific_plan } = require('../controller/plan_controller')


module.exports = {

    create_product_key: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.reseller_id = req.user._id
            req_data.user_ids = [];
            req_data.company_id = null;


            if (req.body.hasOwnProperty('plan_id') == false || req.body.plan_id === '' || req.body.plan_id === 'undefined') {
                return api_response.error_response(res, "Plan id is missing!")
            }

            req_data.created_at = doc_datetime
            req_data.updated_at = doc_datetime
            req_data.is_active = true

            let plan_data = await dbo_admin.collection("plan_master").findOne({ "_id": ObjectId(req.body.plan_id) });

            if (!plan_data) {
                return api_response.not_found_response(res, "Plan not found!")
            }

            req_data.plan_type = 'months'
            req_data.plan_cost = + parseFloat(plan_data.price * parseInt(req.body.no_of_user)).toFixed(2)
            console.log(req_data.plan_cost)
            plan_data.plan_type === 'yearly' ? req_data.plan_type = 'years' : req_data.plan_type = 'months'


            req_data.expired_at = moment.utc(new Date()).add(1, req_data.plan_type).format("YYYY-MM-DD HH:mm:ss")

            req_data.licence_key = licenseGen(32)
            let resp_data = await dbo_admin.collection("subscription_master").insertOne(req_data)
            return api_response.success_response_with_data(res, 'Licence key has been generated!', resp_data)
        } catch (error) {
            logger.info('error', 'Something went wrong while calling create_product_key' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    get_subscription_list: async (req, res, next) => {

        try {

            let pipeline = []
            let pipeline_count = []
            let _limit = 10;
            let _offset = 0;
            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            req_data = req.query;

            if(req.user.role != 'admin'){
                pipeline.push({"$match": {"user_ids": {"$in": [req.user._id] }}})
                
            }
            
            if (req.query.hasOwnProperty('limit') && req.query.limit !== '') {
                _limit = parseInt(req.query.limit);
            }

            if (req.query.hasOwnProperty('offset') && req.query.offset !== '') {
                _offset = parseInt(req.query.offset);
            }


            if('company_id' in req_data) {
                pipeline.push({"$match": {"company_id": req_data["req_data"]}})
            }

            if('subscription_id' in req_data) {
                pipeline.push({"$match": {"_id": ObjectId(req_data["subscription_id"])}})
            }

            if('user_id' in req_data && req_data['user_id'] != null && req_data['user_id'] != undefined) {
                
                pipeline.push({"$match": {"user_ids": {"$in": (req_data["user_id"]).split(",")}}})
            }

            if('licence_key' in req_data) {
                pipeline.push({"$match": {"licence_key": req_data["licence_key"]}})
            }

            if('plan_id' in req_data) {
                pipeline.push({"$match": {"plan_id": req_data["plan_id"]}})
            }

            
            delete req_data.offset;
            delete req_data.limit;

            pipeline_count = structuredClone(pipeline);
            pipeline_count.push({ $group: { _id: null, count: { $sum: 1 } } })

            
            
            pipeline.push({ "$addFields": { "userId": { "$toObjectId": "$reseller_id" } } },
            { "$addFields": { "planId": { "$toObjectId": "$plan_id" } } },
            { "$lookup": { "from": "plan_master", "localField": "planId", "foreignField": "_id", "as": "plan_data" } },
            {

                "$lookup": {
                    "from": "users",
                    "localField": "userId",
                    "foreignField": "_id",
                    "as": "reseller_data"
                }
            },
            {
                "$project": {
                    "plan_name": "$plan_data.plan_name",
                    "reseller_name": "$reseller_data.reseller_name",
                    "_id": 1,
                    "no_of_user": 1,
                    "user_ids": 1,
                    "company_id": 1,
                    "created_at": 1,
                    "updated_at": 1,
                    "is_active": 1,
                    "plan_id": 1,
                    "plan_type": 1,
                    "plan_cost": 1,
                    "expired_at": 1,
                    "licence_key": 1,
                    "userId": 1
                }
            },
            { "$sort": { "updated_at": -1 } })
            pipeline.push({ "$limit": _limit })
            pipeline.push({ "$skip": _offset })
            let subcrip_resp_count = await dbo_admin.collection("subscription_master").aggregate(pipeline_count).toArray()
            // let subcrip_resp = await dbo_admin.collection("subscription_master").find(req_data).sort({updated_at: -1}).limit(_limit).skip(_offset).toArray()
            let subcrip_resp = await dbo_admin.collection("subscription_master").aggregate(pipeline).toArray()
            return api_response.success_response_with_data_count(res, 'Licence list', subcrip_resp_count.length ? subcrip_resp_count[0].count : 0, subcrip_resp)

        } catch (error) {
            logger.info('error', 'Something went wrong while calling get_subscription_list' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }

    }
}