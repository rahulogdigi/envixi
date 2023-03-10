var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var _logger = require('morgan');
var db = require('./config/db.js');
var { encrypt_password } = require('./helpers/psw_enp_desp')
const Role = require('./helpers/role');
const errorHandler = require('./helpers/error-handler');
var cors = require('cors')

// Require logger.js
const logger = require('./utils/logger');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
require('dotenv').config();


var app = express();

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.use('/apidoc', express.static(path.join(__dirname, './apidoc')));
app.set('view engine', 'pug');

app.use(_logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


db.connect(() => {

  let db_name = db.getAdminDb();
  var dbo = db.get().db(db_name);
  dbo.collection("users").findOne({ email: "admin@admin.com" }).then(result => {
    if (result == null) {

      encrypt_password('admin').then(enc_pwd => {
        console.log("pswd = " + enc_pwd);
        var adminUserObj = { email: "admin@admin.com", password: enc_pwd, role: Role.Admin, first_name: "admin", last_name: "admin", company_ids: [] };
        dbo.collection("users").insertOne(adminUserObj, function (err, res) {
          if (err) throw err;
          console.info("Admin user created !!");
        })

      }, err => {
        throw error
      })

    } else {
      console.info("Admin user already exists !!");
    }
    logger.info("Server has been started and connected to mongodb");

  }, error => {
    throw error
  })

})

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);


// global error handler
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
