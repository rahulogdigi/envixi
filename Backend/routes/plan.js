var express = require('express');
const { add_plan, get_plan_list, get_specific_plan, delete_specific_plan } = require('../controller/plan_controller');
var router = express.Router();
var Role = require('../helpers/role');

const SchemaValidator = require('../middleware/SchemaValidator');
const validateRequest = SchemaValidator(true);
var authorize = require('../helpers/authorize');




/**
 * @api {post} /api/plan Add plan or Update
 * @apiName Add plan or Update
 * @apiGroup Plan
 *
 * @apiParam {String} plan_name plan_name unique Plan.
 * @apiParam {String} price  price of the Plan.
 * @apiParam {String} display_price display_price of the Plan.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "plan_name": "Basic Monthly",
    "price": 100,
    "display_price": "Rs 100/month/user",
    "plan_id": "sdfdfxxxxxxxxxxxxx"
}

{
    "plan_name": "Basic Monthly",
    "price": 100,
    "display_price": "Rs 100/month/user"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Plan added successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
}

* @apiSuccessExample {json} Success-Response:
 * HTTP/1.2 200 OK
 * {
    "status": 200,
    "message": "Plan updated successfully",
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
router.post('/', authorize([Role.Admin]), validateRequest, add_plan)


/**
 * @api {get} /api/plan?limit=3&offset=2 Get plan list
 * @apiName Get plan list
 * @apiGroup Plan
 *
 * @apiParam {Number} limit The number of Plan.
 * @apiParam {Number} offset The number of the Plan.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "limit": 3,
    "offset": 2
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Plan list",
    "total": 4,
    "data": [
        {
            "_id": "631d62d6901c46bc16c52fca",
            "plan_name": "Basic Yearly",
            "created_at": "2022-09-11 04:25:43",
            "display_price": "Rs 80/year/user",
            "price": 80,
            "updated_at": "2022-09-11 04:25:43"
        },
        {
            "_id": "631d632b901c46bc16c52fef",
            "plan_name": "Whitelabelled Basic Month",
            "created_at": "2022-09-11 04:25:17",
            "display_price": "Rs 120/month/user",
            "price": 120,
            "updated_at": "2022-09-11 04:25:17"
        },
        {
            "_id": "631d6309901c46bc16c52fe0",
            "plan_name": "Whitelabelled Basic Yearly",
            "created_at": "2022-09-11 04:24:57",
            "display_price": "Rs 150/year/user",
            "price": 150,
            "updated_at": "2022-09-11 04:24:57"
        }
    ]
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

router.get('/', authorize([Role.Admin, Role.Reseller]), validateRequest, get_plan_list)



/**
 * @api {get} /api/plan/:plan_id Get specific plan
 * @apiName Get specific plan
 * @apiGroup Plan
 *
 * @apiParam {String} plan_id The plan_id of Plan.

 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Plan data",
    "data": {
        "_id": "631d62d6901c46bc16c52fca",
        "plan_name": "Basic Yearly",
        "created_at": "2022-09-11 04:25:43",
        "display_price": "Rs 80/year/user",
        "price": 80,
        "updated_at": "2022-09-11 04:25:43"
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

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found"
      }
 * 
 * 
 */
router.get('/:plan_id', authorize([Role.Admin, Role.Reseller]), validateRequest, get_specific_plan)


/**
 * @api {delete} /api/plan/:plan_id delete specific plan
 * @apiName Delete specific plan
 * @apiGroup Plan
 *
 * @apiParam {String} plan_id The plan_id of Plan.

 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Plan has been removed successfully"
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 503 Something went wrong
 *     {
          "status": 503,
          "message": "Something went wrong."
      }

 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.2 404 No such data found
 *     {
          "status": 404,
          "message": "No such data found"
      }
 * 
 * 
 */

router.delete('/:plan_id', authorize([Role.Admin]), validateRequest, delete_specific_plan)

module.exports = router;