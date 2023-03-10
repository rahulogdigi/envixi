const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
const db = require('../config/db');
var moment = require('moment');
var _ = require('lodash');
var asyncLoop = require('node-async-loop');
// Require logger.js
const logger = require('../utils/logger');
const { getDatesDiff, dateRange } = require("../utils/helper");



module.exports = {

    management_and_process: async (req, res, next) => {

        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let req_data = req.body;

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")



            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                req_data.update_at = doc_datetime

                await dbo.collection("section_b").insertOne(req_data)
                logger.info('success', 'Section B form submited')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (error) {
            logger.info('error', 'Something went wrong while calling management_and_process' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }

    },

    staging_management_and_process: async (req, res, next) => {

        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let req_data = req.body;

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")



            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                req_data.update_at = doc_datetime

                await dbo.collection("staging_section_b").insertOne(req_data)
                logger.info('success', 'Section B form submited')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (error) {
            logger.info('error', 'Something went wrong while calling management_and_process' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }

    },

    principal_one: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")


            let req_data = req.body;
            req_data.update_at = doc_datetime


            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_one").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 1')
                return api_response.success_response(res, "Form has been submitted successfully")

            }
        } catch (error) {
            logger.info('error', 'Something went wrong while calling management_and_process' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_one: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")


            let req_data = req.body;
            req_data.update_at = doc_datetime


            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_one").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 1')
                return api_response.success_response(res, "Form has been submitted successfully")

            }
        } catch (error) {
            logger.info('error', 'Something went wrong while calling management_and_process' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    principal_two: async (req, res, next) => {
        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime


            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_two").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 2')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (error) {
            logger.info('error', 'Something went wrong while calling management_and_process' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_two: async (req, res, next) => {
        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime


            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_two").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 2')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (error) {
            logger.info('error', 'Something went wrong while calling management_and_process' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    principal_three: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_three").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 3')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_three: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_three").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 3')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    principal_four: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_four").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 4')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_four: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_four").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 4')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    principal_five: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_five").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 5')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_five: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_five").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 5')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    principal_six: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_six").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 6')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + err)
            return api_response.error_response(res, "Something went wrong" + err.message);
        }
    },

    staging_principal_six: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_six").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 6')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + err)
            return api_response.error_response(res, "Something went wrong" + err.message);
        }
    },

    principal_seven: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_seven").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 7')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    staging_principal_seven: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_seven").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 7')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    principal_eight: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_eight").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 8')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_eight: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_eight").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 8')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    principal_nine: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime


            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("principal_nine").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 9')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    staging_principal_nine: async (req, res, next) => {

        try {


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")

            let req_data = req.body;
            req_data.update_at = doc_datetime


            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")

            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.body.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {

                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                await dbo.collection("staging_principal_nine").insertOne(req_data)
                logger.info('success', 'Form has been submitted successfully principal 9')
                return api_response.success_response(res, "Form has been submitted successfully")

            }



        } catch (err) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    get_principal_form: async (req, res, next) => {

        try {

            console.log(req.query)

            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id == '' || req.query.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            if (req.query.hasOwnProperty('form_type') == false || req.query.form_type === '' || req.query.form_type === 'undefined') {
                return api_response.error_response(res, "form_type is missing!")
            }

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.query.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {
                let form_collection = req.query.form_type
                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                const collections = await dbo.listCollections().toArray();
                const collectionNames = collections.map(c => c.name);

                if (collectionNames.includes(form_collection)) {

                    let form_data = await dbo.collection(form_collection).find({}, { sort: { 'update_at': -1 }, limit: 1 }).toArray()
                    logger.info('success', 'Form data ' + form_collection)

                    return api_response.success_response_with_data(res, "Form data " + form_collection, form_data.length ? form_data[0] : {})

                } else {
                    logger.info('failed', 'Form datacollection not found' + form_collection)
                    return api_response.not_found_response(res, 'No such data found')
                }



            }


        } catch (error) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


    get_form_month_and_year_wise: async (req, res, next) => {

        try {

            console.log(req.query)

            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id == '' || req.query.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            if (req.query.hasOwnProperty('form_type') == false || req.query.form_type === '' || req.query.form_type === 'undefined') {
                return api_response.error_response(res, "form_type is missing!")
            }

            if (req.query.hasOwnProperty('month') == false || req.query.month === '' || req.query.month === 'undefined') {
                return api_response.error_response(res, "month is missing!")
            }

            if (req.query.hasOwnProperty('year') == false || req.query.year === '' || req.query.year === 'undefined') {
                return api_response.error_response(res, "year is missing!")
            }

            let _month = parseInt(req.query.month);
            let _year = parseInt(req.query.year);

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);


            let compnay_data = await dbo_admin.collection("company_master").findOne({ company_id: req.query.company_id });
            if (!compnay_data) {
                logger.info('failed', 'No such data found')
                return api_response.error_response(res, "No such company found")
            } else {
                let form_collection = req.query.form_type
                let db_name = compnay_data.db_name
                var dbo = db.get().db(db_name);

                const collections = await dbo.listCollections().toArray();
                const collectionNames = collections.map(c => c.name);

                if (collectionNames.includes(form_collection)) {

                    let form_data = await dbo.collection(form_collection).find({
                        $expr: {
                            $and: [
                                {
                                    "$eq": [
                                        {
                                            "$month": { "$toDate": "$update_at" }
                                        },
                                        _month
                                    ]
                                },
                                {
                                    "$eq": [
                                        {
                                            "$year": { "$toDate": "$update_at" }
                                        },
                                        _year
                                    ]
                                }
                            ]
                        }
                    }, { sort: { 'update_at': -1 }, limit: 1 }).toArray()
                    logger.info('success', 'Form data ' + form_collection)

                    return api_response.success_response_with_data(res, "Form data " + form_collection, form_data.length ? form_data[0] : {})

                } else {
                    logger.info('failed', 'Form datacollection not found' + form_collection)
                    return api_response.not_found_response(res, 'No such data found')
                }

            }

        } catch (error) {
            logger.info('error', 'Something went wrong while calling respect_and_promote' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },


   