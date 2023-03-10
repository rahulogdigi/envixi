const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
const db = require('../config/db')
var moment = require('moment');
// Require logger.js
const logger = require('../utils/logger');

module.exports = {


    is_active_product_key: async function (user_id) {
        // check parameters or post parameters for licence_key
        var _user_id = user_id


        let admin_db_name = db.getAdminDb();
        var dbo_admin = db.get().db(admin_db_name);

        let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

        let subcrip_resp = await dbo_admin.collection("subscription_master").findOne({
            "$and": [
                { "user_ids": { "$in": [_user_id] } },
                { "expired_at": { "$gte": doc_datetime } }]
        })

        if (!subcrip_resp) {
            return null
        } else {
            return subcrip_resp.licence_key
        }



    },

    productkey_validation: async function (req, res, next) {
        // check parameters or post parameters for licence_key
        var licence_key = req.headers['licence_key']
        var company_id = req.headers['company_id']
        if (!licence_key) {
            return res.json({
                status: 404,
                response: 'error',
                msg: 'Product key is not supplied'
            });
            return false
        } else if (!company_id) {
            return res.json({
                status: 404,
                response: 'error',
                msg: 'Company id is not supplied'
            });
            return false
        } else {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let subcrip_resp = await dbo_admin.collection("subscription_master").findOne({
                "$and": [
                    { "company_id": company_id },
                    { "licence_key": licence_key },
                    { "expired_at": { "$gte": doc_datetime } }]
            })

            if (!subcrip_resp) {
                return res.json({
                    status: 401,
                    response: 'failed',
                    msg: 'Oops ! your product key has been expired. Please contact to reseller'
                });
                return false;
            } else {
                next()
            }

        }

    }

}