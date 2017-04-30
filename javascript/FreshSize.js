/***************
 TITLE: FreshSize.js						
 AUTHOR: Carlos Bustos (CB)
 CREATE DATE: April 25, 2017
 PURPOSE: javascript for FreshSize
 Original Build:
*****************/
$(document).ready(function(){
	
$( "input[type='submit']" ).button();		
$( "input[type='reset']" ).button();

$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});


$( "#controlgroup" ).controlgroup();

$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});

$( "#waist" ).slider({
      
    });
	
$( "#length" ).slider({
      
    });
	
// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
});

/* Validation plugin - Defines form functionality for Size Me Form */
$(document).ready(function(){
	$.validator.setDefaults({
			submitHandler: function() {
				// Scrape Data
				if ($('#radio-1').is(':checked')) { //gender
					var gender = new String($('#radio-1')
					.val());
					}
				if ($('#radio-2').is(':checked')) {
					var gender = new String($('#radio-2')
					.val());
				}
				var strBrandFrom = $('#brandfrom').val(); //brand from
				var strBrandTo = $('#brandto').val();	//brand to
				var strWaist = $('#waist').val(); //waist size
				var strLength = $('#length').val(); //length size
				// Send all data to output area
				$('#sizemebutton').text(new String);//new text
				$('#sizemebutton').append("You are a  " + gender )
								  .append(" <br>Start from Brand: " + strBrandFrom)
								  .append(" <br>End with Brand: " + strBrandTo)
								  .append("<br> New waist size is: " + strWaist)
								  .append("<br> New length size is: " + strLength)				
				alert("Converting your new size.");
			} // end submitHandler
		}); // end validator.setDefaults		   
		$("#sizeme").validate({//valadation and rules for size me
			// Rule to NOT ignore hidden fields
				ignore: [],
			rules: {
				gender: {							//<input name="gender">
					required: true,
				},
				brandfrom: {							//<input name="brandfrom">
					required: true,
				},
				brandto: {					//<input name="brandto"
					required: true,				
				},
				waist: {								//<input name="strWaist">
					required: true,
					digits: true,
				},
				length: {							//<input name="strLength">
					required: true,
					digits: true,
				},
			}, // end rules
			messages: {                             // These messages are displayed when user input doesn't match the rules
				gender: {							//<input name="gender">
					required: "Please enter a gender",
				},
				brandfrom: {							//<input name="brandfrom">
					required: "Please provide a Brand",
				},
				brandto: {								//<input name="brandto">
					required: "Please provide a Brand",
				},
				waist: {							//<input name="waist">
					required: "Please enter a size in waist",
					digits: "Please enter a number",
				},
				length: {							//<input name="length">
					required: "Please enter a size in length",
					digits: "Please enter a number",
				},
			}  // end messages						
			
		});// end sizeme.validate
		/* End Validation plugin */
		
}); // end document.ready

$(document).ready(function(){
	$.validator.setDefaults({
			submitHandler: function() {
				// Scrape Data				
				var fName = $('#fname').val(); //first name
				var lName = $('#lname').val();	//last name 
				var email = $('#email').val(); //email
				var tel = $('#tel').val(); //telephone
				var comments = $('#info').val(); //comments
				// Send all data to output area
				$('#submitbutton').text(new String);//new text
				$('#submitbutton').append("Your first name is:  " + fName )
								  .append(" <br>Your last name is: " + lName)
								  .append(" <br>Your email is: " + email)
								  .append(" <br>Your telephone number is: " + tel)
								  .append(" <br>Your comment is: " + comments)
				alert("Passed validation & submitted.");
			} // end submitHandler
		}); // end validator.setDefaults		   
		$("#contactus").validate({//valadation and rules for contact us
			rules: {
				fname: {							//<input name="fname">
					required: true,
					minlength: 2
				},
				lname: {							//<input name="lname">
					required: true,
					minlength: 2
				},
				email: {							//<input name="email">
					required: true,
					email: true
				},
				phone: {							//<input name="phone">
					required: true,
					digits: true,//only numeric responses
					rangelength : [ 10, 10 ] //completes phone number
				},
				comments: {						//<input name="comments">
					required: true,
					maxlength: 200
					
				}
			}, // end rules
			messages: {                             // These messages are displayed when user input doesn't match the rules
				fname: {							//<input name="fName">
					required: "Please enter your first name",
					minlength: $.validator.format("Must have at least {0} characters")
				},
				lname: {							//<input name="lName">
					required: "Please enter your last name",
					minlength: $.validator.format("Must have at least {0} characters")
				},
				email: {							//<input name="email">
					required: "Please enter an email address",
					email: "Please enter a valid email address"
				},
				phone: {							//<input name="tel">
					required: "Please enter your phone number",
					digits: "Please enter a valid phone number",
					rangelength : "Include all 10 digits"
				},
				comments: {						//<input name="comments">
					required: "A comment under 200 characters is required"
					
				}
			}  // end messages			
			
		});// end contactus.validate
		/* End Validation plugin */

}); // end document.ready