console.log("Ready...")

//Prevent page from refreshing when user submits their ships
$(document).ready(function() {
  init();
});

function init() {
  $('#enter').on('click', function(eventReport) {
      eventReport.preventDefault();
  });
}
// Declare the ship variables for the Player
var $patrolBoat = $('#enter[name="patrol"]'),
    $destroyer = $('#enter[name="destroy"]'),
    $submarine = $('#enter[name="sub"]');

// Declare the ship variables for the Player's input values
var $patrolBoatValue = $('#enter[name="patrol"]').value,
    $destroyerValue = $('#enter[name="destroy"]').value,
    $submarineValue = $('#enter[name="sub"]').value;

// Declare variables for each of the Player's board locations
var
$a1 = $('.spot a1'),
$a2 = $('.spot a2'),
$a3 = $('.spot a3'),
$a4 = $('.spot a4'),
$a5 = $('.spot a5'),
$b1 = $('.spot b1'),
$b2 = $('.spot b2'),
$b3 = $('.spot b3'),
$b4 = $('.spot b4'),
$b5 = $('.spot b5'),
$c1 = $('.spot c1'),
$c2 = $('.spot c2'),
$c3 = $('.spot c3'),
$c4 = $('.spot c4'),
$c5 = $('.spot c5'),
$d1 = $('.spot d1'),
$d2 = $('.spot d2'),
$d3 = $('.spot d3'),
$d4 = $('.spot d4'),
$d5 = $('.spot d5'),
$e1 = $('.spot a1'),
$e2 = $('.spot a2'),
$e3 = $('.spot a3'),
$e4 = $('.spot a4'),
$e5 = $('.spot a5');

// Create an eventListener that will add the players ships
// to the board when each ENTER button has been clicked.
// Make sure that no location can be chosen twice.
// Allow each ENTER button to submit only once for each game.

//PatrolBoat function
$patrolBoat.on('click', function (e) {
    if ($patrolBoatValue = 'a1', 'a2') {
      $a1.css({'background-color': 'green'}).attr('#pSpot1');
      $a2.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a1', 'b1') {
      $a1.css({'background-color': 'green'}).attr('#pSpot1');
      $b2.css({'background-color': 'green'}).attr('#pSpot2');
    }else if($patrolBoatValue = 'a2', 'a3') {
      $a2.css({'background-color': 'green'}).attr('#pSpot1');
      $a3.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a2', 'b2') {
      $a2.css({'background-color': 'green'}).attr('#pSpot1');
      $b2.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a3', 'a4') {
      $a3.css({'background-color': 'green'}).attr('#pSpot1');
      $a4.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a3', 'b3') {
      $a3.css({'background-color': 'green'}).attr('#pSpot1');
      $b3.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a4', 'a5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a4', 'b4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'a5', 'b5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b1', 'b2') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b1', 'c1') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b2', 'b3') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b2', 'c2') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b3', 'b4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b3', 'c3') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b4', 'b5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b4', 'c4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'b5', 'c5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c1', 'c2') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c1', 'd1') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c2', 'c3') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c2', 'd2') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c3', 'c4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c3', 'd3') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c4', 'c5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c4', 'd4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'c5', 'd5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd1', 'd2') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd1', 'e1') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd2', 'd3') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd2', 'e2') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd3', 'd4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd3', 'e3') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd4', 'd5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd4', 'e4') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }else if ($patrolBoatValue = 'd5', 'e5') {
      $a4.css({'background-color': 'green'}).attr('#pSpot1');
      $b5.css({'background-color': 'green'}).attr('#pSpot2');
    }
  });

//Destroyer function
$destroyer.on('click', function (e) {
    if ($destroyerValue === $patrolBoatValue) {
        alert('You cannot put two ships in the same place! Please change your Destroyer location!');
    }else if ($destroyerValue = 'a1', 'a2') {
        $a1.css({'background-color': 'green'}).attr('#dSpot1');
        $a2.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a1', 'b1') {
        $a1.css({'background-color': 'green'}).attr('#dSpot1');
        $b2.css({'background-color': 'green'}).attr('#dSpot2');
    }else if($destroyerValue = 'a2', 'a3') {
        $a2.css({'background-color': 'green'}).attr('#dSpot1');
        $a3.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a2', 'b2') {
        $a2.css({'background-color': 'green'}).attr('#dSpot1');
        $b2.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a3', 'a4') {
        $a3.css({'background-color': 'green'}).attr('#dSpot1');
        $a4.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a3', 'b3') {
        $a3.css({'background-color': 'green'}).attr('#dSpot1');
        $b3.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a4', 'a5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a4', 'b4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'a5', 'b5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b1', 'b2') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b1', 'c1') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b2', 'b3') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b2', 'c2') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b3', 'b4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b3', 'c3') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b4', 'b5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b4', 'c4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'b5', 'c5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c1', 'c2') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c1', 'd1') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c2', 'c3') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c2', 'd2') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c3', 'c4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c3', 'd3') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c4', 'c5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c4', 'd4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'c5', 'd5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($patrolBoatValue = 'd1', 'd2') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd1', 'e1') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd2', 'd3') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd2', 'e2') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd3', 'd4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd3', 'e3') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd4', 'd5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd4', 'e4') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }else if ($destroyerValue = 'd5', 'e5') {
        $a4.css({'background-color': 'green'}).attr('#dSpot1');
        $b5.css({'background-color': 'green'}).attr('#dSpot2');
    }
});

$submarine.on('click', function(e){
    if ($submarineValue === $patrolBoatValue ||
        $submarineValue === destroyerValue ) { // Need to say, "If any of patrolBoat or Destroyers locations match, then you cannot place it there."
        alert('You cannot put two ships in the same place! Please change your Destroyer location!');
    }else if ($submarineValue = 'a1', 'a2', 'a3') {
        $a1.css({'background-color': 'green'}).attr('#sSpot1');
        $a2.css({'background-color': 'green'}).attr('#sSpot2');
        $a3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'a1', 'b1', 'c1') {
        $a1.css({'background-color': 'green'}).attr('#sSpot1');
        $b2.css({'background-color': 'green'}).attr('#sSpot2');
        $c1.css({'background-color': 'green'}).attr('#sSpot3');
    }else if($submarineValue = 'a2', 'a3', 'a4') {
        $a2.css({'background-color': 'green'}).attr('#sSpot1');
        $a3.css({'background-color': 'green'}).attr('#sSpot2');
        $a4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'a2', 'b2', 'c2') {
        $a2.css({'background-color': 'green'}).attr('#sSpot1');
        $b2.css({'background-color': 'green'}).attr('#sSpot2');
        $c2.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'a3', 'a4', 'a5') {
        $a3.css({'background-color': 'green'}).attr('#sSpot1');
        $a4.css({'background-color': 'green'}).attr('#sSpot2');
        $a5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'a3', 'b3', 'c3') {
        $a3.css({'background-color': 'green'}).attr('#sSpot1');
        $b3.css({'background-color': 'green'}).attr('#sSpot2');
        $c3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'a4', 'b4', 'c4') {
        $a4.css({'background-color': 'green'}).attr('#sSpot1');
        $b4.css({'background-color': 'green'}).attr('#sSpot2');
        $c4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'a5', 'b5', 'c5') {
        $a5.css({'background-color': 'green'}).attr('#sSpot1');
        $b5.css({'background-color': 'green'}).attr('#sSpot2');
        $c5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b1', 'b2', 'b3') {
        $b1.css({'background-color': 'green'}).attr('#sSpot1');
        $b2.css({'background-color': 'green'}).attr('#sSpot2');
        $b3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b1', 'c1', 'd1') {
        $b1.css({'background-color': 'green'}).attr('#sSpot1');
        $d1.css({'background-color': 'green'}).attr('#sSpot2');
        $b3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b2', 'b3', 'b4') {
        $b2.css({'background-color': 'green'}).attr('#sSpot1');
        $b3.css({'background-color': 'green'}).attr('#sSpot2');
        $b4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b2', 'c2', 'd2') {
        $b2.css({'background-color': 'green'}).attr('#sSpot1');
        $c2.css({'background-color': 'green'}).attr('#sSpot2');
        $d2.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b3', 'b4', 'b5') {
        $b3.css({'background-color': 'green'}).attr('#sSpot1');
        $b4.css({'background-color': 'green'}).attr('#sSpot2');
        $b5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b3', 'c3', 'd3') {
        $b3.css({'background-color': 'green'}).attr('#sSpot1');
        $c3.css({'background-color': 'green'}).attr('#sSpot2');
        $d3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'b4', 'c4', 'd4') {
        $b4.css({'background-color': 'green'}).attr('#sSpot1');
        $c4.css({'background-color': 'green'}).attr('#sSpot2');
        $d4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($destroyerValue = 'b5', 'c5', 'd5') {
        $b5.css({'background-color': 'green'}).attr('#sSpot1');
        $c5.css({'background-color': 'green'}).attr('#sSpot2');
        $d5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c1', 'c2', 'c3') {
        $c1.css({'background-color': 'green'}).attr('#sSpot1');
        $c2.css({'background-color': 'green'}).attr('#sSpot2');
        $c3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c1', 'd1', 'e1') {
        $c1.css({'background-color': 'green'}).attr('#sSpot1');
        $d1.css({'background-color': 'green'}).attr('#sSpot2');
        $e1.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c2', 'c3', 'c4') {
        $c2.css({'background-color': 'green'}).attr('#sSpot1');
        $c3.css({'background-color': 'green'}).attr('#sSpot2');
        $c4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c2', 'd2', 'e2') {
        $c2.css({'background-color': 'green'}).attr('#sSpot1');
        $d2.css({'background-color': 'green'}).attr('#sSpot2');
        $e2.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c3', 'c4', 'c5') {
        $c3.css({'background-color': 'green'}).attr('#sSpot1');
        $c4.css({'background-color': 'green'}).attr('#sSpot2');
        $c5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c3', 'd3', 'e3') {
        $c3.css({'background-color': 'green'}).attr('#sSpot1');
        $d3.css({'background-color': 'green'}).attr('#sSpot2');
        $e3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c4', 'd4', 'e4') {
        $c4.css({'background-color': 'green'}).attr('#sSpot1');
        $d4.css({'background-color': 'green'}).attr('#sSpot2');
        $d4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'c5', 'd5', 'e5') {
        $c5css({'background-color': 'green'}).attr('#sSpot1');
        $d5.css({'background-color': 'green'}).attr('#sSpot2');
        $e5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'd1', 'd2', 'd3') {
        $d1.css({'background-color': 'green'}).attr('#sSpot1');
        $d2.css({'background-color': 'green'}).attr('#sSpot2');
        $d3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'd2', 'd3', 'd4') {
        $d2.css({'background-color': 'green'}).attr('#sSpot1');
        $d3.css({'background-color': 'green'}).attr('#sSpot2');
        $d4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'd3', 'd4', 'd5') {
        $d3.css({'background-color': 'green'}).attr('#sSpot1');
        $d4.css({'background-color': 'green'}).attr('#sSpot2');
        $d5.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'e1', 'e2', 'e3') {
        $e1.css({'background-color': 'green'}).attr('#sSpot1');
        $e2.css({'background-color': 'green'}).attr('#sSpot2');
        $e3.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'e2', 'e3', 'e4') {
        $e2.css({'background-color': 'green'}).attr('#sSpot1');
        $e3.css({'background-color': 'green'}).attr('#sSpot2');
        $e4.css({'background-color': 'green'}).attr('#sSpot3');
    }else if ($submarineValue = 'e3', 'e4', 'e5') {
        $e3.css({'background-color': 'green'}).attr('#sSpot1');
        $e4.css({'background-color': 'green'}).attr('#sSpot2');
        $e5.css({'background-color': 'green'}).attr('#sSpot3');
    }
});


// Setup possible player locations for computer to attack
var playerLocations =
  [[$a1, $a2, $a3, $a4, $a5],
  [$b1, $b2, $b3, $b4, $b5],
  [$c1, $c2, $c3, $c4, $c5],
  [$d1, $d2, $d3, $d4, $d5],
  [$e1, $e2, $e3, $e4, $e5]];

// Setup possible location for computers board
var computerLocations =
  [[$a1, $a2, $a3, $a4, $a5],
  [$b1, $b2, $b3, $b4, $b5],
  [$c1, $c2, $c3, $c4, $c5],
  [$d1, $d2, $d3, $d4, $d5],
  [$e1, $e2, $e3, $e4, $e5]];

// Create a function that will randomly pull three sets of locations for the computer.
function setUpComputer () {

};
//The Computer's board will be an array of seven locations chosen at random from the computerLocations array.
//If one of the locations in the array has been chosen by the player, that location will be a HIT.
//A HIT will turn the div background to red, change the inner text to 'HIT', and change the ID to HIT.
// Create the START button eventListener that will
var $start = $('button').on('click', function (e) {

});
// Create the if/else statment that to change the div to a HIT or MISS
if () {};
// Use the .pop() method to access the location and remove it from the array so it can't be used again.
// If it is a hit, change the div color to Red
// If it's a miss, change the div location to Green

//Create the function that will choose the computers move every time the user enter's their attack location
// Use math.Random() and the the .pop() method to use random locations from the array
// If the computer's move is a HIT, iniate a HIT on the players board
// If the computer's move is a miss, initiate a MISS on the player's board.

// Create the while loop that will allow the player to keep pressing START to prompt another attack
// until there are 7 instances of the id "#hit" on either the player or computer's board.

// End game: Prompt Who Won or lost and refresh the game.
