// require dependincies
var express = require('express');
var router = express.Router();
// var multer = require('multer');
var projectController = require('./controllers/projectController');
var registerController = require('./controllers/registerController');
var loginController = require('./controllers/loginController');
// var upload = multer({dest: 'controllers/uploads/'});

// add routes
router.get('/', projectController.getAllProjects);

router.get('/login', loginController.login);

router.post('/register', registerController.register);

router.post('/project', projectController.createProject);

// router.post('/register', upload.any(), function(req,res,next)) {

//   res.send('req.files');



// export router

module.exports = router;
