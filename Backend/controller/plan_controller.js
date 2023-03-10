const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
const db = require('../config/db')
var moment = require('moment');
// Require logger.js
const logger = require('../utils/logger');


module.exports = {

    add_plan: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;

            req_data.created_at = doc_datetime
            req_data.updated_at = doc_datetime
            let req_obj = { plan_name: req.body.plan_name }

            if (req.body.hasOwnProperty("plan_id")) {
                req_obj = { "_id": ObjectId(req.params.plan_id) }

                let plan_data = await dbo_admin.collection("plan_master").findOne(req_obj)
                if (!plan_data) {
                    return api_response.not_found_response(res, "No such data found")
                } else {
                    
                    let plan_data_upd = await dbo_admin.collection("plan_master").updateOne(req_obj, { '$set': req.body }, { upsert: true })
                    logger.info('success', 'Plan updated successfully')
                    return api_response.success_response_with_data(res, "Plan updated successfully", plan_data_upd)

                }
            } else {

                let plan_data = await dbo_admin.collection("plan_master").updateOne(req_obj, { '$set': req.body }, { upsert: true })
                logger.info('success', 'Plan added successfully')
                return api_response.success_response_with_data(res, "Plan added successfully", plan_data)

            }




        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_plan' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    get_plan_list: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let _limit = 10;
            let _offset = 0;

            if (req.query.hasOwnProperty('limit') && req.query.limit !== null) {
                _limit = parseInt(req.query.limit);
            }

            if (req.query.hasOwnProperty('_offset') && req.query._offset !== null) {
                _offset = parseInt(req.query._offset);
            }

            let plan_count = await dbo_admin.collection("plan_master").aggregate([{ $group: { _id: null, count: { $sum: 1 } } }]).toArray()
            let plan_list = await dbo_admin.collection("plan_master").find({}).skip(_offset).limit(_limit).sort({ created_at: -1 }).toArray();
            logger.info('success', 'Plan list')
            if (plan_count && plan_count[0].count > 0) {
                return api_response.success_response_with_data_count(res, "Plan list", plan_count[0].count, plan_list)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_plan' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    get_specific_plan: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);


            let plan_data = await dbo_admin.collection("plan_master").findOne({ "_id": ObjectId(req.params.plan_id) });
            logger.info('success', 'Plan data')

            if (plan_data) {
                return api_response.success_response_with_data(res, "Plan data", plan_data)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }




        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_plan' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    delete_specific_plan: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);


            let plan_data = await dbo_admin.collection("plan_master").remove({ "_id": ObjectId(req.params.plan_id) });
            logger.info('success', 'Plan has been removed successfully')
            if (plan_data) {
                return api_response.success_response(res, "Plan has been removed successfully")
            } else {
                return api_response.not_found_response(res, 'No data found')
            }




        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_plan' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    }
}