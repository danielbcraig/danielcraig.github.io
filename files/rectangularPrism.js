document.getElementById("submit").addEventListener("click",calculateIt);
document.getElementById("Vol").innerHTML = " ??? ";
document.getElementById("SuAr").innerHTML = " ??? ";


function calculateIt() {

	var value1 = document.getElementById("value1").value;
	var value2 = document.getElementById("value2").value;
	var value3 = document.getElementById("value3").value;
	
	

	var volume = value1 * value2 * value3;
	var netLength = value1 * 2 + value2 * 2;
	var almostSurfaceArea = netLength * value3;
	var surfaceArea = almostSurfaceArea + value1 * value2 * 2;

	
	document.getElementById("Vol").innerHTML = volume;
	document.getElementById("SuAr").innerHTML = surfaceArea;
}