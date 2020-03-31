var MakeSizingDancer= function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('sizing');
};

MakeSizingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSizingDancer.prototype.constructor = MakeSizingDancer;

MakeSizingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.toggle(); //invoked ''oldstep"
};
