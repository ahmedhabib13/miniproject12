let Project = require('../models/Project');

let projectController = {

    getAllProjects:function(req, res){
        res.render('register');
    },


    createProject:function(req, res){
        let project = new Project(req.body);

        project.save(function(err, project){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{

                console.log(project);
                res.redirect('/');
            }
        })
    }
}

module.exports = projectController;
