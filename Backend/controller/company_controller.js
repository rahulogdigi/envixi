var Role = require('../helpers/role');
const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');
var md5 = require('md5');
const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
var shortUrl = require("node-url-shortener");

// Require logger.js
const logger = require('../utils/logger');
var moment = require('moment');
const jwt = require("jsonwebtoken");

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
const send_email = require('../utils/send_email')

module.exports = {

    has_whitespace: (s) => {
        return /\s/g.test(s);
    },

    add_company: async (req, res, next) => {
        try {


            let req_data = req.body;

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")
            req_data.update_at = doc_datetime


            req_data.financial_start_date = moment.utc(new Date(req.body.financial_start_date)).format("YYYY-MM-DD")
            req_data.financial_end_date = moment.utc(new Date(req.body.financial_end_date)).format("YYYY-MM-DD")


            let c_name = "";

            if (!module.exports.has_whitespace(req_data.company_name)) {
                c_name = req_data.company_name;
            } else {
                c_name = req_data.company_name.split(" ").map((n) => n[0]).join("");
            }

            let string_date = c_name + req.user._id;
            var company_id = md5(string_date);
            var hash = (md5(string_date)).slice(0, 8);


            console.log(company_id)
            let db_name = hash + "_" + c_name + "_" + "DB";
            console.log(db_name)
            let admin_db_name = db.getAdminDb();

            var dbo_admin = db.get().db(admin_db_name);
            var dbo_cmp = db.get().db(db_name);

            var o_id = new ObjectId(req.user._id);

            req_data.company_id = company_id;
            req_data.db_name = db_name;

            const user = await dbo_admin.collection("users").findOne({ _id: o_id });
            if (!user) {
                logger.info('failed', 'No such data found')
                return api_response.not_found_response(res, 'No such data found')
            } else {

                const company = await dbo_admin.collection("company_master").findOne({ company_id: company_id })
                req_data.owner = req.user._id;
                if (!company) {

                    console.log("1")
                    return dbo_admin.collection("company_master").insertOne({
                        company_id: company_id,
                        company_name: req_data.company_name,
                        corporate_identity_number: req_data.corporate_identity_number,
                        owner: req.user._id,
                        db_name: db_name,
                        financial_start_date: req_data.financial_start_date,
                        financial_end_date: req_data.financial_end_date,
                    }).then(async data => {
                        console.log("2")
                        if (data && data.acknowledged) {
                            await dbo_admin.collection("users").updateOne({ _id: o_id }, { $push: { company_ids: company_id } })

                            await dbo_cmp.collection("company_master").insertOne(req_data)

                            return api_response.success_response_with_data(res, "Company has been created successfuly", { 'data': company_id })

                        } else {
                            return api_response.error_response(res, "Something went wrong")
                        }
                    }, error => {
                        return api_response.error_response(res, "Something went wrong")
                    })
                } else {
                    let data = await dbo_cmp.collection("company_master").insertOne(req_data)
                    return api_response.success_response_with_data(res, "Company data updated successfuly", company)
                }



            }
        } catch (err) {
            logger.log('error', 'User login failed ' + err.message);
            return res.status(400).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });

        }


    },

    add_employee_link: async (req, res, next) => {

        try {


            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id === '' || req.query.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            if (req.query.hasOwnProperty('recipient_emailid') == false || req.query.recipient_emailid === '' || req.query.recipient_emailid === 'undefined') {
                return api_response.error_response(res, "recipient_emailid is missing!")
            }

            if (req.query.hasOwnProperty('invite_link') == false || req.query.invite_link === '' || req.query.invite_link === 'undefined') {
                return api_response.error_response(res, "invite_link is missing!")
            }

            let doc_datetime = moment.utc(new Date()).add(30, 'days').format("YYYY-MM-DD")
            console.log(doc_datetime)


            hash_string = req.query.company_id + "_" + req.query.recipient_emailid + "_" + doc_datetime
            const encryptedString = await cryptr.encrypt(hash_string);
            logger.log('success', 'Token genrated for ' + req.query.company_id);
            const link = `${req.query.invite_link}/${encryptedString}`;
            let bodytext = `Hi ${req.query.recipient_emailid} <br><br> Happy to invite you on Invixi portal ! <br> click on link to :- <a href=${link}>Join link </a><br>`
            await send_email(req.query.recipient_emailid, "Invite from Invixi", bodytext);
            return api_response.success_response(res, 'Request email has been sent successfully')

        } catch (err) {
            logger.log('error', 'failed while employee token generation ' + err.message);
            return res.status(400).json({ status: err.statusCode, message: 'failed while employee token generation.' + err.message });
        }
    },

    get_company_list: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            let compnay_list = [];

            console.log(req.user)


            let user_data = await dbo_admin.collection("users").findOne({ _id: new ObjectId(req.user._id) });

            console.log(user_data)

            if (!user_data) {
                return api_response.not_found_response(res, 'No such data found');
            }

            if (req.user.role == 'Employeer') {

                compnay_list = await dbo_admin.collection("company_master").find({ owner: req.user._id }).toArray();

            } else if (req.user.role == 'Retailer') {

                compnay_list = await dbo_admin.collection("company_master").find({}).toArray();

            } else {
                let cid = (user_data.company_ids).length ? user_data.company_ids[0] : null;
                compnay_list = await dbo_admin.collection("company_master").find({ company_id: cid }).toArray();
            }

            if (compnay_list.length) {
                return api_response.success_response_with_data(res, 'Company list', compnay_list)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (err) {
            logger.log('error', 'failed while calling  get_my_profile function' + err.message);
            return api_response.error_response(res, 'Something went wrong');
        }
    },


    get_employee_list: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            let pipeline = []

            let _limit = 25;
            let _skip = 0
            let _sort = -1

            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id === '' || req.query.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            if(req.query.hasOwnProperty("limit")){
                _limit = parseInt(req.query.limit)
            }

            if(req.query.hasOwnProperty("offset")){
                _skip = parseInt(req.query.offset)
            }

            if(req.query.hasOwnProperty("sort_by")){
                _sort = parseInt(req.query.sort_by)
            }

            pipeline.push({"$match": {"is_deactive": false}})
            pipeline.push({"$match": {"_id": {"$ne": new ObjectId(req.user._id)}}})
            pipeline.push({"$match": { company_ids: {"$in": [req.query.company_id]} }})
            let count_pipeline = [...pipeline];
            
            count_pipeline.push({"$group" : {_id:"$id", count:{$sum:1}}})

            pipeline.push({"$project": {"password": 0}})
            pipeline.push({"$limit": _limit})
            pipeline.push({"$skip": _skip})
            pipeline.push({"$sort": {"first_name": _sort}})

            let user_count_data = await dbo_admin.collection("users").aggregate(count_pipeline).toArray();
        
            let user_list = await dbo_admin.collection("users").aggregate(pipeline).toArray();
            if (user_list.length) {
                return api_response.success_response_with_data_count(res, 'Employee list', user_count_data.length ? user_count_data[0].count : 0, user_list)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (err) {
            console.log(err)
            logger.log('error', 'failed while calling  get_my_profile function' + err.message);
            return api_response.error_response(res, 'Something went wrong');
        }
    },

    get_company_profile: async (req, res, next) => {

        try {

            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id === '' || req.query.company_id === 'undefined') {
                return api_response.parameter_not_found_response(res, "Company id is missing!")
            }

            let company_id = req.query.company_id

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let user_data = await dbo_admin.collection("users").findOne({ _id: new ObjectId(req.user._id) });

            if (!user_data) {
                return api_response.not_found_response(res, 'No such data found');
            }

            compnay_data = await dbo_admin.collection("company_master").findOne({ "company_id": company_id })
            if (compnay_data) {
                let company_db = db.get().db(compnay_data.db_name);
                compnay_profile = await company_db.collection("company_master").find({ "company_id": company_id }, { sort: { 'update_at': -1 }, limit: 1 }).toArray()
                return api_response.success_response_with_data(res, 'Company data', compnay_profile.length ? compnay_profile[0] : {})
            } else {
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (error) {
            logger.log('error', 'failed while calling  get_my_profile function' + err.message);
            return api_response.error_response(res, 'Something went wrong');
        }

    },


    activate_licence_key: async (req, res, next) => {
        try {

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            if (req.body.hasOwnProperty('licence_key') == false || req.body.licence_key === '' || req.body.licence_key === 'undefined') {
                return api_response.error_response(res, "licence key is missing!")
            }
            console.log(req.body)


            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let compnay_data = await dbo_admin.collection("company_master").findOne({ "company_id": req.body.company_id })
            let subcrip_resp = await dbo_admin.collection("subscription_master").findOne({ '$and': [{ "licence_key": req.body.licence_key }, { "company_id": null }] })
            if (compnay_data && subcrip_resp) {
                console.log(req.user._id)

                let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")
                let expired_at = moment.utc(new Date()).add(1, subcrip_resp.plan_type).format("YYYY-MM-DD HH:mm:ss")

                await dbo_admin.collection("subscription_master").updateOne({ "_id": subcrip_resp._id },
                    {
                        '$set': {
                            "company_id": req.body.company_id,
                            'expired_at': expired_at,
                            'update_at': doc_datetime
                        },
                        '$addToSet': { 'user_ids': req.user._id }
                    })

                return api_response.success_response(res, "Licence key has been activated successfully")




            } else {
                return api_response.not_found_response(res, 'Please check company id or license key!')
            }

        } catch (err) {
            console.log(err)
            logger.log('error', 'failed while calling activate_licence_key' + err.message);
            return res.status(400).json({ status: err.statusCode, message: 'failed while calling activate_licence_key' + err.message });
        }
    },

    user_mapping: async (req, res, next) => {
        try {

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.error_response(res, "Company id is missing!")
            }

            if (req.body.hasOwnProperty('employees_ids') == false || req.body.employees_ids === '' || req.body.employees_ids === 'undefined') {
                return api_response.error_response(res, "Employees ids is missing!")
            }

            if (req.body.hasOwnProperty('licence_key_id') == false || req.body.licence_key_id === '' || req.body.licence_key_id === 'undefined') {
                return api_response.error_response(res, "licence key id is missing!")
            }


            let compnay_id = [];
            let employees_ids = [];
            compnay_id.push(req.body.company_id);

            let req_employees_ids = req.body.employees_ids
            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let user_data = await dbo_admin.collection("users").aggregate([
                {
                    $match: {
                        "company_ids": {
                            $in: compnay_id
                        }
                    }
                },
                { $group: { _id: null, ids: { $push: { $toString: "$$ROOT._id" } } } }
            ]).toArray()


            if (user_data.length && user_data[0].ids.length == 0) {
                return api_response.not_found_response(res, 'No such data found');
            }

            console.log(user_data)
            employees_ids = user_data[0].ids;
            let arrayDifference = req_employees_ids.filter(x => employees_ids.indexOf(x) === -1);
            if (arrayDifference.length) {
                return api_response.validation_error_with_data(res, "Following ids are not matching", arrayDifference)
            }

            let subcrip_resp = await dbo_admin.collection("subscription_master").findOne({ '$and': [{ "company_id": req.body.company_id }, { "_id": ObjectId(req.body.licence_key_id) }] }).toArray()

            if (subcrip_resp && subcrip_resp.length) {
                let added_users = subcrip_resp.user_ids.length;
                let allowed_users = subcrip_resp.no_of_user
                if (added_users <= allowed_users) {
                    let response_data = await dbo_admin.collection("subscription_master").updateOne({ '$and': [{ "company_id": req.body.company_id }, { "_id": ObjectId(req.body.licence_key_id) }] }, { $addToSet: { 'user_ids': { $each: req_employees_ids } } })
                    return api_response.success_response_with_data(res, "User has been maaped successfully", response_data)

                } else {
                    return api_response.error_response(res, 'Your limit has been exhausted !')
                }

            } else {
                return api_response.not_found_response(res, 'No licence key found')
            }

        } catch (err) {
            logger.log('error', 'failed while calling user_mapping' + err.message);
            return res.status(400).json({ status: err.statusCode, message: 'failed while calling user_mapping' + err.message });
        }
    },

    add_access_module: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")
            req.body.created_at = doc_datetime
            req.body.updated_at = doc_datetime
            

            if (req.body.hasOwnProperty('company_id') == false || req.body.company_id === '' || req.body.company_id === 'undefined') {
                return api_response.parameter_not_found_response(res, "Company id is missing!")
            }

            if (req.body.hasOwnProperty('employee_id') == false || req.body.employee_id === '' || req.body.employee_id === 'undefined') {
                return api_response.parameter_not_found_response(res, "Employee id is missing!")
            }

            if (req.body.hasOwnProperty('location_id') == false || req.body.location_id === '' || req.body.location_id === 'undefined') {
                return api_response.parameter_not_found_response(res, "Location id is missing!")
            }

            if (req.body.hasOwnProperty('module_list') == false || req.body.module_list === '' || req.body.module_list === 'undefined') {
                return api_response.parameter_not_found_response(res, "Module list is missing!")
            }

            req.body.module_list = (req.body.module_list).split(",")

            req.body.is_deactive = false

            let query_obj = {
                company_id: req.body.company_id,
                location_id: req.body.location_id,
                employee_id: req.body.employee_id,
            }
            let compnay_data = await dbo_admin.collection("company_master").findOne({ "company_id": req.body.company_id })
            if (compnay_data) {

                let module_resp_data = await dbo_admin.collection("user_access_master").findOne(query_obj)
                if (module_resp_data) {
                    let module_upt_data = await dbo_admin.collection("user_access_master").updateOne(query_obj, { "$set": req.body })
                    return api_response.success_response_with_data(res, 'User data has been updated successfully', module_upt_data)
                }else{
                    let module_data = await dbo_admin.collection("user_access_master").updateOne(query_obj, { '$set': req.body }, { upsert: true })
                    return api_response.success_response_with_data(res, 'User data has been saved successfully', module_data)
                }
                
            } else {
                return api_response.not_found_response(res, 'No data found')
            }





        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_module' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    get_module_list: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            let pipeline = []

            let _limit = 25;
            let _skip = 0
            let _sort = -1

            if(req.query.hasOwnProperty("limit")){
                _limit = parseInt(req.query.limit)
            }

            if(req.query.hasOwnProperty("offset")){
                _skip = parseInt(req.query.offset)
            }

            if(req.query.hasOwnProperty("sort_by")){
                _sort = parseInt(req.query.sort_by)
            }


            if(req.query.hasOwnProperty("search_query")){
                pipeline.push({"$match": {"title": { $regex: req.query.search_query, $options: 'g' }}})
            }


            if(req.query.hasOwnProperty("module_id")){
                pipeline.push({"$match": {"_id": new ObjectId(req.query.module_id)}})
            }


            // pipeline.push({"$match": {"is_deactive": false}})
            let count_pipeline = [...pipeline];
            
            count_pipeline.push({"$group" : {_id: null, count:{$sum:1}}})
            pipeline.push({"$limit": _limit})
            pipeline.push({"$skip": _skip})
            pipeline.push({"$sort": {"title": _sort}})

            let module_count_data = await dbo_admin.collection("modules_master").aggregate(count_pipeline).toArray();
            console.log(pipeline)
            let module_list = await dbo_admin.collection("modules_master").aggregate(pipeline).toArray();
            if (module_list.length) {
                return api_response.success_response_with_data_count(res, 'Module list', module_count_data.length ? module_count_data[0].count : 0, module_list)
            } else {
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (err) {
            console.log(err)
            logger.log('error', 'failed while calling  get_my_profile function' + err.message);
            return api_response.error_response(res, 'Something went wrong');
        }
    },

    get_access_module_list: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);
            let pipeline = []

            let _limit = 25;
            let _skip = 0
            let _sort = -1;

            console.log(req.query)

            if (req.query.hasOwnProperty('company_id') == false || req.query.company_id === '' || req.query.company_id === 'undefined') {
                return api_response.parameter_not_found_response(res, "Company id is missing!")
            }

           

            if(req.query.hasOwnProperty("employee_id")) {
                pipeline.push({"$match": { "employee_id": req.query.employee_id }})
            }else{
                pipeline.push({"$match": { "employee_id": req.user._id }})
            }

            if(req.query.hasOwnProperty("location_id")){
                pipeline.push({"$match": { "location_id": req.query.location_id}})
            }

            if(req.query.hasOwnProperty("limit")){
                _limit = parseInt(req.query.limit)
            }

            if(req.query.hasOwnProperty("offset")){
                _skip = parseInt(req.query.offset)
            }

            if(req.query.hasOwnProperty("sort_by")){
                _sort = parseInt(req.query.sort_by)
            }



            if(req.query.hasOwnProperty("module_id")){
                pipeline.push({"$match": {"_id": new ObjectId(req.query.module_id)}})
            }

            pipeline.push({"$match": { "company_id": req.query.company_id}})
            pipeline.push({"$match": {"is_deactive": false}})
            let count_pipeline = [...pipeline];
            
            count_pipeline.push({"$group" : {_id: null, count:{$sum:1}}})
            pipeline.push({"$limit": _limit})
            pipeline.push({"$skip": _skip})
            pipeline.push({"$sort": {"title": _sort}})

            let compnay_data = await dbo_admin.collection("company_master").findOne({ "company_id": req.query.company_id })
            if (compnay_data) {
                let company_db = db.get().db(compnay_data.db_name);

                let module_count_data = await dbo_admin.collection("user_access_master").aggregate(count_pipeline).toArray();
                console.log(pipeline)
                
                let module_list = await dbo_admin.collection("user_access_master").aggregate(pipeline).toArray();
                if (module_list.length) {
                    let _modules = module_list[0].module_list.map(x => ObjectId(x));
                    let module_master_list = await dbo_admin.collection("modules_master").aggregate([
                        {"$match": {"_id": {"$in": _modules}}}
                    ]).toArray();
                    module_list[0].module_details = module_master_list
                    // let module_data = await dbo_admin.collection("modules_master").aggregate([{"$match": {"_id":}}])
                    return api_response.success_response_with_data_count(res, 'Module access list', module_count_data.length ? module_count_data[0].count : 0, module_list)
                } else {
                    return api_response.not_found_response(res, 'No data found')
                }
            }else{
                return api_response.not_found_response(res, 'No data found')
            }

        } catch (err) {
            console.log(err)
            logger.log('error', 'failed while calling  get_access_module_list function' + err.message);
            return api_response.error_response(res, 'Something went wrong');
        }
    },
}