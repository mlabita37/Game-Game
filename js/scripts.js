console.log("Ready...")

function ShipStrikeGame () {
  this.playerGameState = [
    '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9',
    '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24'
  ];
  this.computerGameState = [
    '0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9',
    '10', '11', '12', '13', '14',
    '15', '16', '17', '18', '19',
    '20', '21', '22', '23', '24'
  ];
  this.computerLocations = [];
  this.pValue = "";
  this.dValue = "";
  this.sValue = "";
  this.playerScore = 0;
  this.compScore = 0;
}

window.onload = function() {
  var newGame = new ShipStrikeGame();
  newGame.setPatrol();
  newGame.setDestroyer();
  newGame.setSubmarine();
  newGame.startGame();
};


var twoSpotLocations = [
  '0,1','0,5','1,2','1,6','2,3','2,7','3,4','3,8','4,9','5,6',
  '5,10','6,7','6,11','7,8','7,12','8,9','8,13','9,14','10,11','10,15',
  '11,12','11,16','12,13','12,17','13,14','13,18','14,19','15,16','15,20','16,17',
  '16,21','17,18','17,22','18,19','18,23','19,24','20,21','21,22','22,23','23,24'
];

var threeSpotLocations = [
  '0,1,2','0,5,10','1,2,3','1,6,11','2,3,4','2,7,12','3,8,13','4,9,14','5,6,7','5,10,15',
  '6,7,8','6,11,16','7,8,9','7,12,17','8,13,18','9,14,19','10,11,12','10,15,20','11,12,13','11,16,21',
  '12,13,14','12,17,22','13,18,23','14,19,24','15,16,17','16,17,18','17,18,19','20,21,22','21,22,23','22,23,24'
];

// Store the ENTER values in variables AND call the div coloring functions
ShipStrikeGame.prototype.setPatrol = function() {
  var scope = this;
  $('#pEnter').on('click', function(){
    pValue = scope.pValue;
    pValue = $('#pSelectOne').val() + ',' + $('#pSelectTwo').val();
    scope.colorPatrolDivs(pValue);
    console.log(pValue);
    return pValue;
  })
};

ShipStrikeGame.prototype.setDestroyer = function() {
  var scope = this;
$('#dEnter').on('click', function(){
  dValue = scope.dValue;
  dValue = $('#dSelectOne').val() + ',' + $('#dSelectTwo').val();
  scope.colorDestroyerDivs(dValue);
  console.log(dValue);
  return dValue;
})
};

ShipStrikeGame.prototype.setSubmarine = function() {
  var scope = this;
$('#sEnter').on('click', function(){
  sValue = scope.sValue;
  sValue = $('#sSelectOne').val() + ',' + $('#sSelectTwo').val() + ',' + $('#sSelectThree').val();
  scope.colorSubmarineDivs(sValue);
  console.log(sValue);
  return sValue;
  })
};

// Change background color to green when selected
ShipStrikeGame.prototype.colorPatrolDivs = function(pValue) {
  for(var i=0; i < twoSpotLocations.length; i++) {
      if (pValue === twoSpotLocations[i]) {
        var locationSplit = twoSpotLocations[i].split(',');
        for (var x=0; x < locationSplit.length; x++) {
          $("#" + locationSplit[x]).css({'background-color':'lightsteelblue'});
          $("#" + locationSplit[x]).css({'background-image':'url("./images/patrol.png")'});
          $("#" + locationSplit[x]).css({'background-repeat':'no-repeat'});
          $("#" + locationSplit[x]).css({'color':'white'});
          $("#" + locationSplit[x]).text(' ');
          $("#" + locationSplit[x]).attr({'id':'ship'});
        }
      }
    }
};

ShipStrikeGame.prototype.colorDestroyerDivs = function(dValue) {
  for(var i=0; i < twoSpotLocations.length; i++) {
      if (dValue === twoSpotLocations[i]) {
        var locationSplit = twoSpotLocations[i].split(',');
        for (var x=0; x < locationSplit.length; x++) {
          $("#" + locationSplit[x]).css({'background-color':'darkcyan'});
          $("#" + locationSplit[x]).css({'background-image':'url("./images/destroyer.png")'});
          $("#" + locationSplit[x]).css({'background-repeat':'no-repeat'});
          $("#" + locationSplit[x]).text(' ');
          $("#" + locationSplit[x]).attr({'id':'ship'});
        }
      }
    }
};

ShipStrikeGame.prototype.colorSubmarineDivs = function(sValue) {
  for(var i=0; i < threeSpotLocations.length; i++) {
      if (sValue === threeSpotLocations[i]) {
        var locationSplit = threeSpotLocations[i].split(',');
        for (var x=0; x < locationSplit.length; x++) {
          $("#" + locationSplit[x]).css({'background-image':'url("./images/submarine.png")'});
          $("#" + locationSplit[x]).css({'background-repeat':'no-repeat'});
          $("#" + locationSplit[x]).css({'background-color':'slategrey'});
          $("#" + locationSplit[x]).text(' ');
          $("#" + locationSplit[x]).attr({'id':'ship'});
        }
      }
    }
};

ShipStrikeGame.prototype.setComputer = function() {
  computerLocations = this.computerLocations;
  var firstSpot = twoSpotLocations[Math.floor(Math.random() * twoSpotLocations.length)];
  var secondSpot = twoSpotLocations[Math.floor(Math.random() * twoSpotLocations.length)];
  var firstSplit = firstSpot.split(',');
  var secondSplit = secondSpot.split(',');
  for (var i=0; i < secondSplit.length; i++){
    if( $.inArray(firstSplit[i], secondSplit) !== -1 ) {
      console.log('THIS FIRST COMP LOCATION CHECK IS WORKING!');
      secondSpot = twoSpotLocations[Math.floor(Math.random() * twoSpotLocations.length)];
      console.log(secondSpot);
    }else {
    secondSpot = secondSpot;
    }
  }
  var thirdSpot = threeSpotLocations[Math.floor(Math.random() * threeSpotLocations.length)];
  var thirdSplit = thirdSpot.split(',');
  for (var j=0; j < thirdSplit.length; j++){
      if( ($.inArray(firstSplit[j], thirdSplit) > -1)
      || ($.inArray(secondSplit[j], thirdSplit) > -1) ){
        console.log("THIS SECOND COMP LOCATION CHECK IS WORKING");
      thirdSpot = threeSpotLocations[Math.floor(Math.random() * threeSpotLocations.length)];
    }else {
      thirdSpot = thirdSpot;
    }
  }
  computerLocations.push(firstSpot);
  computerLocations.push(secondSpot);
  computerLocations.push(thirdSpot);
  console.log(computerLocations);
  return computerLocations;
};

ShipStrikeGame.prototype.startGame = function(){
var scope = this;
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
  scope.setComputer();
  scope.playerMove();
})
};


ShipStrikeGame.prototype.playerMove = function() {
var scope = this;
playerScore = this.playerScore;
$('.computerCell').on('click', function(){
  computerLocations = scope.computerLocations;
  console.log(pValue);
  console.log(computerLocations);
  var $compCell = $(this);
  var $compCellVal = $compCell.attr('value');
  var compArray = [];
  var compSplit;
  for(var i=0; i < computerLocations.length; i++){
    compSplit = computerLocations[i].split(',');
    for (var x=0; x < compSplit.length; x++) {
      compArray.push(compSplit[x]);
    if ($.inArray($compCellVal, compArray)> -1) {
      $compCell.css({'background-color':'red'});
      $compCell.css({'background-image':'url("./images/hit.png")'});
      $compCell.css({'color':'white'});
      $compCell.text('HIT');
      $compCell.css({'background-repeat':'no-repeat'});
      $compCell.attr('id','hit');
    }else {
    $compCell.css({'background-color':'navy'});
    $compCell.css({'color':'white'});
    $compCell.text('MISS');
    $compCell.attr('id','miss');
  }
  }
}
if ($compCell.attr('id') === 'hit'){
  alert('It was a HIT!');
  playerScore++;
  console.log(playerScore);
}
else if ($compCell.attr('id') === 'miss'){
  alert('It was a MISS! Reload!');
}
scope.computerMove(pValue, dValue, sValue);
})
};

ShipStrikeGame.prototype.computerMove = function(pValue, dValue, sValue, playerGameState) {
  playerGameState = this.playerGameState;
  console.log(pValue);
  var $compAttack = playerGameState[Math.floor(Math.random() * twoSpotLocations.length)];
  console.log($compAttack);
  console.log("1 working");
  compScore = this.compScore;
  console.log("2 working");
  var pValSplit = pValue.split(',');
  var dValSplit = dValue.split(',');
  var sValSplit = sValue.split(',');
  console.log("3 working");
  var playerLocations = [];
  console.log("4 working");
  for(var i=0; i < pValue.length; i++) {
    console.log("5 working");
    playerLocations.push(pValSplit[i]);
    playerLocations.push(dValSplit[i]);
    console.log(playerLocations);
    if ($.inArray($compAttack, playerLocations)> -1){
      console.log("comp hit your ship");
      console.log($compAttack);
      $('#' + $compAttack).css({'color':'white'});
      $('#' + $compAttack).css({'background-image':'url("./images/hit.png")'});
      $('#' + $compAttack).css({'background-color':'red'});
      $('#' + $compAttack).text('HIT');
      $('#' + $compAttack).attr('class','hit');

    }
    else {
      console.log("comp missed your ship");
      $('#' + $compAttack).css({'background-color':'navy'});
      $('#' + $compAttack).css({'color':'white'});
      $('#' + $compAttack).text('MISS');
    }
  }
  $compAttack = parseInt($compAttack) + 24;
  console.log($compAttack);
  if ($('#' + $compAttack).value === 'hit') {
    console.log("The computer HIT your ship!!!");
    compScore += 1;
  }
  this.playGame(this.playerscore, this.compscore);
};

ShipStrikeGame.prototype.playGame = function(playerScore, compScore){
  playerScore = this.playerScore;
  compScore = this.compScore;
  if (playerScore === 7) {
    alert("You've sunk all the computers ships! Player 1 is the Winner!");
    var answer = prompt("Play again? 'Yes' or 'No'?");
    answer = answer.toLowerCase();
    if (answer === 'yes'){
      document.reload();
    }else if (answer === 'no'){
      alert("Thanks for playing!");
    }
  }else if (compScore === 7){
    alert("The computer has sunk all your ships! The computer is the winner!")
    answer = prompt("Play again? 'Yes' or 'No'?");
    answer = answer.toLowerCase();
    if (answer === 'yes'){
      document.reload();
  } else if (answer === 'no'){
    alert("Thanks for playing!");
  }
}
};
