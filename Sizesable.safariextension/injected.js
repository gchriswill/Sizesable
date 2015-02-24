/*
	Created by Christopher Gonzalez D.K.A. "gchriswill"
	
*/

var myWindows = [];
function resizeWindow(eventMessage) {
	
	var eName = eventMessage.name;
	var eMessage = eventMessage.message;
	
	if (eName == 'iphoneWindow' ){
		
		myWindows[eMessage.index] = window.open("http://"+eMessage.URLString, eName + eMessage.index, "width="+eMessage.width+",height="+eMessage.height+",toolbar=no,scrollbars=no");
		myWindows[eMessage.index].focus();
		
	}
	
}

safari.self.addEventListener("message", resizeWindow, false);
