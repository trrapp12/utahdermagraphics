// step 1: create a function [x]
 //      step 2: make sure it is connected [x]
 //      step 3: make sure the function is called on the click of three separate accordions [x]
 //      step 4: make if statement that checks the state of the accordion as opened or closed [x]
 //      step 5: make any statement that be console logged if above is true [x]
 //      step 6: once working, change statement to affect the css as you undesirable [ ]
 //      step 7: rinse, wash, repeat [ ]
 //
 //      Notes: div.card.card-body is the container that has the text
 //    div#square.square is the container that holds it that will need to expand

 window.onload = function {
   document.getElementById('square').style.transition = "height 2s ease 50ms"
 }

function accordion() {

      var basic = document.getElementById('basic').getAttribute('aria-expanded');
      var intermediate = document.getElementById('intermediate').getAttribute('aria-expanded');
      var advanced = document.getElementById('advanced').getAttribute('aria-expanded');
  // console.log("the accordion is connected")
      console.log(document.getElementById('cardbody1').style.transitionDelay);
      console.log(basic + ", " + intermediate + ", " + advanced)

      if (basic == 'false' && intermediate == 'false' && advanced == 'false') {
        console.log('all are closed')

        // document.getElementById('cardbody1').style.transition = 'all 10s';
        // document.getElementById('cardbody1').style.transitionDelay = "5s"
        document.getElementById('square').style.height = '834px';
        document.getElementById('card-border').classList.remove('card-border');
        document.getElementById('multiCollapseExample1').style.transitionDelay = "10s";


        console.log(document.getElementById('multiCollapseExample1').style.transitionDelay);

      }
      else if (basic == 'true' && intermediate == 'true' && advanced == 'true') {
    // no action needs to be preformed here, simply needs to do nothing on these conditions
      }
      else if (basic == 'true' && intermediate == 'true' && advanced == 'false') {
   // no action needs to be preformed here, simply needs to do nothing on these conditions
      }
      else if (basic == 'true' && intermediate == 'false' && advanced == 'true') {
    // no action needs to be preformed here, simply needs to do nothing on these conditions
      }
      else if (basic == 'true' && intermediate == 'false' && advanced == 'false') {
    // check to see if the aria area is expanding or not
      console.log('aria-expanded was true, area is now closed');

      // document.getElementById('cardbody1').style.webkitTransition = '1s'
      document.getElementById('square').style.height = '700px';
      document.getElementById('square').style.transition = "height 2s ease 50ms"
      document.getElementById('card-border').classList.remove('card-border');
      console.log(document.getElementById('basic').style.transition);
    }

  };

  function accordion1() {

        var basic = document.getElementById('basic').getAttribute('aria-expanded');
        var intermediate = document.getElementById('intermediate').getAttribute('aria-expanded');
        var advanced = document.getElementById('advanced').getAttribute('aria-expanded');
    // console.log("the accordion is connected")
        console.log(basic + ", " + intermediate + ", " + advanced)

        if (basic == 'false' && intermediate == 'false' && advanced == 'false') {
          console.log('all are closed')
          // document.getElementById('cardbody1').style.webkitTransition = '5s';
          document.getElementById('square').style.height = '834px';
          document.getElementById('card-border').classList.remove('card-border');
          console.log(document.getElementById('cardbody1').style.transition);

        }
        else if (basic == 'true' && intermediate == 'true' && advanced == 'true') {
          // no action needs to be preformed here, simply needs to do nothing on these conditions
        }
        else if (basic == 'false' && intermediate == 'true' && advanced == 'true') {
         // no action needs to be preformed here, simply needs to do nothing on these conditions
        }
        else if (basic == 'true' && intermediate == 'true' && advanced == 'false') {
          // no action needs to be preformed here, simply needs to do nothing on these conditions
        }

        else if (basic == 'false' && intermediate == 'true' && advanced == 'false') {
      // check to see if the aria area is expanding or not
        console.log('aria-expanded was true, area is now closed');

        // document.getElementById('cardbody1').style.webkitTransition = '1s'
        document.getElementById('square').style.height = '700px';
        document.getElementById('square').style.transition = "height 2s ease 50ms"
        document.getElementById('card-border').classList.remove('card-border');
        console.log(document.getElementById('cardbody1').style.transition);
      }

    };

    function accordion2() {

          var basic = document.getElementById('basic').getAttribute('aria-expanded');
          var intermediate = document.getElementById('intermediate').getAttribute('aria-expanded');
          var advanced = document.getElementById('advanced').getAttribute('aria-expanded');
      // console.log("the accordion is connected")
          console.log(basic + ", " + intermediate + ", " + advanced)

          if (basic == 'false' && intermediate == 'false' && advanced == 'false') {
            console.log('all are closed')
            // document.getElementById('cardbody1').style.webkitTransition = '5s';
            document.getElementById('square').style.height = '834px';
            document.getElementById('card-border').classList.remove('card-border');
            console.log(document.getElementById('cardbody1').style.transition);

          }
          else if (basic == 'true' && intermediate == 'true' && advanced == 'true') {
            // no action needs to be preformed here, simply needs to do nothing on these conditions
          }
          else if (basic == 'false' && intermediate == 'true' && advanced == 'true') {
           // no action needs to be preformed here, simply needs to do nothing on these conditions
          }
          else if (basic == 'true' && intermediate == 'false' && advanced == 'true') {
            // no action needs to be preformed here, simply needs to do nothing on these conditions
          }

          else if (basic == 'false' && intermediate == 'false' && advanced == 'true') {
        // check to see if the aria area is expanding or not
          console.log('aria-expanded was true, area is now closed');

          // document.getElementById('cardbody1').style.webkitTransition = '1s'
          document.getElementById('square').style.height = '700px';
          document.getElementById('square').style.transition = "height 2s ease 50ms"
          document.getElementById('card-border').classList.remove('card-border');
          console.log(document.getElementById('cardbody1').style.transition);
        }

      };
