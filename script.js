// var Player = prompt("Let's Play!")

// prompt("Would You Like to Challenge Me?")
// return Player

// if (Player == true) {
//     prompt("Choose your desinty!")
// } else {
//     alert("See you next time cowboy!")
// }

let scoreBoard = {
    Wins:0,
    Losses:0,
    Ties:0,
}

choice = choice.toLowerCase();

// var R = "r" || "R"
// var P = "p" || "P"
// var S = "s" || "S"


let game = function(){
    let choice = ["r", "p", "s"];
 
    let playing = window.prompt("Pick your weapon; R for Rock, S for Scissors, and P for Paper");
    
    let computer = choice[Math.floor(Math.random()*choice.length)];
    

    if (choice == R && computer == S){
        window.alert("WIN!");
        scoreBoard.Wins++;
    } else if (choice == S && computer == P){
        window.alert("WIN!");
        scoreBoard.Wins++;
    } else if (choice = P && computer == R){
        window.alert("WIN!");
        scoreBoard.Wins++;
    } else if (choice == computer){
        window.alert("TIE!");
    } else {
        window.alert("YOu Lost");
    }

    // if (choice == "r" && computer == "s"){
    //     window.alert("WIN!");
    //     scoreBoard.Wins++;
    // } else if (choice == "r" && computer == "p"){
    //     window.alert("OOPS You lost!");
    //     scoreBoard.Losses++;
    // } else if (choice == "s" && computer == "p"){
    //     window.alert("WIN!");
    //     scoreBoard.Wins++;
    // } else if (choice == "s" && computer == "r"){
    //     window.alert("OOPS You lost!");
    //     scoreBoard.Losses++
    // } else if (choice == "p" && computer == "r"){
    //     window.alert("WIN!");
    //     scoreBoard.Wins++;
    // } else if (choice == "p" && computer == "s") {
    //     window.alert("OOPS You lost!");
    //     scoreBoard.Losses++;
    // } else if (choice == computer){
    //     window.alert("TIE!");
    //     scoreBoard.Ties++;
    // }

    window.alert(`Wins: ${scoreBoard.Wins}, Losses : ${scoreBoard.Losses}, Ties : ${scoreBoard.Ties}`);

    if (window.confirm("Play more?") == true) {
        window.alert("lets go!");
        game();
    } else {
        window.alert("Thank for playing!");
        window.close();
    }
}

game();



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