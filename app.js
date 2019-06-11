/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer ;
scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.querySelector('.modal').style.display = 'none';

document.getElementById('score-0').innerHTML = '0';
document.getElementById('score-1').innerHTML = '0';

document.getElementById('current-0').innerHTML = '0';
document.getElementById('current-1').innerHTML = '0';



document.querySelector('.btn-roll').addEventListener('click', function() {
                                                     
   //anonymous function doesn't have a name- which cannot be reused.
    //1. get a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    //update the current score and round score
    document.querySelector('#current-'+ activePlayer).innerHTML = dice;
    //round score to 0 if dice returns 1
    

    
    if(dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore;
        //document.querySelector('#score-' + activePlayer).innerHTML = roundScore;
        
    } else {
        //making 0 of player 1 and shifting to 2nd player
        document.querySelector('#current-'+ activePlayer).innerHTML = 0;
        document.querySelector('#score-'+ activePlayer).innerHTML = 0;
        scores[activePlayer] = 0;
        
        alert('Oops...Its a zero. scores are updated to zero.');
        
       
      
        
        nextPlayer();
     
    }
});



document.querySelector('.btn-hold').addEventListener('click', function () {
    
    // get the scores - add current score to global score
    scores[activePlayer] += roundScore;
    
    // update the UI and have the scores
    document.querySelector('#score-' + activePlayer).innerHTML = scores[activePlayer];
    
  
    //check if user won the game
    nextPlayer();
    
   
                                                     
});

function nextPlayer() {
    
   
    
    document.querySelector('#current-'+ activePlayer).innerHTML = 0;
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
 
    
    
    
}




























