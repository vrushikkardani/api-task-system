const mongoose = require("mongoose");
let softDelete = require('mongoosejs-soft-delete');

const Schema = mongoose.Schema;

const TaskSchema = new Schema (
    {
        
        Project:{
            type:String,
            default:"",
        },
        Task :{
            type:String,
            default:"",
            lowercase: true
        },
        Description :{
            type:String,
            default:"",
        },
        Start_Time :{
            type:String,
            default:"",
        },
        End_Time :{
            type:String,
            default:"",
        },
        Allocate_Employe_Email_Id:{
            type:String,
            default:"",
        },
        Status:{
            type:String,
            default:"To Do",
        },
        date:{
            type:String,
            default:"",
        }
        
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

TaskSchema.plugin(softDelete);

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task