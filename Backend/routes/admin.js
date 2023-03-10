var express = require('express');
var router = express.Router();
var Role = require('../helpers/role');

const SchemaValidator = require('../middleware/SchemaValidator');
const validateRequest = SchemaValidator(true);
var authorize = require('../helpers/authorize');
const { add_module } = require('../controller/module_controller');



/**
 * @api {post} /api/admin/add_module Add module or Update
 * @apiName Add module or Update
 * @apiGroup Admin
 *
 * @apiParam {String} framework_id framework_id unique Framework.
 * @apiParam {String} id  id of the Module.
 * @apiParam {String} title title of the Module.
 * @apiParam {String} type type of the Module.
 * @apiParam {String} icon icon of the Module.
 * @apiParam {String} link link of the Module.
 * @apiParam {String} parent parent of the Module.
 * @apiParam {String} subtitle subtitle of the Module.
 * @apiParam {String} display_seq_number display_seq_number of the Module.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "framework_id": "63d555831e75024057742550",
    "id": "report",
    "title": "Generate BRSR Report",
    "type": "basic",
    "display_seq_number": 12,
    "icon": "heroicons_outline:chart-square-bar",
    "link": "/dashboard/generate-brsr-report",
    "parent": null,
    "subtitle": ""
}

{
    "framework_id": "63d555831e75024057742550",
    "id": "reporttest",
    "title": "Generate BRSR Report",
    "type": "basic",
    "display_seq_number": 12,
    "icon": "heroicons_outline:chart-square-bar",
    "link": "/dashboard/generate-brsr-report",
    "parent": "",
    "subtitle": "",
    "module_id": "63e4f03f164bb0415e46b516"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Module added successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 0,
        "upsertedId": "63d55e9e164bb0415e42d089",
        "upsertedCount": 1,
        "matchedCount": 0
    }
}

* @apiSuccessExample {json} Success-Response:
 * HTTP/1.2 200 OK
 * {
    "status": 200,
    "message": "Module updated successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 503 Something went wrong
 *     {
          "status": 503,
          "message": "Something went wrong."
      }
 * 
 * 
 */
router.post('/add_module', authorize([Role.Admin]), validateRequest, add_module)

module.exports = router;
