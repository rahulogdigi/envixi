var Role = require('../helpers/role');
const db = require('../config/db');
// Require logger.js
const logger = require('../utils/logger');
var moment = require('moment');
const jwt = require("jsonwebtoken");
var { encrypt_password, decrypt_password } = require('../helpers/psw_enp_desp')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
const api_response = require("../helpers/api_response");
const crypto = require("crypto");
const send_email = require('../utils/send_email')
const product_key_vld = require('../middleware/product_key_validator')
var refresh_tokens = {}

module.exports = {


    user_register: async (req, res, next) => {

        try {
            let admin_db_name = db.getAdminDb();
            var dbo = db.get().db(admin_db_name);
            var company_id = [];
            let role = Role.Employeer
            let cid = ''
            let company_data = false;

            req.body.password = await encrypt_password(req.body.password);


            if (req.query.hasOwnProperty('ref_token')) {
                console.log("here")
                token_string = await cryptr.decrypt(req.query.ref_token);
                cid = token_string.split('_')[0]
                let _email = token_string.split('_')[1]
                let _expire_date = token_string.split('_')[2]
                let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD")
                if (_expire_date < doc_datetime) {
                    return api_response.error_response(res, 'Link has been expired !')
                }

                if (req.body.email !== _email) {
                    return api_response.error_response(res, 'Please enter valid email address')
                }
                role = Role.Employee
                console.log(cid)
                company_id.push(cid)
                company_data = await dbo.collection("company_master").findOne({ company_id: cid })
                if (!company_data) {
                    return api_response.error_response(res, 'Ref token is not valid')
                }

            }

            var adminUserObj = { email: req.body.email, password: req.body.password, role: role, first_name: req.body.first_name, last_name: req.body.last_name, company_ids: company_id };
            console.log(adminUserObj)
            const user = await dbo.collection("users").findOne({ email: req.body.email});

            if (!user) {
                return dbo.collection("users").insertOne(adminUserObj).then(async response => {
                    const _user = await dbo.collection("users").findOne({ email: req.body.email });
                    delete _user.password;
                    let jwtPayload = {
                        _id: _user._id,
                        role: _user.role
                    };
                    const secret = process.env.JWT_SECRET;
                    //Generated JWT token with Payload and secret.
                    const token = jwt.sign(jwtPayload, secret, { expiresIn: process.env.JWT_TIMEOUT_DURATION })
                    const refresh_token = jwt.sign(jwtPayload, secret, { expiresIn: process.env.JWT_TIMEOUT_DURATION_REF })
                    return res.status(200).json({ status: 200, message: 'User created successfully.', data: _user, token: token, refresh_token: refresh_token })
                }).catch(err => {
                    if (err) {
                        return res.status(500).json({ status: 400, message: 'Something went wrong.' })
                    };
                    console.log("User: " + email + " created !!");
                });
            } else {
                return res.status(400).json({ status: 400, message: 'Email already exists.' })
            }

        } catch (err) {
            return res.status(400).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });
        }



    },

    login: async (req, res, next) => {

        try {

            let admin_db_name = db.getAdminDb();
            var dbo = db.get().db(admin_db_name);

            const user = await dbo.collection("users").findOne({ email: req.body.email })

            if (!user) {
                return res.status(404).json({ status: 404, message: 'No such data found' });
            } else {
                if(user.is_deactive === true){
                    return api_response.success_response(res, "Your account has been deactivated");
                }
                const pwd = await decrypt_password(req.body.password, user.password)
                console.log("enter" + pwd)
                if (user && pwd) {
                    _user_id = (user._id).toString()
                    key_data = await product_key_vld.is_active_product_key(_user_id)
                    console.log(key_data)
                    let jwtPayload = {
                        _id: _user_id,
                        role: user.role,
                        licence_key: key_data != null ? key_data : null
                    };

                    const secret = process.env.JWT_SECRET;
                    //Generated JWT token with Payload and secret.
                    const token = jwt.sign(jwtPayload, secret, { expiresIn: process.env.JWT_TIMEOUT_DURATION })
                    const refresh_token = jwt.sign(jwtPayload, secret, { expiresIn: process.env.JWT_TIMEOUT_DURATION_REF })
                    let token_data = {
                        email: req.body.email,
                        token: refresh_token,
                        token_type: "refresh_token"
                    }
                    await dbo.collection("token_master").updateOne({ email: req.body.email, token_type: "refresh_token" }, { "$set": token_data }, { upsert: true })
                    // refresh_tokens[refresh_token] = req.body.email;
                    delete user.password;
                    console.log("Returning JWT Token for email: " + user.email);
                    let res_data = {
                        user: user,
                        token: token,
                        refresh_token: refresh_token,
                        licence_key: key_data != null ? 'active' : 'de-active'
                    }
                    return res.status(200).json({ status: 200, message: 'Login successfully.', data: res_data })


                } else {
                    logger.log('error', 'User login failed n-1 ');
                    return res.status(500).json({ status: 500, message: 'User creation Failed.' });
                }

            }

        } catch (err) {
            logger.log('error', 'User login failed ' + err.message);
            return res.status(500).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });
        }



    },

    add_user: async (req, res, next) => {

        try {

            return true


        } catch (e) {
            logger.log('error', 'User-Employee registration failed ' + err.message);
            return res.status(500).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });
        }
    },


    forgot_password: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo = db.get().db(admin_db_name);

            if (req.body.hasOwnProperty('reset_url') == false || req.body.reset_url === '' || req.body.reset_url === 'undefined') {
                return api_response.error_response(res, "reset_url is missing!")
            }

            const user = await dbo.collection("users").findOne({ email: req.body.email })

            if (!user) {
                return res.status(404).json({ status: 404, message: 'No such data found' });
            } else {

                var token = await dbo.collection("token_master").findOne({ email: req.body.email, token_type: "forgot_token" })
                const encrypted_token_string = await cryptr.encrypt(req.body.email);
                if (!token) {
                    await dbo.collection("token_master").insertOne({ email: req.body.email, token: encrypted_token_string, token_type: "forgot_token" })
                    var token = await dbo.collection("token_master").findOne({ email: req.body.email, token_type: "forgot_token" })
                }

                const link = `${req.body.reset_url}/${user._id}/${token.token}`;
                await send_email(user.email, "Password reset", link);

                return api_response.success_response(res, 'password reset link sent to your email account')

            }

        } catch (err) {

            logger.log('error', 'User-Employee registration failed ' + err.message);
            return res.status(500).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });

        }
    },

    set_password: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo = db.get().db(admin_db_name);

            if (req.query.hasOwnProperty('token') == false) {
                return res.status(404).json({ status: 404, message: 'Please provide token !' });
            }

            req.body.email = await cryptr.decrypt(req.query.token);

            const user = await dbo.collection("users").findOne({ email: req.body.email })

            if (!user) {
                return res.status(404).json({ status: 404, message: 'Please provide a valid token' });
            } else {


                let token = await dbo.collection("token_master").findOne({ email: req.body.email, token: req.body.token, token_type: "forgot_token" })
                if (!token) {
                    return api_response.error_response(res, "Invalid link or expired")
                }

                req.body.password = await encrypt_password(req.body.password);
                await dbo.collection("users").updateOne({ email: req.body.email }, { "$set": { "password": req.body.password } });
                await dbo.collection("token_master").deleteOne({ email: req.body.email, token_type: "forgot_token" });

                return api_response.success_response(res, "password reset sucessfully.")
            }

        } catch (err) {
            logger.log('error', 'User-Employee registration failed ' + err.message);
            return res.status(500).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });
        }
    },

    register_reseller: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo = db.get().db(admin_db_name);
            let req_data = req.body;

            let doc_datetime = moment.utc(new Date()).format("YYYY-MM-DD HH:mm:ss")
            req_data.wallet_balance = 0
            req_data.is_deactive = false
            req_data.created_at = doc_datetime
            req_data.updated_at = doc_datetime
            req_data.role = Role.Reseller


            if(req.body.hasOwnProperty("password")){
                req_data.password = await encrypt_password(req.body.password);
            }

            const user = await dbo.collection("users").findOne({ email: req.body.email});
            if(user){
                return res.status(400).json({ status: 400, message: 'Email already exists.' })
            }else{

                const user_resp = await dbo.collection("users").insertOne(req_data);
                return api_response.success_response_with_data(res, "Retailer added successfully", user_resp)

            }

        } catch (error) {
            logger.info('error', 'Something went wrong while calling add_plan' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    refresh_token: async (req, res, next) => {
        let admin_db_name = db.getAdminDb();
        var dbo = db.get().db(admin_db_name);
        try {

            const user = await dbo.collection("users").findOne({ email: req.body.email })

            if (!user) {
                return res.status(404).json({ status: 404, message: 'No such data found' });
            }

            if (req.body.refresh_token == null) {
                return api_response.error_response(res, "Refresh Token is required!")
            }

            let token = await dbo.collection("token_master").findOne({email: req.body.email, token: req.body.refresh_token, token_type: "refresh_token" })
            if (!token) {
                return api_response.error_response(res, "Refresh token is not in database!")
            }

            // Verifying refresh token
            let jwtPayload = {
                _id: user._id,
                role: user.role,
            };

            const secret = process.env.JWT_SECRET;
            jwt.verify(req.body.refresh_token, secret, process.env.JWT_TIMEOUT_DURATION_REF, (err, decoded) => {
                if (err) {
                    // Wrong Refesh Token
                    return api_response.unauthorized_response(res, 'Unauthorized');
                } else {
                    // Correct token we send a new access token
                    const access_token = jwt.sign(jwtPayload, secret, { expiresIn: process.env.JWT_TIMEOUT_DURATION })
                    return api_response.success_response_with_data(res, "Access token", access_token)
                }
            })


        } catch (error) {
            logger.info('error', 'Something went wrong while calling refresh_token' + error)
            return api_response.error_response(res, "Something went wrong" + error.message);
        }
    },

    change_password: async (req, res, next) => {
        try {

            let admin_db_name = db.getAdminDb();
            var dbo = db.get().db(admin_db_name);



            if (req.body.hasOwnProperty('email') == false || req.body.email === '' || req.body.email === 'undefined') {
                return api_response.error_response(res, "email is missing!")
            }

            if (req.body.hasOwnProperty('new_password') == false || req.body.new_password === '' || req.body.new_password === 'undefined') {
                return api_response.error_response(res, "new_password is missing!")
            }

            const user = await dbo.collection("users").findOne({ email: req.body.email })

            if (!user) {
                return res.status(404).json({ status: 404, message: 'No such user found' });
            } else {

                req.body.new_password = await encrypt_password(req.body.new_password);
                await dbo.collection("users").updateOne({ email: req.body.email }, { "$set": { "password": req.body.new_password } });

                return api_response.success_response(res, "password has been updated successfully.")
            }

        } catch (err) {
            logger.log('error', 'User-Employee registration failed ' + err.message);
            return res.status(500).json({ status: err.statusCode, message: 'User creation Failed.' + err.message });
        }
    },
}



