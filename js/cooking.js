$(document).ready(function(){
	

	var dishImage;
	var dishName;
	var dishDescript;
	var rowId = 1;
	counter = 0;

	var makeNewPost = function () { 
		dishImage = $('#dishImg').val();
		dishName = $('#dishName').val();
		dishDescript = $('#dishDescription').val();
		
		if (counter == 0) {
			var entry = " \
			<div class='row' id='dish" + rowId + "'>  \
				<div class='col-md-6'> \
					<img src='" + dishImage + "' alt='Dish Image'> \
					<h3>" + dishName + "</h3> \
					<p>" + dishDescript + "</p> \
				</div> \
			</div> \
			" 
			$('#main').append(entry);
			counter += 1;
		} else {
			var entry = " \
			<div class='col-md-6'> \
					<img src='" + dishImage + "' alt='Dish Image'> \
					<h3>" + dishName + "</h3> \
					<p>" + dishDescript + "</p> \
				</div> \
			</div> \
			"

			$('#dish' + rowId).append(entry);
			
			
			rowId += 1;
			counter -= 1;
		}
	}

	$('#submit-btn').click(makeNewPost);
	
	/*
	$('img').hover(
		function() {
			$(this).fadeTo(400,0);
		},
		function() {
			$(this).fadeTo(400, 1);
		}
	);
	*/

	$(document).on("mouseenter", "img", function(){
		$(this).fadeTo(500,0.25);
	});

	$(document).on("mouseleave", "img", function(){
		$(this).fadeTo(500,1);
	});
		
	
});

