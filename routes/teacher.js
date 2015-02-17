var data = require('../teacher.json');

exports.view = function(req,res){
    res.render('teacher', data);
};