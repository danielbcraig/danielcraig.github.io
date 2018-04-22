document.getElementById("submit").addEventListener("click",calculateIt);
document.getElementById("Vol").innerHTML = " ??? ";
document.getElementById("SuAr").innerHTML = " ??? ";


function calculateIt() {

	var value1 = document.getElementById("value1").value;
	var value1ish = document.getElementById("value1.5").value;
	var value2 = document.getElementById("value2").value;
	var value3 = document.getElementById("value3").value;
	
	
	if ( value1 ) {
		var radius = value1;
	}
	else {
		var radius = value1ish / 2;
	}
	
	
	if ( value3 ) {
		
		cDeg = value3 / 360;
		var volume = Math.PI * radius * radius * value2 * cDeg;
		var baseArea = 2 * Math.PI * radius * radius * cDeg;
		var otherArea = 2  * radius * Math.PI * value2 * cDeg;
		var cutOut = radius * value2 * 2;
		var surfaceArea = baseArea + otherArea + cutOut;
		
	}
	
	else {
		var volume = Math.PI * radius * radius * value2;
		var baseArea = 2 * Math.PI * radius * radius;
		var otherArea = 2  * radius * Math.PI * value2;
		var surfaceArea = baseArea + otherArea;
	
	}
	
	
	document.getElementById("Vol").innerHTML = volume;
	document.getElementById("SuAr").innerHTML = surfaceArea;
}