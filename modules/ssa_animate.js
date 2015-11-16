/**
 * SSA Mobile namespace
 * @namespace ssa.mobile
 */
if (typeof(ssa) === "undefined") {
	ssa = {};
}

ssa.animate = {};

// MOVE
ssa.animate.move = function(object, time, top, left, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"top":top, "left": left, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

ssa.animate.moveTopRight = function(object, time, top, right, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"top":top, "right": right, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

ssa.animate.moveBottomLeft = function(object, time, bottom, left, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"bottom":bottom, "left": left, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

ssa.animate.moveBottomRight = function(object, time, bottom, right, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"bottom":bottom, "right": right, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":0,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

// MOVE DELAYED
ssa.animate.moveDelayed = function(object, time, delay, top, left, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"top":top, "left": left, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":delay,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

ssa.animate.moveDelayedTopRight = function(object, time, delay, top, right, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"top":top, "right": right, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":delay,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

ssa.animate.moveDelayedBottomLeft = function(object, time, delay, bottom, left, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"bottom":bottom, "left": left, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":delay,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};

ssa.animate.moveDelayedBottomRight = function(object, time, delay, bottom, right, finish) {
  object.animate(
	kony.ui.createAnimation({"100":{"bottom":bottom, "right": right, stepConfig:{"timingFunction":kony.anim.EASE}}}),
{"delay":delay,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":time},
 {"animationEnd" : function(){ if(finish) { finish(); }}});
};


