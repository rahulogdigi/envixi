var express = require('express');
var router = express.Router();
var Role = require('../helpers/role');

const SchemaValidator = require('../middleware/SchemaValidator');
const validateRequest = SchemaValidator(true);
var authorize = require('../helpers/authorize');
const { reseller_list, reseller_data } = require('../controller/reseller_controller');
const { create_product_key, get_subscription_list } = require('../controller/subsciption_controller');


/**
 * @api {get} /api/reseller Get reseller list
 * @apiName Get reseller list
 * @apiGroup Reseller
 *

 *
 * @apiParam {String} limit limit of the Data.
 * @apiParam {String} offset  offset of the Data.

 * 
 * @apiParamExample {json} Request-Example:
 *     {
    "limit": 25,
    "offset": 0
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Reseller list",
    "total": 2,
    "data": [
        {
            "_id": "631e2d41901c46bc16c56004",
            "email": "demo@gmail.com",
            "contact_number": "9874561210",
            "contact_person": "Demo",
            "created_at": "2022-09-11 18:47:29",
            "reseller_name": "Demo pvt. ltd.",
            "role": "Reseller",
            "updated_at": "2022-09-11 18:47:29",
            "wallet_balance": 0
        },
        {
            "_id": "631e2951901c46bc16c55e71",
            "email": "inx@gmail.com",
            "contact_number": "9874561230",
            "contact_person": "Kumar",
            "created_at": "2022-09-11 18:33:12",
            "reseller_name": "Inx pvt. ltd.",
            "role": "Reseller",
            "updated_at": "2022-09-11 18:33:12",
            "wallet_balance": 0
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

router.get('/', authorize([Role.Admin]), validateRequest, reseller_list);


/**
 * @api {post} /api/reseller/:reseller_id Get specific reseller data
 * @apiName Get specific reseller data
 * @apiGroup Reseller

 *
 * @apiParam {String} reseller_id reseller_id of the Retailer.
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Reseller data",
    "data": {
        "_id": "631e2d41901c46bc16c56004",
        "email": "demo@gmail.com",
        "contact_number": "9874561210",
        "contact_person": "Demo",
        "created_at": "2022-09-11 18:47:29",
        "reseller_name": "Demo pvt. ltd.",
        "role": "Reseller",
        "updated_at": "2022-09-11 18:47:29",
        "wallet_balance": 0
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

router.get('/:reseller_id', authorize([Role.Admin, Role.Reseller]), validateRequest, reseller_data);



/**
 * @api {post} /api/reseller/subscribe/create_product_key Create licence key 
 * @apiName Create licence key 
 * @apiGroup Reseller
 * 
 * @apiParam {String} company_id company_id of the Company.
 * @apiParam {String} plan_id  plan_id of the Plan.
 * @apiParam {String} no_of_user  no_of_user of the Company.

 * 
 * @apiParamExample {json} Request-Example:
 * 
 * {
    "plan_id": "631d62d6901c46bc16c52fca",
    "no_of_user": 6
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Licence key has been generated!",
    "data": {
        "acknowledged": true,
        "insertedId": "6328a9f2bbc7796db8296890"
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

router.post('/subscribe/create_product_key', authorize([Role.Admin, Role.Reseller]), validateRequest, create_product_key);

/**
 * @api {get} /api/reseller/subscribe/get_subscription_list Get licence key list
 * @apiName Get licence key list
 * @apiGroup Reseller
 * 
 * @apiParam {String} company_id company_id of the Company.
 * @apiParam {String} plan_id  plan_id of the Plan.
 * @apiParam {String} no_of_user  no_of_user of the Company.

 * 
 * @apiParamExample {json} Request-Example:
 * 
 * {
    "company_id": "c385b73a2efcb4f46eaabc51be083989",
    "plan_id": "631d62d6901c46bc16c52fca",
    "limit": 10,
    "offset": 0,
    "user_id": "dfvdfvfd, dfgdgdf",
    "licence_key": "dfddfvxxxxxxxxxxxx",
    "plan_id": "dfddcbfdxxxxxxxxxxxxx",
    "subscription_id": "dfddcbfdxxxxxxxxxxxxx",
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Licence list",
    "total": 2,
    "data": [
        {
            "_id": "63bee042ceae3462cd960a84",
            "plan_id": "631d6309901c46bc16c52fe0",
            "no_of_user": 4,
            "user_ids": [],
            "company_id": null,
            "created_at": "2023-01-11 16:13:54",
            "updated_at": "2023-01-11 16:13:54",
            "is_active": true,
            "plan_type": "years",
            "plan_cost": 600,
            "expired_at": "2024-01-11 16:13:54",
            "licence_key": "M6CD-0ZTZ-CR49-SPBV-KKC8-24YY-2OPY-HDLO",
            "userId": "63987e58164bb0415e35721e",
            "plan_name": [
                "Whitelabelled Basic Yearly"
            ],
            "reseller_name": [
                "Level Up Services"
            ]
        },
        {
            "_id": "63bedf63ceae3462cd960a83",
            "plan_id": "631d5fc0901c46bc16c52e78",
            "no_of_user": 2,
            "user_ids": [],
            "company_id": null,
            "created_at": "2023-01-11 16:10:11",
            "updated_at": "2023-01-11 16:10:11",
            "is_active": true,
            "plan_type": "months",
            "plan_cost": 20,
            "expired_at": "2023-02-11 16:10:11",
            "licence_key": "XBVP-BLSG-G2QR-AM0I-KD51-99T2-W0PS-XWEA",
            "userId": "63987e58164bb0415e35721e",
            "plan_name": [
                "Basic Monthly"
            ],
            "reseller_name": [
                "Level Up Services"
            ]
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

router.get('/subscribe/get_subscription_list', authorize([Role.Admin, Role.Reseller]), validateRequest, get_subscription_list);






module.exports = router