var data1 = require('../teacher.json');

exports.viewInfo = function(req,res){

    var name = req.params.name;
    console.log("my name is; " + name);
    var course;

    var i = 1;

   /*var len = data1.length;
   console.log("the length is; " + len); */
   var c, d, com;

while(i < 10){
    //for(var n in data1){
        //console.log("hello");
        /*console.log( data1[n][i]['name']);
        console.log( data1[n][i]['course']);
        console.log( data1[n][i]['department']);
        //console.log( data1[n][i]['comments']); */
        //console.log("Comparing: " + data1['teacher'][i]['name'] + " and " + name );
        var val = data1['teacher'][i]['name'];
        if(val === name){
            console.log("finally");

            c = data1['teacher'][i]['course'];
            d = data1['teacher'][i]['department'];
            com = data1['teacher'][i]['comments'];
            //com = data1[n][i]['comments'];
        }
    //}
    console.log("SUPSUP");
    i++;
}

    console.log("course: " + c);
    console.log("desc" + d);
    console.log("com" + com);
    
    res.render('info', {
        "teacherName": name,
        "teacherCourse" : c,
        "teacherDepartment": d,
        //"teacherComments": com
    });
};