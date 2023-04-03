const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
let softDelete = require('mongoosejs-soft-delete');
const validator = require('mongoose-validator');

const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        email:{
            type:String,
            default: "",
            lowercase: true,
        },
        password: {
            type: String,
            default: "",
            required: false
        },
        role: {
            type: String,
            default:"",
            required:false,
        },
        name: {
            type: String,
            default:"",
            required:false,
        },
        role: {
            type: String,
            default:"",
            required:false,
        },
        
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

usersSchema.plugin(softDelete);
 

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

