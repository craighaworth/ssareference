if (typeof(ssa) === "undefined") {
	ssa = {};
}

if (typeof(ssa.controls) === "undefined") {
	ssa.controls = {};
}

ssa.controls.position = {
  LEFT : 0,
  RIGHT : 1,
  TOP : 2,
  BOTTOM : 3
};

ssa.controls.behavior = {
  MOVE_OVER : 1,
  OVERLAY : 2,
};
