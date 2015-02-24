/*
	Created by Christopher Gonzalez D.K.A. "gchriswill"
	
*/

const myGlobal = safari.extension.globalPage.contentWindow;

function iPhone_Window(eventData) {
	var userURL = document.getElementById("URLfield");
	var eData = eventData;
	eData["URLString"] = userURL.value;
	
	myGlobal.testingFunc(eData);
	
 }

