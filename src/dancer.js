var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  this.location = [top, left];
  console.log(this.location);
  var styleSettings = {
    top: top,
    left:left
  };
  this.$node.css(styleSettings);
};

