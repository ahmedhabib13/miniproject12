let Student = require('../models/Student');

let registerController = {

    register:function(req, res){
        let student = new Student(req.body);

        student.save(function(err, student){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                res.redirect('/');
            }
        })
    }
}

module.exports = registerController;
