var mongoose = require('mongoose'),
 Schema = mongoose.Schema;
var Bcrypt = require("bcrypt");
var moment = require('moment');
var {validation}  = require('../utils/utils')
var uniqueValidator = require('mongoose-unique-validator');


var UserSchema = new Schema({
    username: { 
        type: String, 
        required: validation('required'), 
        unique: true, 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'], 
        trim: true, 
        minlength: [6, validation('minChar')]
     },
    password: { 
        type: String, 
        required: validation('required'), 
        trim: true, 
        minlength: [6, validation('minChar')] 
    },
    last_login: { 
        type: Date, 
        default: Date.now },
    status: { 
        type: String, 
        enum: { values: ['Active', 'InActive'], 
        message: validation('enum') },
        default: 'InActive'
    }
}, { timestamps: true, collection: 'User' });

UserSchema.set('toObject', { virtuals: true })
UserSchema.set('toJSON', { virtuals: true ,transform: function (doc, ret) {   delete ret._id;delete ret.last_login  }})

UserSchema.pre('save', function (next) {
    const data = this;
    if (data.password)
        data.password = Bcrypt.hashSync(data.password, 10);
    next();
});

UserSchema.pre('findOneAndUpdate', function (next) {
    const data = this._update;
    if (data.password)
        data.password = Bcrypt.hashSync(data.password, 10);
    next();
});

UserSchema.virtual('date')
  .get(function() {
    return moment(this.last_login).format("YYYY-MM-DD HH:mm:ss");
});

// var User = mongoose.model("User", UserSchema);
module.exports = mongoose.model("User", UserSchema);


