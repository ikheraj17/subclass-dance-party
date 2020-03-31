var MakeSpinnyDancer= function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spinny');
};

MakeSpinnyDancer.prototype = Object.create(MakeDancer.prototype);
MakeSpinnyDancer.prototype.constructor = MakeSpinnyDancer;

MakeSpinnyDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  //this.$node.toggle(); //invoked ''oldstep"
};
