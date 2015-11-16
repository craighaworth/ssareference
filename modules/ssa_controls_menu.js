if (typeof(ssa) === "undefined") {
	ssa = {};
}

if (typeof(ssa.controls) === "undefined") {
	ssa.controls = {};
}

ssa.controls.menu = function(flexContent, flexMenu, position, behavior, timeTaken) {

  	this._main = flexContent;
  	this._menu = flexMenu;
  	this._position = position;
  	this._behavior = behavior;
  	this._time = timeTaken;
  	this._open = false;
};

ssa.controls.menu.prototype.toggle = function(callback) {
    if(this._menu !== undefined) {
      if(this._open) {
        switch(this._position) {
        	case ssa.controls.position.LEFT : { 
              ssa.animate.move(this._menu,this._time, this._menu.top, "-" + this._menu.width, callback); 
              if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, this._main.top, "0px", null);
              break;
        	}
            case ssa.controls.position.RIGHT : { 
              ssa.animate.move(this._menu,this._time,this._menu.top, "100%", callback); 
              if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, this._main.top, "0px", null);
              break;
        	}
            case ssa.controls.position.TOP : { 
              ssa.animate.move(this._menu,this._time, "-" + this._menu.height, this._menu.left, callback); 
              if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, "0%", this._main.left, null);
              break;
        	}
            case ssa.controls.position.BOTTOM : { 
              ssa.animate.move(this._menu,this._time, "100%", this._menu.left, callback); 
              if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, "0%", this._main.left, null);
              break;
        	}
      	}
        this._open = false;
        
      } else {
        	switch(this._position) {
        		case ssa.controls.position.LEFT : { 
                  	ssa.animate.move(this._menu,this._time, this._menu.top, "0%", callback); 
                  	if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, this._main.top, this._menu.width, null);
				  	break;	                
                }
                case ssa.controls.position.RIGHT : { 
              		ssa.animate.move(this._menu,this._time, this._menu.top, this.calcOffset(this._menu), callback); 
              		if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, this._main.top, "-" + this._menu.width, null);
              		break;
        		}
                case ssa.controls.position.TOP : { 
                  ssa.animate.move(this._menu,this._time,"0%", this._menu.left, callback); 
                  if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, this._menu.height, this._main.left, null);
                  break;
                }
				case ssa.controls.position.BOTTOM : { 
                  ssa.animate.move(this._menu,this._time,this.calcHOffset(this._menu), this._menu.left, callback); 
                  if(this._behavior == ssa.controls.behavior.MOVE_OVER ) ssa.animate.move(this._main,this._time, "-" + this._menu.height, this._main.left, null);
                  break;
                }                
            }
        	this._open = true;
      }
    }
};

ssa.controls.menu.prototype.calcOffset = function(menu) {
	if(menu.width.indexOf("%") > 0) {
      var newPos = 100 - parseInt(menu.width);
      return newPos + "%";
    }  
};

ssa.controls.menu.prototype.calcHOffset = function(menu) {
	if(menu.width.indexOf("%") > 0) {
      var newPos = 100 - parseInt(menu.height);
      return newPos + "%";
    }  
};