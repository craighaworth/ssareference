if (typeof(ssa) === "undefined") {
	ssa = {};
}

if (typeof(ssa.forms) === "undefined") {
	ssa.forms = {};
}

ssa.forms.frmLogin = function() {
	// initialize controller 
    ssa.forms.frmLogin = new ssa.controller(frmLogin); 

    ssa.forms.frmLogin.onPreShow = function(form) {
    var self = this;
	
    self.control("btnLogin").onClick = function(button) {

    	var inputs = { userName : self.control("txtUser").text , password : self.control("txtPass").text };
      
      	// try log user in
        application.service("userService").invokeOperation(
          	"login", {}, inputs,
            function(result) {
 				ssa.util.alert("LOGIN SUCCESS", result.value);
            },
            function(error) {
                // the service returns 403 (Not Authorised) if credentials are wrong
                ssa.util.alert(error);
            }
    	);
    };
  };
};

