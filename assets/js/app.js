
$(document).ready(function() {

	$('#ajax-contact').on('submit', function(e) {
		e.preventDefault();
		
		//get the name field value
		var name = $('#name').val();
		//get the name field value
		var email = $('#email').val();
		//get the subject
		var subject = $('#subject').val();
		//get the subject
		var message = $('#message').val();
		
		//pretend we don't need validation
		
		//send to formspree
		$.ajax({
			url:'https://formspree.io/xgenvkrp',
			method:'POST',
			data:{
				Name:name,
				Email:email,
				Subject:subject,
				Message:message,
			},
			dataType:"json",
			success:function() {
				console.log('success');	
				$('#ajax-contact').hide();
				$('#thankyou-block').show();
			}	

		});		
		
	});

});	