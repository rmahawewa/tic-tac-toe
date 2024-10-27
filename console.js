console.log("Welcome to tic-tac-toe");

console.log("Game board");
console.log("  A B C");
console.log("1 * * *");
console.log("2 * * *");
console.log("3 * * *");

console.log("Select one of these points at a time: A1 , A2 , A3 , B1 , B2 , B3 , C1 , C2 , C3");

console.log("Player's symbol - X");
console.log("Computer's symbol - O");

console.log("Player round is first");

let point = prompt("Select a one from given points: ");

console.log("The point is: " + point);

let moves = {
    A1: 0,
    A2: 0,
    A3: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    C1: 0,
    C2: 0,
    C3: 0,
};

console.log(point in moves);
console.log(moves[point]);

if(point in moves && moves[point] == 0){
    console.log("point is present");
    moves[point] = "X";

}
console.log(moves);