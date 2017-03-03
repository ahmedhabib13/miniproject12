let Student = require('../models/Student');

let loginController= {

login:function(req, res){
  Student.findOne({username:req.body.username, password:req.body.password}, function(err, student){

    if (!account){
      res.render('loginController');

    }
    else{
      res.render('registerController');

    }
  }
)
}

}
module.exports = loginController;
