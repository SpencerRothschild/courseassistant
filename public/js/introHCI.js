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

		//alert("the prof is " + teach);
		//var name = $('#addFriendForm #name').val();
		var description = $('#addFriendForm #description').val();
		var json = {
			'course': course,
			'description' : description,
			'teach': teach
		}; 

		$.post('/info/new', json, function() {
	    	window.location.href = '/info/course'; // load the page
		}); 
	});

}

