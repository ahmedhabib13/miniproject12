var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },

    password:{
      type:String,
      required:true
        },

        fname:{
          type:String,
          required:true
        },

        lname:{
          type:String,
          required:true
        }
      })



var Student = mongoose.model("student", studentSchema);

module.exports = Student;
