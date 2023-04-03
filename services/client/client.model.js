const mongoose = require("mongoose");
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;

const ClientSchema = new Schema (
    {
        
        Client_Name:{
            type:String,
            default:"",
        },
        Email_Id:{
            type:String,
            default:"",
            lowercase: true
        },
        Contact_Number:{
            type:String,
            default:"",
        },
        Address:{
            type:String,
            default:"",
        },
        City:{
            type:String,
            default:"",
        }
        
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

ClientSchema.plugin(softDelete);

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client