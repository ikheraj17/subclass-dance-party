var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
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

MakeDancer.prototype.colorize = function () {

  this.$node.css("border", "10px solid green");
}

