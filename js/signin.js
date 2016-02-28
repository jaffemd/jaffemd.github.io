

$( document ).ready(function() {
	document.getElementById("errorAlert").hidden = true;
});


$('#submit').click(function() {
	document.getElementById("errorAlert").hidden = true;

	var urlLink;
	
	var fname = document.getElementById("inputFName").value;
	var lname = document.getElementById("inputLName").value;
	var address = document.getElementById("inputAddress").value;
	var city = document.getElementById("inputCity").value;
	var zip = document.getElementById("inputZip").value;

	if (fname != "" && lname != "" && address != "" && city != "" && zip != ""){
		urlLink = "results.html" + "?address=" + address + "&city=" + city + "&zip=" + zip;
		urlLink = urlLink.split(' ').join('+');
		console.log(urlLink);
		window.location.href = urlLink;
		// document.getElementById("voterForm").href = urlLink;
	}
	else{document.getElementById("errorAlert").hidden = false;}
});