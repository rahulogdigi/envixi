var express = require("express");
var authRouter = require("./auth");
var companyRouter = require('./company');
var formsRouter = require("./forms");
var planRouter = require("./plan");
var resellerRouter = require("./reseller")
var adminRouter = require("./admin")

var app = express();

app.use("/auth/", authRouter);
app.use("/admin/", adminRouter);
app.use("/company/", companyRouter);
app.use("/form/", formsRouter);
app.use("/plan/", planRouter);
app.use("/reseller/", resellerRouter);


module.exports = app;