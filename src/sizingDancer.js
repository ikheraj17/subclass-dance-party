var MakeSizingDancer= function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer" id="sizing"></span>');
};

MakeSizingDancer.prototype = Object.create(MakeDancer.prototype);
MakeSizingDancer.prototype.constructor = MakeSizingDancer;

MakeSizingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.toggle(); //invoked ''oldstep"
};

MakeSizingDancer.prototype.addAnimation = function() {
  var styleSettings = {
    top: top,
    left:left
  };
  this.$node.css(styleSettings);
};