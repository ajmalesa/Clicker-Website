$("#upgrade").css("opacity", .5);
$("#autoUpgrade").css("opacity", .5);

var points = 0;
var autoRate = 0;
var upgradeCost = 20;

$("#points").html("points: " + points);

$("#attack1").click(function() {
	points = points + 1;
});
$("#attack2").click(function() {
	points = points + 2;
});		
$("#attack4").click(function() {
	points = points + 4;
});	
$("#attack8").click(function() {
	points = points + 8;
});	
$("#attack16").click(function() {
	points = points + 16;
});
$("#attack32").click(function() {
	points = points + 32;
});
$("#attack64").click(function() {
	points = points + 64;
});
$("#attack128").click(function() {
	points = points + 128;
});
$("#attack256").click(function() {
	points = points + 256;
});
$("#attack512").click(function() {
	points = points + 512;
});

$("#upgrade").click(function() {
	if (points >= upgradeCost && upgradeCost < 10240) {
		if ($("#attack2").prop("hidden") == true) {
			$("#attack2").attr("hidden", false);
		}
		else if ($("#attack4").prop("hidden") == true) {
			$("#attack4").attr("hidden", false);
		}
		else if ($("#attack8").prop("hidden") == true) {
			$("#attack8").attr("hidden", false);
		}
		else if ($("#attack16").prop("hidden") == true) {
			$("#attack16").attr("hidden", false);
		}
		else if ($("#attack32").prop("hidden") == true) {
			$("#attack32").attr("hidden", false);
		}
		else if ($("#attack64").prop("hidden") == true) {
			$("#attack64").attr("hidden", false);
		}
		else if ($("#attack128").prop("hidden") == true) {
			$("#attack128").attr("hidden", false);
		}
		else if ($("#attack256").prop("hidden") == true) {
			$("#attack256").attr("hidden", false);
		}
		else if ($("#attack512").prop("hidden") == true) {
			$("#attack512").attr("hidden", false);
		} 
		points -= upgradeCost;
		upgradeCost *= 2;
	}
});	

$("#autoUpgrade").click(function() {
	if (points>= 10) {
		autoRate += 1;
		points -= 10;
		$("#autoDisplay").html("auto rate: " + autoRate + "/s");
	}
});

setInterval	(function() {
	points = points + (autoRate/16);
	$("#points").html("points: " + Math.round(points));

	if (points >= 10) {
			$("#autoUpgrade").css("opacity", 1)
		} 
	else{
			$("#autoUpgrade").css("opacity", .5)
		}

	if (points >= upgradeCost) {
			$("#upgrade").css("opacity", 1)
		} 
	else{
			$("#upgrade").css("opacity", .5)
	}

	if(upgradeCost >= 10240) {
		$("#upgrade").html("fully upgraded");
		$("#upgrade").css("opacity", .5)
	} else {
		$("#upgrade").html("bigger number costs " + upgradeCost);	
	}
}, 62.5);