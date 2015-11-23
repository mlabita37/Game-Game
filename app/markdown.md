**SHIPSTRIKE: A KNOCK OFF OF BATTLESHIP**

- Player1 = the Player;
- Player2 = the Computer;

**RULES:**
- Each player gets a board with a 5 x 5 grid and three ships to place.
- The objective is to sink all of your opponents ships by correctly guessing their location.

**SHIPS:**
- Patrol Boat: 2 spaces
- Destroyer: 2 spaces
- Submarine: 3 spaces

**SETTING UP THE BOARDS:**
- Player1 one will get to choose each of their ship locations on their board using the select menu. These locations will have a ship appear where selected.  After all locations have been submitted, Player 1 will need to hit a START button to begin the game. When START is initiated, the computers board will automatically add it’s ships to an array. Each time a player is prompted for a guess, the computer guess will automatically run after.

- The computer’s board will be chosen from a list of locations stored in an array. Since we only need to know the locations where the ships are, we’ll pop() off the needed locations for each ship from an array. Then we’ll make a new array of the popped locations which will be the computer’s ships. Then we make an if/else, that says if these locations are HIT, change the background-color to red and the innerText to HIT. But if it’s not a number in the new array, then change the answers div location to blue and indicate that it’s a miss.

**HIT:**
- Computer will generate a location at Random. if the Computer’s choice choice matches where a ship is, the innerText will be changed to ‘HIT’ and the  background color will be changed to red.
**MISS:**
- If the location chosen does not have a ship, the div will change blue, text will change to MISS, and id will change to MISS.

**PLAY GAME:**
- The game will be done using prompts. When the player clicks Start, they will be prompted for their first guess. Starting with Player 1, each player will get a turn to choose a spot on the board to attack. Using a while loop, the game will continue to play until there are 7 instances of HIT on either of their boards. At that point the player without 7 HIT id's is the winner.
