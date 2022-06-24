// // var Player = prompt("Let's Play!")

// // prompt("Would You Like to Challenge Me?")
// // return Player

// // if (Player == true) {
// //     prompt("Choose your desinty!")
// // } else {
// //     alert("See you next time cowboy!")
// // }

// let scoreBoard = {
//     Wins:0,
//     Losses:0,
//     Ties:0,
// }

// choice = choice.toLowerCase();

// // var R = "r" || "R"
// // var P = "p" || "P"
// // var S = "s" || "S"


// let game = function(){
//     let choice = ["r", "p", "s"];
 
//     let playing = window.prompt("Pick your weapon; R for Rock, S for Scissors, and P for Paper");
    
//     let computer = choice[Math.floor(Math.random()*choice.length)];
    

//     if (choice == R && computer == S){
//         window.alert("WIN!");
//         scoreBoard.Wins++;
//     } else if (choice == S && computer == P){
//         window.alert("WIN!");
//         scoreBoard.Wins++;
//     } else if (choice = P && computer == R){
//         window.alert("WIN!");
//         scoreBoard.Wins++;
//     } else if (choice == computer){
//         window.alert("TIE!");
//     } else {
//         window.alert("YOu Lost");
//     }

//     // if (choice == "r" && computer == "s"){
//     //     window.alert("WIN!");
//     //     scoreBoard.Wins++;
//     // } else if (choice == "r" && computer == "p"){
//     //     window.alert("OOPS You lost!");
//     //     scoreBoard.Losses++;
//     // } else if (choice == "s" && computer == "p"){
//     //     window.alert("WIN!");
//     //     scoreBoard.Wins++;
//     // } else if (choice == "s" && computer == "r"){
//     //     window.alert("OOPS You lost!");
//     //     scoreBoard.Losses++
//     // } else if (choice == "p" && computer == "r"){
//     //     window.alert("WIN!");
//     //     scoreBoard.Wins++;
//     // } else if (choice == "p" && computer == "s") {
//     //     window.alert("OOPS You lost!");
//     //     scoreBoard.Losses++;
//     // } else if (choice == computer){
//     //     window.alert("TIE!");
//     //     scoreBoard.Ties++;
//     // }

//     window.alert(`Wins: ${scoreBoard.Wins}, Losses : ${scoreBoard.Losses}, Ties : ${scoreBoard.Ties}`);

//     if (window.confirm("Play more?") == true) {
//         window.alert("lets go!");
//         game();
//     } else {
//         window.alert("Thank for playing!");
//         window.close();
//     }
// }

// game();



    // } else if (choice == S && computer == S){
    //     window.alert("TIE!");
    //     scoreBoard.Ties++;

    // } else if (choice = P && computer == P){
    //     window.alert("TIE!");
    //     scoreBoard.Ties++;
    //  else {
    //     window.alert("THAT IS NOT A ROCK, PAPPER, OR SCISSORS COME BACK WHEN YOU CAN PLAY BY THE RULES!")
    //     window.close();
    // }

    // william lucht way
    // 1 I need to a way to store rock, paper, scissor  in some way - in an array probably

    var options = ["R", "P", "S"]
    // 2 I need a way to store my wins, ties, and losses 

    var wins = 0
    var ties = 0
    var losses = 0
    // 3 i need to create a play function to start the application
    var playGame = function(){
        var userChoice = window.prompt("Please enter R, P, or S:")
        
        // if user entered right in put
        if(!userChoice){
            return;
        }

        // 6 convert to upper case to match my array
        userChoice = userChoice.toUpperCase(); 

        //I want to get a random selection from my array
        var index = Math.floor(Math.random()* options.length);
        var computerChoice = options[index]

        window.alert("The Computer chose" + computerChoice)

        if (userChoice === computerChoice) {
            ties++;
            window.alert("Ites a tie!!");
        } else if (
            (userChoice === "R" && computerChoice === "S") || 
            (userChoice === "P" && computerChoice === "R") || 
            (userChoice === "S" && computerChoice === "P")
            ) {
            wins++;
            window.alert("You Win!");
        } else {
            losses++;
            window.alert("You lost!");
        }
        window.alert("Stats: \nwins:" + wins + "Stats: \nlosses" + losses + "Stats: \nties" + ties);

        var playAgain = window.confirm("Play again?");
        if(playAgain){
            playGame();
        }
    };
    // 4 i need to track user input get choices from users

    // 5 i need a way to check if they cancelled out and then end function 

    
    
    playGame();