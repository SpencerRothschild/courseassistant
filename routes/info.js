var data1 = require('../teacher.json');

exports.viewInfo = function(req,res){

    var course = req.params.course;

    var i = 0;

    var c, d, com, n, image, description, bio, title;
    
    var teacherLen = data1['teacher'].length;

    var commentlen = data1['teacher'][0]['comments'].length;
    console.log("Comment length " + commentlen);

    while(i < teacherLen){
        var val = data1['teacher'][i]['course'];
        if(val === course){

            n = data1['teacher'][i]['name'];
            d = data1['teacher'][i]['department'];
            com = data1['teacher'][i]['comments'];
            image = data1['teacher'][i]['image'];
            description = data1['teacher'][i]['description'];
            bio = data1['teacher'][i]['bio'];
            title = data1['teacher'][i]['title'];
        }
        i++;
    }
    
    res.render('info', {
        "teacherName": n,
        "teacherCourse" : course,
        "teacherDepartment": d,
        "teacherComments": com,
        "teacherImage": image,
        "description": description,
        "bio": bio,
        "title": title
    });
};

exports.addComment = function(req, res){
    //res.render('add', data1);
    var form_data = req.body;

    console.log(form_data);
    var course = form_data['course'];
    //var name = form_data['name'];
    var description = form_data['description'];
    var teach = form_data['teach'];

    console.log("course = " + course + " teach = " + teach + " Descrip = " + description);


    var teacherLen = data1['teacher'].length;
    console.log("Length of teachers is: " + teacherLen);

    var i = 0;
    var s;
    while(i < teacherLen){
        val = data1['teacher'][i]['course'];
        val2 = data1['teacher'][i]['name'];
        if((val == course) && (teach == val2)){
            comments = data1['teacher'][i]['comments'];
            s = i;
            console.log("s is" + s);
            //console.log("we in here"`);
        }
        i++;
    }

    var comlen = data1['teacher'][s]['comments'].length;
    console.log("lenght of comments is: " + comlen);
    var j = 0;
    var id = 0;
    while(j < comlen){

        id = data1['teacher'][s]['comments'][j]['id'];
        j++;
    }
    console.log("here");
    id++;

    var newComment = {
        "id" : id,
        "content" : description
    };

    data1["teacher"][s]['comments'].push(newComment);


};