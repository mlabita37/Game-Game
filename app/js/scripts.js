console.log("Ready...")

function ShipStrikeGame () {
  this.playerGameState = [
    'a1', 'a2', 'a3', 'a4', 'a5',// 0, 1, 2, 3, 4,
    'b1', 'b2', 'b3', 'b4', 'b5',// 5, 6, 7, 8, 9,
    'c1', 'c2', 'c3', 'c4', 'c5',// 10, 11, 12, 13, 14,
    'd1', 'd2', 'd3', 'd4', 'd5',// 15, 16, 17, 18, 19,
    'e1', 'e2', 'e3', 'e4', 'e5' // 20, 21, 22, 23, 24
  ];
  this.computerGameState = [
      'a1', 'a2', 'a3', 'a4', 'a5',// 0,  1,  2,  3,  4,
      'b1', 'b2', 'b3', 'b4', 'b5',// 5,  6,  7,  8,  9,
      'c1', 'c2', 'c3', 'c4', 'c5',// 10, 11, 12, 13, 14,
      'd1', 'd2', 'd3', 'd4', 'd5',// 15, 16, 17, 18, 19,
      'e1', 'e2', 'e3', 'e4', 'e5' // 20, 21, 22, 23, 24
  ];
}

ShipStrikeGame.prototype.$el = $('<table>');


window.onload = function() {
  var newGame = new ShipStrikeGame();
  newGame.setPatrol();
  newGame.setDestroyer();
  newGame.setSubmarine();
  var computerLocations = newGame.setComputer();
  newGame.playerArray();
  newGame.startGame();
  newGame.playerMove(computerLocations);
};


var twoSpotLocations = [
  ['0,1'],
  ['0,5'],
  ['1,2'],
  ['1,6'],
  ['2,3'],
  ['2,7'],
  ['3,4'],
  ['3,8'],
  ['4,9'],
  ['5,6'],
  ['5,10'],
  ['6,7'],
  ['6,11'],
  ['7,8'],
  ['7,12'],
  ['8,9'],
  ['8,13'],
  ['9,14'],
  ['10,11'],
  ['10,15'],
  ['11,12'],
  ['11,16'],
  ['12,13'],
  ['12,17'],
  ['13,14'],
  ['13,18'],
  ['14,19'],
  ['15,16'],
  ['15,20'],
  ['16,17'],
  ['16,21'],
  ['17,18'],
  ['17,22'],
  ['18,19'],
  ['18,23'],
  ['19,24'],
  ['20,21'],
  ['21,22'],
  ['22,23'],
  ['23,24']
];

var threeSpotLocations = [
  ['0,1,2'],
  ['0,75,10'],
  ['1,2,3'],
  ['1,6,11'],
  ['2,3,4'],
  ['2,7,12'],
  ['3,8,13'],
  ['4,9,14'],
  ['5,6,7'],
  ['5,10,15'],
  ['6,7,8'],
  ['6,11,16'],
  ['7,8,9'],
  ['7,12,17'],
  ['8,13,18'],
  ['9,14,19'],
  ['10,11,12'],
  ['10,15,20'],
  ['11,12,13'],
  ['11,16,21'],
  ['12,13,14'],
  ['12,17,22'],
  ['13,18,23'],
  ['14,19,24'],
  ['15,16,17'],
  ['16,17,18'],
  ['17,18,19'],
  ['20,21,22'],
  ['21,22,23'],
  ['22,23,24']
];

// Store the ENTER values in variables AND call the div coloring functions
ShipStrikeGame.prototype.setPatrol = function() {
  var scope = this;
  $('#pEnter').on('click', function(){
    var pValue = $('#pSelectOne').val() + ',' + $('#pSelectTwo').val();
    console.log(pValue);
    scope.colorPatrolDivs(pValue);
  })
};

ShipStrikeGame.prototype.setDestroyer = function() {
  var scope = this;
$('#dEnter').on('click', function(){
  var dValue = $('#dSelectOne').val() + ',' + $('#dSelectTwo').val();
  console.log(dValue);
  scope.colorDestroyerDivs(dValue);
})
};

ShipStrikeGame.prototype.setSubmarine = function() {
  var scope = this;
$('#sEnter').on('click', function(){
  var sValue = $('#sSelectOne').val() + ',' + $('#sSelectTwo').val() + ',' + $('#sSelectThree').val();
  console.log(sValue);
  scope.colorSubmarineDivs(sValue);
  })
};

ShipStrikeGame.prototype.playerArray = function(pValue, dValue, sValue) {
  playerLocations = [];
  playerLocations.push(pValue);
  playerLocations.push(dValue);
  playerLocations.push(sValue);
  console.log(playerLocations);
};

// Change background color to green when selected
ShipStrikeGame.prototype.colorPatrolDivs = function(pValue) {
  console.log("1st part working");
  for(var i=0; i < twoSpotLocations.length; i++) {
    console.log("2nd part working", pValue, twoSpotLocations[i]);
      if (pValue === twoSpotLocations[i][0]) {
        var locationSplit = twoSpotLocations[i][0].split(',');
        for (var x=0; x < locationSplit.length; x++) {
          $("#" + locationSplit[x]).css({'background-color':'green'});
          $("#" + locationSplit[x]).css({'color':'white'});
          $("#" + locationSplit[x]).text('Patrol');
          $("#" + locationSplit[x]).attr({'id':'ship'});
        }
      }
    }
};

ShipStrikeGame.prototype.colorDestroyerDivs = function(dValue) {
  console.log("1st part working");
  for(var i=0; i < twoSpotLocations.length; i++) {
    console.log("2nd part working", dValue, twoSpotLocations[i]);
      if (dValue === twoSpotLocations[i][0]) {
        var locationSplit = twoSpotLocations[i][0].split(',');
        for (var x=0; x < locationSplit.length; x++) {
          $("#" + locationSplit[x]).css({'background-color':'green'});
          $("#" + locationSplit[x]).css({'color':'white'});
          $("#" + locationSplit[x]).text('Destroy');
          $("#" + locationSplit[x]).attr({'id':'ship'});
        }
      }
    }
};

ShipStrikeGame.prototype.colorSubmarineDivs = function(sValue) {
  for(var i=0; i < threeSpotLocations.length; i++) {
      if (sValue === threeSpotLocations[i][0]) {
        var locationSplit = threeSpotLocations[i][0].split(',');
        for (var x=0; x < locationSplit.length; x++) {
          $("#" + locationSplit[x]).css({'background-color':'green'});
          $("#" + locationSplit[x]).css({'color':'white'});
          $("#" + locationSplit[x]).text('Sub');
          $("#" + locationSplit[x]).attr({'id':'ship'});
        }
      }
    }
};


ShipStrikeGame.prototype.setComputer = function() {
  var firstSpot = twoSpotLocations[Math.floor(Math.random() * twoSpotLocations.length)];
  var secondSpot = twoSpotLocations[Math.floor(Math.random() * twoSpotLocations.length)];
  var thirdSpot = threeSpotLocations[Math.floor(Math.random() * threeSpotLocations.length)];
  var computerLocations = [];
  computerLocations.push(firstSpot);
  computerLocations.push(secondSpot);
  computerLocations.push(thirdSpot);
  console.log(computerLocations);
  return computerLocations;
}

ShipStrikeGame.prototype.startGame = function(pValue, dValue, sValue){
$('.start').on('click', function() {
  console.log("Start buttons working!");
  $('#ships').empty();
  $('#patrolBoat').empty();
  $('#destroyer').empty();
  $('#submarine').empty();
  $('.start').css({'visibility':'hidden'});
  var $newText = $('<div>');
  $newText.attr('id', 'prompt');
  var $shipSection = $('#ships');
  $shipSection.append($newText);
  $newText.text("To begin, click a location on the computer's board to attack!");
})
};


ShipStrikeGame.prototype.playerMove = function(computerLocations) {
var scope = this;
$('.computerCell').on('click', function(){
  $compCell = $(this);
  $compCellVal = $compCell.attr('value');
  for(var i=0; i < computerLocations.length; i++){
    var compSplit = computerLocations[i][0].split(',');
    console.log(compSplit[1]);
    console.log($compCellVal);
    for (var x=0; x < 2; x++) {
    if($compCellVal === compSplit[x]) {
      console.log($compCell.attr('value'));
      console.log(compSplit[x]);
      console.log(2+2);
      $compCell.css({'background-color':'red'});
      $compCell.css({'color':'white'})
      $compCell.text('HIT');
      $compCell.attr('id','hit');
    }else {
      $compCell.css({'background-color':'blue'});
      $compCell.css({'color':'white'})
      $compCell.text('MISS');
      $compCell.attr('id', 'miss');
    }
  }
  }
})
};

/*ShipStrikeGame.prototype.computerMove = function(playerLocations) {
  var computerTurn =

}
*/
