var MakeSizingDancer= function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

MakeSizingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSizingDancer.prototype.constructor = MakeSizingDancer;

MakeSizingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this); //invoked ''oldstep"
};

MakeSizingDancer.prototype.addAnimation = function() {
  var styleSettings = {
    top: top,
    left:left
  };
  this.$node.css(styleSettings);
};