const api_response = require("../helpers/api_response");
var ObjectId = require('mongodb').ObjectId;
const db = require('../config/db')
var moment = require('moment');
// Require logger.js
const logger = require('../utils/logger');



module.exports = {

    add_module: async (req, res, next) =>{
        try {

            let admin_db_name = db.getAdminDb();
            var dbo_admin = db.get().db(admin_db_name);

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")
            let req_data = req.body;

            req_data.created_at = doc_datetime
            req_data.updated_at = doc_datetime
            req_data.is_deleted = false

            let req_obj = { 
                id: req.body.id,
                title: req.body.title,
                type: req.body.type,
			    framework_id: "63d555831e75024057742550"
             }

            if(req.body.hasOwnProperty("module_id")){
                req_obj = { "_id": ObjectId(req.body.module_id) }

                let module_data = await dbo_admin.collection("modules_master").findOne(req_obj)
                if (!module_data) {
                    return api_response.not_found_response(res, "No such data found")
                } else {
                    let module_data_upd = await dbo_admin.collection("modules_master").updateOne(req_obj, { '$set': req.body }, { upsert: false })
                    logger.info('success', 'Module updated successfully')
                    return api_response.success_response_with_data(res, "Module updated successfully", module_data_upd)
                }

            }else{
                let module_data = await dbo_admin.collection("modules_master").updateOne(req_obj, { '$set': req.body }, { upsert: true })
                logger.info('success', 'Module added successfully')
                return api_response.success_response_with_data(res, "Module added successfully", module_data)
            }

            
        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_module' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    }

    
}