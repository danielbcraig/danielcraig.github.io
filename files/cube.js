document.getElementById("submit").addEventListener("click",calculateIt);
document.getElementById("Vol").innerHTML = " ??? ";
document.getElementById("SuAr").innerHTML = " ??? ";


function calculateIt() {

	var value1 = document.getElementById("value1").value;

	var volume = value1 * value1 * value1;
	var surfaceArea = value1 * value1;
	var surfaceArea = surfaceArea * 6;
	
	
	document.getElementById("Vol").innerHTML = volume;
	document.getElementById("SuAr").innerHTML = surfaceArea;
}