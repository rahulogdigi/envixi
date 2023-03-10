var express = require('express');
var router = express.Router();

const { user_register, login, forgot_password, set_password, refresh_token, register_reseller, change_password } = require('../controller/auth_controller');

const SchemaValidator = require('../middleware/SchemaValidator');
const validateRequest = SchemaValidator(true);
var authorize = require('../helpers/authorize');
var Role = require('../helpers/role');
const { block_unblock_reseller } = require('../controller/reseller_controller');

/* GET users listing. */
router.use(function (req, res, next) {
  next()
})


/**
 * @api {post} /api/auth/register User singup
 * @apiName SignUp
 * @apiGroup User
 *
 * @apiParam {String} emailid emailid unique user.
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} email email of the User.
 * @apiParam {String} password  password of the User.
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *   "email": "rmitra@gmail.com",,
 *   "password": "123456",
 *   "first_name": "Nitish",
 *   "last_name": "Kumar"
 *}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
 *   "status": 200,
 *   "message": "User created successfully."
 * }
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Username already exist
 *     {
          "status": 400,
          "message": "Username already exists."
      }
 * 
 * 
 */


/**
 * @api {post} /api/auth/register Employee singup
 * @apiName Employee SignUp
 * @apiGroup User
 *
 * @apiParam {String} emailid emailid unique user.
 *
 * @apiParam {String} firstname Firstname of the User.
 * @apiParam {String} lastname  Lastname of the User.
 * @apiParam {String} email email of the User.
 * @apiParam {String} password  password of the User.
 * @apiParam {String} ref_token  ref_token of the Employeer.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *   "email": "rmitra@gmail.com",,
 *   "password": "123456",
 *   "first_name": "Rahul",
 *   "last_name": "Mitra",
 *   "ref_token": "123456XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXSGGDHDHHDVXVXXXXXXXXXXXXXXXXX"
 *}

 * @apiParamExample {json} Request-Example:
 {
    "email": "nitish@gmail.com",
    "password": "12345678",
    "first_name": "Nitish",
    "last_name": "Kumar"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "User created successfully.",
    "data": {
        "_id": "630121a91f7e0cd7cb9ead8c",
        "email": "nitish@gmail.com",
        "role": "Employeer",
        "first_name": "Nitish",
        "last_name": "Kumar",
        "company_ids": []
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzAxMjFhOTFmN2UwY2Q3Y2I5ZWFkOGMiLCJyb2xlIjoiRW1wbG95ZWVyIiwiaWF0IjoxNjYxMDE4NTM4LCJleHAiOjE2NjEwMjAzMzh9.e3YQbj3xNsFYM-8I0sU_FP98En1R7O7fgxFYccmIi8o",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzAxMjFhOTFmN2UwY2Q3Y2I5ZWFkOGMiLCJyb2xlIjoiRW1wbG95ZWVyIiwiaWF0IjoxNjYxMDE4NTM4LCJleHAiOjE2NjEwMjIxMzh9.fg3qiZAv0IUxP-BUTBG8f9BosXYX7yMV_aqxPXiXz3c"
}
 *     
 * 
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Username already exist
 *     {
          "status": 400,
          "message": "Username already exists."
      }
 * 
 * 
 */

router.post('/register', validateRequest, user_register);


/**
 * @api {post} /api/auth/login Request User Login
 * @apiName User Login
 * @apiGroup User
 *
 * @apiParam {String} email email of the User.
 * @apiParam {String} password  password of the User.
 * 
 *  * @apiParamExample {json} Request-Example:
 *      {
 *   "email": "rmitra@gmail.com",
 *   "password": "12345678"
 *}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "Login successfully.",
    "data": {
        "user": {
            "_id": "62dd46a52d33afcafa765687",
            "email": "sumit.gupta@gmail.com",
            "role": "Employeer",
            "first_name": "Sumit",
            "last_name": "Gupta",
            "company_ids": [
                "c385b73a2efcb4f46eaabc51be083989"
            ],
            "is_deactive": false
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmRkNDZhNTJkMzNhZmNhZmE3NjU2ODciLCJyb2xlIjoiRW1wbG95ZWVyIiwibGljZW5jZV9rZXkiOiJYQlZQLUJMU0ctRzJRUi1BTTBJLUtENTEtOTlUMi1XMFBTLVhXRUEiLCJpYXQiOjE2NzM1NDQ3MjgsImV4cCI6MTY3MzU0NjUyOH0.-0mX-MoAf7x9KxtiLIBHt4yxkBE4uboljDgTj-c58x8",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmRkNDZhNTJkMzNhZmNhZmE3NjU2ODciLCJyb2xlIjoiRW1wbG95ZWVyIiwibGljZW5jZV9rZXkiOiJYQlZQLUJMU0ctRzJRUi1BTTBJLUtENTEtOTlUMi1XMFBTLVhXRUEiLCJpYXQiOjE2NzM1NDQ3MjgsImV4cCI6MTY3MzU0ODMyOH0.-gCr1pJMRFhn1XrnFWIGGpFFl6KUa3wp6tbwQ1faVt8",
        "licence_key": "active"
    }
}
 *
 * @apiError UserNotFound The emailId of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
    "status": 404,
    "message": "No such data found"
}
 */


router.post("/login", login);



/**
 * @api {post} /api/auth/forgot_password Request Forgot/Reset password
 * @apiName Forgot/Reset password
 * @apiGroup User
 *
 * @apiParam {String} email email of the User.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *         "email": "niti3211@gmail.com",
 *          "reset_url": "http://example.com"
 *      }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "password reset link sent to your email account"
}
 *
 * @apiError UserNotFound The emailId of the User was not found.
 * 
 *  @apiErrorExample Error-Response:
 * HTTP/1.2 404 Not Found
 * {
    "status": 404,
    "message": "No such data found"
}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 503 Not Found
 *     {
    "status": 503,
    "message": "Something went wrong"
}
 */
router.post("/forgot_password", forgot_password)

/**
 * @api {post} /api/auth/set_password Request Set password
 * @apiName Set password
 * @apiGroup User
 *
 * @apiParam {String} token token of the User.
 * @apiParam {String} password new password of the User.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
    "token": "87a45ce7fcfxxxxxxxxxxxxxxxxxxxxxxxxxxx6d",
    "password": "xxxxxxxxxxxxxxx"
}
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "password reset sucessfully."
}
 *
 * @apiError UserNotFound The emailId of the User was not found.
 * 
 *  @apiErrorExample Error-Response:
 * HTTP/1.1 404 Not Found
 * {
    "status": 404,
    "message": "No such data found"
    }
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 503 Not Found
 *     {
            "status": 503,
            "message": "Something went wrong"
        }
 */
router.post("/set_password", validateRequest, set_password)



/**
 * @api {post} /api/auth/register_reseller Register reseller or update
 * @apiName Register reseller or update
 * @apiGroup Admin
 *
 * @apiParam {String} email email unique Reseller.
 *
 * @apiParam {String} reseller_name retailer_name of the Reseller.
 * @apiParam {String} contact_person  contact_person of the Reseller.
 * @apiParam {String} contact_number  contact_number of the Reseller.
 * @apiParam {String} email email of the Reseller.
 * @apiParam {String} password  password of the Reseller.
 * 
 * @apiDeprecated ref_token send as a params.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
    "email": "inx@gmail.com",
    "password": "12345678",
    "reseller_name": "Inx pvt. ltd.",
    "contact_person": "Kumar",
    "contact_number": "9874561230"
}
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Reseller added successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 0,
        "upsertedId": "631e2951901c46bc16c55e71",
        "upsertedCount": 1,
        "matchedCount": 0
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

router.post('/register_reseller', authorize([Role.Admin]), validateRequest, register_reseller);


/**
 * @api {post} /api/auth/block_unblock_reseller Request to block and unblock users/reseller
 * @apiName Request to block and unblock users/reseller
 * @apiGroup Admin
 *
 * @apiParam {String} reseller_id reseller_id unique reseller_id.
 *
 * @apiParam {String} is_deactive is_deactive value of the is_deactive.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
            "reseller_id": "62ff1ed9c68075e2636943b8",
            "is_deactive": true
        }
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Reseller data updated successfully"
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
router.post('/block_unblock_reseller', authorize([Role.Admin]), validateRequest, block_unblock_reseller);



/**
 * @api {post} /api/auth/refresh_token Refresh token
 * @apiName Refresh token
 * @apiGroup User
 *
 * @apiParam {String} refresh_token refresh_token of the user.
 * @apiParam {String} email email of the User.
 * 
 * @apiParamExample {json} Request-Example:
 *     {
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmRkNDZhNTJkMzNhZmNhZmE3NjU2ODciLCJyb2xlIjoiRW1wbG95ZWVyIiwiaWF0IjoxNjcxMDM2NjU3LCJleHAiOjE2NzEwNDAyNTd9.qgyRRvmMge7HOgHptJPvZUBqBDYnhX6rtmdR-gtJRAQ",
        "email": "sumit.gupta@gmail.com"
    }
 * 
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
 * {
    "status": 200,
    "message": "Access token",
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmRkNDZhNTJkMzNhZmNhZmE3NjU2ODciLCJyb2xlIjoiRW1wbG95ZWVyIiwiaWF0IjoxNjcxMDM3MTg0LCJleHAiOjE2NzEwMzg5ODR9.sP-UlcBNFaz3rXJbDgS1sqNbauk37mObPCO1aMf-T1Q"
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
router.post('/refresh_token', validateRequest, refresh_token);



/**
 * @api {post} /api/auth/change_password Request Change password
 * @apiName Request Change password
 * @apiGroup Admin
 *
 * @apiParam {String} email email of the User.
 * 
 * 
 * @apiParamExample {json} Request-Example:
 *      {
 *         "email": "niti3211@gmail.com",
 *         "new_password": "dfdfg"
 *      }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
    "status": 200,
    "message": "password has been updated successfully"
}
 *
 * @apiError UserNotFound The emailId of the User was not found.
 * 
 *  @apiErrorExample Error-Response:
 * HTTP/1.2 404 Not Found
 * {
    "status": 404,
    "message": "No such data found"
}
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 503 Not Found
 *     {
    "status": 503,
    "message": "Something went wrong"
}
 */
router.post("/change_password", authorize([Role.Admin]), validateRequest, change_password)






module.exports = router;
