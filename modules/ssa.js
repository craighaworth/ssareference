if (typeof(ssa) === "undefined") {
	ssa = {};
}

// global reference to your app object
var application = null; 

ssa.initCallback = function() {
	application.login("techuser@ssa.co.za","T3chpassword", function(result,error) {
      	if(error) ssa.util.alert("Login Error", error);  
    });
};

// Should be called in the App init lifecycle event
// In Visualizer this should be call in the init event of the startup form
ssa.init = function() {
  	// initialize form controllers
  	new ssa.forms.frmExample();
  	new ssa.forms.frmLogin();
  
  	// initialize application
 	application = new ssa.application(ssa.initCallback);
};

/*
	This is a hack so you can use this framework in
    Visualizer functional previews
*/
function initApp() {
  //ssa.util.alert("INIT");
  ssa.init();
}

//kony.application.setApplicationInitializationEvents({init  : initApp, preappinit: initApp, appservice : initApp });

