const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
const db = require('../config/db')
var moment = require('moment');
// Require logger.js
const logger = require('../utils/logger');

module.exports = {

    reseller_list: async (req, res, next) => {

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

            let reseller_count = await dbo_admin.collection("users").aggregate([{ $match: { "role": "Reseller" } }, { $group: { _id: null, count: { $sum: 1 } } }]).toArray()
            let reseller_list = await dbo_admin.collection("users").find({ "role": "Reseller" }, { projection: { "password": 0 } }).skip(_offset).limit(_limit).sort({ created_at: -1 }).toArray();
            logger.info('success', 'Reseller list')
            if (reseller_count.length && reseller_count[0].count > 0) {
                return api_response.success_response_with_data_count(res, "Reseller list", reseller_count[0].count, reseller_list)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }


        } catch (error) {
            logger.info('error', 'Something went wrong while calling reseller_list' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    reseller_data: async (req, res, next) => {
        try {

            if (req.params.hasOwnProperty('reseller_id') == false || req.params.reseller_id === '' || req.params.reseller_id === 'undefined') {
                return api_response.error_response(res, "reseller_id is missing!")
            }

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            console.log(req.params.reseller_id)
            let reseller_data = await dbo_admin.collection("users").findOne({ '$and': [{ "_id": ObjectId(req.params.reseller_id) }, { "role": "Reseller" }] }, { projection: { "password": 0 } });
            logger.info('success', 'Plan data')
            if (reseller_data) {
                return api_response.success_response_with_data(res, "Reseller data", reseller_data)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (error) {
            logger.info('error', 'Something went wrong while calling reseller_data' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    block_unblock_reseller: async (req, res, next) => {
        try {

            if (req.body.hasOwnProperty('reseller_id') == false || req.body.reseller_id === '' || req.body.reseller_id === 'undefined') {
                return api_response.error_response(res, "reseller_id is missing!")
            }

            if (req.body.hasOwnProperty('is_deactive') == false || req.body.is_deactive === '' || req.body.is_deactive === 'undefined') {
                return api_response.error_response(res, "is_deactive is missing!")
            }

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let reseller_data = await dbo_admin.collection("users").findOne({ '$and': [{ "_id": ObjectId(req.body.reseller_id) }, { "role": "Reseller" }] }, { projection: { "password": 0 } });
            
            if (reseller_data) {
                await dbo_admin.collection("users").updateOne({ '$and': [{ "_id": ObjectId(req.body.reseller_id) }, { "role": "Reseller" }] }, {"$set":{ "is_deactive": req.body.is_deactive }}, { "upsert": true })
                logger.info('success', 'block_unblock_reseller')
                return api_response.success_response(res, "Reseller data updated successfully")
            } else {
                return api_response.not_found_response(res, 'No data found')

            }
        } catch (error) {
            logger.info('error', 'Something went wrong while calling reseller_data' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    }

}