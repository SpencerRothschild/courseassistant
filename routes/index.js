
//var models = require('../models');

/*
 * GET home page.
 */

/*exports.view = function(req, res){

	models.Project
		.find()
		.sort('date')
		.exec(renderProjects);

	function renderProjects(err, projects) {
		res.render('index', { 'projects': projects });
	}

}; */

exports.view = function(req,res){

    res.render('index');
};