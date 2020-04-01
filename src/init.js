$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.        //add new?
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
   //add dancers to storage
    //console.log(window.dancers);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event){
    var left = 50;
    for (var i=0; i < window.dancers.length; i++) {
      var top = 50 + 50 * i;
      left += 5;
      window.dancers[i].lineUp(top, left);
      console.log('locations', window.dancers[i].location)
    }
  });

  $('.interact').on('click', function(event){
    console.log('WOOT!');
    dancerArr = window.dancers.slice(0);

    for (var i = 0; i < dancerArr.length; i++) {
      for (var j = 1; j < dancerArr.length; j++) {
        let topDif = Math.abs(dancerArr[i].location[0] - dancerArr[j].location[0]);
        let leftDif = Math.abs(dancerArr[i].location[1] - dancerArr[j].location[1]);

        if (topDif <= 55 && leftDif <= 55 && i!==j) {
          const newTop =  Math.random() * 600;
          const newLeft = Math.random() * 600;
          dancerArr[i].setPosition(newTop, newLeft);
          dancerArr[j].setPosition((newTop - 5), (newLeft + 5));
          dancerArr[i].colorize();
          dancerArr[j].colorize();
          //dancerArr.splice(i, 1);
          //dancerArr.splice(j, 1);
          // newTop -= 25;
          // newLeft -= 25;

        }

      }

    }
    //on click
    //check location
      //check location for nearest other 'dancer'
    //change color to same color
      //change location to cneter of dance floor to 'pair off'
  });
});

