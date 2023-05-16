const mongoose = require ('mongoose');
const Schema = mongoose.Schema;
const validator = require("validator")
const {isMobilePhone} = validator;

const registerSchema = new  Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    mnumber:{
        type:Number,
        
        // min:9,
        // max:10,
        ///
        // required:[true,'Phone number is required'],
        // validate:[isMobilePhone,'Please enter valid phone number']
     
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

registerSchema.statics.login = async function (email, password){
    const user = await this.findOne({email});
    if (!user) throw Error("User not found");
    if (user.password != password) throw Error("Password dismatch");
    return user;
};

module.exports = mongoose.model('Register', registerSchema)