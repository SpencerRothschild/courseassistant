var data1 = require('../teacher.json');

exports.viewInfo = function(req,res){

    var course = req.params.course;
    console.log("my name is; " + course);

    var i = 0;

   /*var len = data1.length;
   console.log("the length is; " + len); */
   var c, d, com, n;

while(i < 10){
    //for(var n in data1){
        //console.log("hello");
        /*console.log( data1[n][i]['name']);
        console.log( data1[n][i]['course']);
        console.log( data1[n][i]['department']);
        //console.log( data1[n][i]['comments']); */
        console.log("Comparing: " + data1['teacher'][i]['course'] + " and " + course );
        var val = data1['teacher'][i]['course'];
        if(val === course){
            console.log("finally");

            n = data1['teacher'][i]['name'];
            d = data1['teacher'][i]['department'];
            com = data1['teacher'][i]['comments'];
            //com = data1[n][i]['comments'];
        }
    //}
    console.log("SUPSUP");
    i++;
}

    console.log("name: " + n);
    console.log("desc" + d);
    console.log("com" + com);
    
    res.render('info', {
        "teacherName": n,
        "teacherCourse" : course,
        "teacherDepartment": d,
        //"teacherComments": com
    });
};