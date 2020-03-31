var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function () {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left:left
  };
  this.$node.css(styleSettings);
};

//MakeDancer.prototype.lineUp = function (top, left) {
  //this.setPosition(top, left);
  // var styleSettings = {
  //   left: left;
  // }
  // this.$node.css(styleSettings);
//}