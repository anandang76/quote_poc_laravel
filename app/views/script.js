$(document).ready(function(){ 
$('#beneficiary').customSelect();


$('#beneficiary').change(function(){
	if($(this).val != ''){
		$('#row2').show("slow");
		$('#kid_amount').customSelect();
	}
	else{
		$('#row2').hide();
	}
});

$('#kid_amount').change(function(){ 
	if($(this).val != ''){
		$('#row3').show("slow");
	}
	else{
		$('#row3').hide();
	}
});

$("#zip_code").keyup(function (e) {
	var numeric = $(this).val();
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) || numeric == '') {
        
        $("#errmsg").html("Digits Only").show().fadeOut("slow");
        			$('#row4').hide();
        				$('#submit_button').hide();
               return false;
    }
	else{
		
		$('#row4').show("slow");
	}
});


$("#proposal").keyup(function (e) {
	var proposal = $(this).val();
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57) || proposal == '') {
        
        $("#err").html("Digits Only").show().fadeOut("slow");
        			$('#submit_button').hide();
               return false;
    }
	else{
		
		$('#submit_button').show("slow");
	}
});

$("#row_report").click(function(event){ 
    
    event.preventDefault();
    var email = $('#email').val();
		var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
       $('#email_row').hide();
	$('#row_report').hide();
	
	$('#greeting1').text("Thanks - your report will be on the way shortly");
    }
    	else{
    		$("#err_report").html("Enter valid email").show().fadeOut("slow");
               return false;
    	}
    
	

});
$('#submit_button').click(function(e){ 
	e.preventDefault();
	$('#row1').hide();
	$('#row2').hide();
	$('#row3').hide();
	$('#row4').hide();
	$('#submit_button').hide();
	$('#email_row').show("slow");
	$('#row_report').show("slow");
});

});
