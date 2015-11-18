if (typeof(ssa) === "undefined") {
	ssa = {};
}

if (typeof(ssa.forms) === "undefined") {
	ssa.forms = {};
}

ssa.forms.frmExample = function() {
// initialize controller 
  ssa.forms.frmExample = new ssa.controller(frmExample); 

  // Initialize form events	
  ssa.forms.frmExample.onInit = function(form) {
      
    // NOTE
    /*
    	onInit cannot be used in Android functional preview app as there is no possibility to interact
        with application life cycle events
        
        USE onPreShow instead
    */
      	
      /*
    	this.header("btnMenu").onClick = function(button) {
        ssa.util.alert("My Header Button","Clicked!");
      };*/
  };  
  
  ssa.forms.frmExample.onPreShow = function(form) {
    var self = this;

      this.leftMenu = new ssa.controls.menu(
          this.control("flexMain"), 
          this.control("flexMenu"), 
          ssa.controls.position.LEFT,
          ssa.controls.behavior.MOVE_OVER,
          0.25
      );	
    
      this.rightMenu = new ssa.controls.menu(
          this.control("flexMain"), 
          this.control("flexRightMenu"), 
          ssa.controls.position.RIGHT,
          ssa.controls.behavior.OVERLAY,
          0.25
      );	
    
	  this.topMenu = new ssa.controls.menu(
          this.control("flexMain"), 
          this.control("flexTopMenu"), 
          ssa.controls.position.TOP,
          ssa.controls.behavior.MOVE_OVER,
          0.25
      );    
    
      // example of onClick event on example form for btnOne
      this.control("btnOne").onClick = function(button) {
        self.leftMenu.toggle();
      };
    
      this.control("btnTwo").onClick = function(button) {
        self.rightMenu.toggle();
      };	
     	
      this.control("btn3").onClick = function(button) {
        self.topMenu.toggle();
      };
    
      this.control("btnLogin").onClick = function(button) {
        ssa.forms.frmLogin.show();
      };	
    
    	this.control("btnCreate").onClick = function(button) {
          var user = {
                          "_id" : "somenewid23",
                          "password": "1",
                          "userType": "private",
                          "location": {
                            "lat" : "12315",
                            "long" : "123141"
                          }
                        }; 

                        input = { data : JSON.stringify(user) };

          				ssa.util.alert("input", input);

                        application.service("manageService").invokeOperation(
                          "userAdd", {}, input, function(success) {
                          }, function(error) {
                            ssa.util.alert(error);
                          });
        };
  };
  
  ssa.forms.frmExample.onPostShow = function(form) {
    var self = this;
    this.header("btnMenu").onClick =function(button) {
      	self.topMenu.toggle();
    };
  };
};
