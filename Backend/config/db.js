require('dotenv').config();

// const db_host = process.env.MONGODB_HOST
// const db_port = process.env.MONGODB_PORT
// const username = process.env.MONGODB_USER;
// const password = process.env.MONGODB_PASSWORD;

const db_host = process.env.MONGODB_HOST != undefined ? process.env.MONGODB_HOST : "localhost";
const db_port = process.env.MONGODB_PORT != undefined ? process.env.MONGODB_PORT : "27017";
const username = process.env.MONGODB_USER != undefined ? process.env.MONGODB_USER : "admin";
const password = process.env.MONGODB_PASSWORD != undefined ? process.env.MONGODB_PASSWORD : "envixiadmin";

const admin_db = "ENVIXI_ADMIN_DB"
var mongoClient = require('mongodb').MongoClient;

let mongodb;

function connect(callback){
   
   let db_name = '';
   // let mongoDbUrl = "mongodb://localhost:27017/"+db_name;
   let mongoDbUrl = "mongodb://"+username+":"+password+"@"+db_host+":"+db_port+"/"+db_name;
   console.log(mongoDbUrl);
   mongoClient.connect(mongoDbUrl, { useUnifiedTopology: true }, (err, db) => {
       
       mongodb = db;
       callback();
   });
}
function get(){
   return mongodb;
}

function close(){
   mongodb.close();
}

function getAdminDb(){
   return admin_db;
}


module.exports = {
   connect,
   get,
   close,
   getAdminDb
};
