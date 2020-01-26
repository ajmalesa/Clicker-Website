$("#upgrade").css("opacity", .5);

var points = 0;

$("#points").html("points: " + points);

$("#attack1").click(function() {
	points = points + 1;
	$("#points").html("points: " + points);
});
$("#attack2").click(function() {
	points = points + 2;
	$("#points").html("points: " + points);
});		
$("#attack4").click(function() {
	points = points + 4;
	$("#points").html("points: " + points);
});	
$("#attack8").click(function() {
	points = points + 8;
	$("#points").html("points: " + points);
});	
$("#attack16").click(function() {
	points = points + 16;
	$("#points").html("points: " + points);
});
$("#attack32").click(function() {
	points = points + 32;
	$("#points").html("points: " + points);
});

$(window).on( "click", function() {

		if (points >= 100) {
			$("#upgrade").css("opacity", 1)
		} else
		{
			$("#upgrade").css("opacity", .5)
		}

});

$("#upgrade").click(function() {
	if (points >= 100) {
		if ($("#attack2").prop("hidden") == true) {
			$("#attack2").attr("hidden", false);
			points -= 100;
			$("#points").html("points: " + points);
		}
		else if ($("#attack4").prop("hidden") == true) {
			$("#attack4").attr("hidden", false);
			points -= 100;
			$("#points").html("points: " + points);
		}
		else if ($("#attack8").prop("hidden") == true) {
			$("#attack8").attr("hidden", false);
			points -= 100;
			$("#points").html("points: " + points);
		}
		else if ($("#attack16").prop("hidden") == true) {
			$("#attack16").attr("hidden", false);
			points -= 100;
			$("#points").html("points: " + points);
		}
		else if ($("#attack32").prop("hidden") == true) {
			$("#attack32").attr("hidden", false);
			points -= 100;
			$("#points").html("points: " + points);
		}
	}
});	