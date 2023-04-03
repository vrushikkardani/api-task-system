const mongoose = require("mongoose");
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;

const ProjectSchema = new Schema (
    {
        
        Project_Name:{
            type:String,
            default:"",
        },
        Client:{
            type:String,
            default:"",
            
        },
        Start_Date:{
            type:String,
            default:"",
        },
        End_Date:{
            type:String,
            default:"",
        },
        Budget:{
            type:String,
            default:"",
        },
        Project_Type:{
            type:String,
            default:"",
        },
        Description:{
            type:String,
            default:"",
        },
        Documents:{
            type:String,
            default:"",
        }
        
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

ProjectSchema.plugin(softDelete);

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project