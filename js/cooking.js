
var newBtn = document.getElementById("submit-btn");

var dishImage;
var dishName;
var dishDescript;

var makeNewPost = function () { 
	dishImage = $('dishImg').val();
	dishName = $('#dishName').val();
	dishDescript = $('#dishDescription').val();
	$('#main').append("<h3>" + dishName + "</h3>");
	$('#main').append("<p>" + dishDescript + "</p>");
}

newBtn.addEventListener("click",makeNewPost)


$('img').hover(
	function() {
		$(this).fadeTo(400,0);
	},
	function() {
		$(this).fadeTo(400, 1);
	}
);

