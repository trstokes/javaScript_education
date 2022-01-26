const getUserChoice = userInput => {
    userInput = userInput.toLowerCase()
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      return 'Error!';
    }
  };
  
  const getComputerChoice = () => {
    let compPick = Math.floor(Math.random() * 3);
    if(compPick === 0) {
      return 'rock';
    } else if (compPick === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  //console.log(getComputerChoice()) // logs random computer choice 
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!'
      } else {
        return 'You win!';
      } 
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    }
  }
    
    // console.log(determineWinner('rock','paper')) // returns winner
  
  const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
playGame(); // Call function to play game