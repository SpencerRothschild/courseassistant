'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// get the DIV to add content to

	$('#addFriendForm #submitBtn').click(function(e) {
		//console.log('clicked');
		console.log("DID WE WINDSADADADADSA?");
		var teach = $('#teacherName').text();
		var course = $('#teacherCourse').text();
		var courseName = $('#courseName').text();

		//alert("the prof is " + course);
		//var name = $('#addFriendForm #name').val();
		var description = $('#addFriendForm #description').val();
		var evsa = $('#addFriendForm #evsa').val();
		var style = $('#addFriendForm #style').val();
		var positives = $('#addFriendForm #positives').val();	
		var negatives = $('#addFriendForm #negatives').val();
		var ad = $('#addFriendForm #ad').val();

		var json = {
			'course': course,
			'description' : description,
			'teach': teach,
			'courseName': courseName,
			'evsa': evsa,
			'style': style,
			'positives': positives,
			'negatives': negatives,
			'ad': ad
		}; 

		$.post('/info/new', json, function() {
	    	window.location.href = '/info/course'; // load the page
		}); 
	});

}

