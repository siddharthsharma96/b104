// instance of all Nodes

const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

const player1Score = document.querySelector("#score--0");
const player2Score = document.querySelector("#score--1");

const player1CurrentScore = document.querySelector("#current--0");
const player2CurrentScore = document.querySelector("#current--1");

const diceImage = document.querySelector(".dice");
const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let score1, score2, currentScore, activePlayer, playing;

//New Game Button Functionality
const init = () => {
  score1 = 0;
  score2 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  player1Score.textContent = score1;
  player2Score.textContent = score2;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  player1.classList.add("player--active");
  player2.classList.remove("player--active");
  player1.classList.remove("player--winner");
  player2.classList.remove("player--winner");
  diceImage.classList.add("hidden");
};
init();

const SwitchPlayer = () => {
  // 1. Change Player
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  // 1.2 Current of that player should de 0
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle("player--active");
  player2.classList.toggle("player--active");
};

// Roll Dice Button Functionality
const rollDice = () => {
  // 1.Currently playing or not
  if (playing == true) {
    // 1.1 Generate a random dice roll between 1-6
    let randomNumber = Math.trunc(Math.random() * 6) + 1;

    // 1.2 Display the dice image of the random number
    diceImage.src = `./dice-${randomNumber}.png`;
    diceImage.classList.remove("hidden");
    // 1.3check If the random is 1
    if (randomNumber === 1) {
      // 1.3.1 If true switch to next player
      SwitchPlayer();
    } else {
      // 1.3.2 If false add the random number to current score of active player
      currentScore = currentScore + randomNumber;
      // 1.3.3 show the score on UI
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    }
  }
};

// Hold Button Functionality

const holdfunc = () => {
  // 1.Currently playing or not
  if (playing == true) {
    if (activePlayer === 0) {
      //   2.1 Add current score of that active player in main/total  score
      score1 = score1 + currentScore;
      // 2.2update the ui
      player1Score.textContent = score1;
      // 2.3 Check if the score is >=20
      if (score1 >= 20) {
        // 2.3.2 if yes finsh the game
        playing = false;
        diceImage.classList.add("hidden");
        player1.classList.add("player--winner");
      } else {
        // 2.3.1 if not chanGE THE PLAYER
        SwitchPlayer();
      }
    } else {
      //   2.1 Add current score of that active player in main/total  score
      score2 = score2 + currentScore;

      // 2.2update the ui
      player2Score.textContent = score2;

      // 2.3 Check if the score is >=20
      if (score2 >= 20) {
        // 2.3.2 if yes finsh the game
        playing = false;
        diceImage.classList.add("hidden");
        player2.classList.add("player--winner");
      } else {
        // 2.3.1 if not chanGE THE PLAYER
        SwitchPlayer();
      }
    }
  }
};

// Event Listerners for buttons

btnNewGame.addEventListener("click", init);
btnRollDice.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdfunc);
