$("#upgrade").css("opacity", .5);
$("#autoUpgrade").css("opacity", .5);

var points = 0;
var autoRate = 0;
var upgradeCost = 20;
var autoUpgradeCost = 10;

if(localStorage.getItem('pointsSaved')) {
	points = parseInt(localStorage.getItem('pointsSaved'), 10);
}
if(localStorage.getItem('rateSaved')) {
	autoRate = parseInt(localStorage.getItem('rateSaved'), 10);	
} 
if(localStorage.getItem('upgradeCostSaved')) {
	upgradeCost = parseInt(localStorage.getItem('upgradeCostSaved'), 10);	
} 

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
		
		points -= upgradeCost;
		upgradeCost *= 2;
	}
});	

$("#autoUpgrade").click(function() {
	if (points>= autoUpgradeCost) {
		autoRate += 1;
		points -= autoUpgradeCost;
		autoUpgradeCost = Math.round(autoUpgradeCost + (autoUpgradeCost * .5));
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

	$("#autoUpgrade").html("auto +1 costs " + autoUpgradeCost);

	if(autoRate >= 1) {
		$("#autoDisplay").html("auto rate: " + autoRate + "/s");
	}

	if (upgradeCost >= 40) {
		$("#attack2").attr("hidden", false);
		}
	if (upgradeCost >= 80) {
		$("#attack4").attr("hidden", false);
		}
	if (upgradeCost >= 160) {
		$("#attack8").attr("hidden", false);
		}
	if (upgradeCost >= 320) {
		$("#attack16").attr("hidden", false);
		}
	if (upgradeCost >= 640) {
		$("#attack32").attr("hidden", false);
		}
	if (upgradeCost >= 1280) {
		$("#attack64").attr("hidden", false);
		}
	if (upgradeCost >= 2560) {
		$("#attack128").attr("hidden", false);
		}
	if (upgradeCost >= 5120) {
		$("#attack256").attr("hidden", false);
		}
	if (upgradeCost >= 10240) {
		$("#attack512").attr("hidden", false);
		} 
}, 62.5);

setInterval (function() {

	localStorage.setItem('pointsSaved', Math.round(points));
	localStorage.setItem('rateSaved', Math.round(autoRate));
	localStorage.setItem('upgradeCostSaved', Math.round(upgradeCost));


}, 5000)