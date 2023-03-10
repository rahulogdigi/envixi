var Role = require('../helpers/role');
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
var md5 = require('md5');
const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;

var _ = require('lodash');
// Require logger.js
const logger = require('../utils/logger');
var moment = require('moment');
const jwt = require("jsonwebtoken");

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
const send_email = require('../utils/send_email')

module.exports = {

    add_location: async (req, res, next) => {
        try {

            let req_data = req.body;

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.validation_error(res, "Company id is missing!")
            }

            if (req.body.hasOwnProperty('location_name') == false || req.body.location_name === '' || req.body.location_name === 'undefined') {
                return api_response.validation_error(res, "Location name is missing!")
            }

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")
            req_data.update_at = doc_datetime
            req_data.created_at = doc_datetime
            let is_deleted = false

            var o_id = new ObjectId(req.user._id);

            let string_date = req.body.location_name + req.body.company_id;
            req_data.location_id = (md5(string_date)).slice(0, 12);

            if(req.body.hasOwnProperty("is_deleted")){
                is_deleted = req.body.is_deleted
            }

            
            req_data.is_deleted = is_deleted
            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req_data.company_id });
            const user = await dbo_admin.collection("users").findOne({ '_id': o_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.not_found_response(res, "No such company found")
            } else {
                let db_name = compnay_data.db_name
                var cmp_dbo = db.get().db(db_name);

                await cmp_dbo.collection("location_master").updateOne({
                    "$and": [
                        { "location_id": req_data.location_id },
                        { "company_id": req_data.company_id },
                        { "location_name": req_data.location_name }
                    ]
                }, {"$set": req_data}, { upsert: true })
                return api_response.success_response_with_data(res, "Location has been created successfuly", { 'data': req_data.location_id })
            }


        } catch (error) {
            logger.log('error', 'add_location function failed ' + error.message);
            return res.status(400).json({ status: error.statusCode, message: 'add_location function failed.' + error.message });
        }
    },

    get_location_specific_and_all: async (req, res, next) => {

        try {

            let limit = 10;
            let offset = 0

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            _collection_name = "location_master"

            let pipeline = [];

            pipeline.push({ "$match": { "is_deleted": false } })

            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id === '' || req.query.company_id === 'undefined') {
                return api_response.validation_error(res, "Company id is missing!")
            }


            pipeline.push({ "$match": { "company_id": req.query.company_id } })

            if(req.query.hasOwnProperty("location_id")){
                pipeline.push({ "$match": { "location_id": req.query.location_id } })
            }

            let count_pipeline = _.cloneDeep(pipeline);

            count_pipeline.push({ $group: { _id: null, count: { $sum: 1 } } })

            if (req.query.hasOwnProperty('offset')) {
                offset = parseInt(req.query.offset)
            }

            if (req.query.hasOwnProperty('limit')) {
                limit = parseInt(req.query.limit)
            }

            pipeline.push({ "$skip": offset })
            pipeline.push({ "$limit": limit })

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.query.company_id });
            console.log(pipeline)
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.not_found_response(res, "No such company found")
            } else {
                let db_name = compnay_data.db_name
                var cmp_dbo = db.get().db(db_name);


                let resp_count = await cmp_dbo.collection(_collection_name).aggregate(count_pipeline).toArray()
                var response_data = await cmp_dbo.collection(_collection_name).aggregate(pipeline).toArray()


                if (resp_count.length && resp_count[0].count > 0) {
                    return api_response.success_response_with_data_count(res, "Location list data", resp_count[0].count, response_data)
                } else {
                    return api_response.not_found_response(res, 'No such data found')
                }

            } 
        } catch (error) {
            logger.log('error', 'get_location_specific_and_all function failed ' + error.message);
            return res.status(400).json({ status: error.statusCode, message: 'get_location_specific_and_all function failed.' + error.message });
        }

    }
}