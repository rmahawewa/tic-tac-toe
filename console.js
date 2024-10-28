console.log("Welcome to tic-tac-toe");

console.log("Game board");
console.log("  A B C");
console.log("1 * * *");
console.log("2 * * *");
console.log("3 * * *");

console.log("Select one of these points at a time: A1 , A2 , A3 , B1 , B2 , B3 , C1 , C2 , C3");

console.log("Player's symbol - X");
console.log("Computer's symbol - O");

let moves = {
    A1: "*",
    A2: "*",
    A3: "*",
    B1: "*",
    B2: "*",
    B3: "*",
    C1: "*",
    C2: "*",
    C3: "*",
};

let get = document.querySelector("#console-version");
get.addEventListener("click", function(){
    moves = {
        A1: "*",
        A2: "*",
        A3: "*",
        B1: "*",
        B2: "*",
        B3: "*",
        C1: "*",
        C2: "*",
        C3: "*",
    };
    alert("Please open the console first");
    process();
})

// process();

function process(){
    let iterate = 0;
    let win = 0;
    while (iterate == 0) {
        get_player_input();
        let winner = find_winner();
        if(winner == 1){
            console.log("Player wins the game");
            win = 1;
            break;
        }
        make_computer_move();
        winner = find_winner();
        if(winner == 2){
            console.log("Computer wins the game");
            win = 1;
            break;
        }
        draw_board();
        let length = get_free_space().length;
        iterate = length > 0 ? 0 : 1;
    }
    let length = get_free_space();
    if(length == 0 && win == 0){
        console.log("Game is draw");
    }

}

function get_free_space(){
    let free_space = [];
    Object.entries(moves).forEach(([key, value]) => {
        if(value.localeCompare("*") == 0){
            free_space.push(key);
        }
    })
    return free_space;
}

function make_computer_move(){
    let free_space = get_free_space();
    let length = free_space.length;
    if(length > 0){
        random_number = Math.floor((Math.random()*(length-1)));
    }
    let position = free_space[random_number];
    moves[position] = "O";
}

function draw_board(){
    console.log("  A B C");
    console.log("1 "+moves['A1']+" "+moves['B1']+" "+moves['C1']);
    console.log("2 "+moves['A2']+" "+moves['B2']+" "+moves['C2']);
    console.log("3 "+moves['A3']+" "+moves['B3']+" "+moves['C3']);
}

function get_player_input(){
    console.log("Player round is first");
    draw_board();
    let point = prompt("Select an empty point from the board: ");    
    if(point in moves && moves[point].localeCompare("*")===0){
        console.log("The point is: " + point);
        console.log("point is present");
        moves[point] = "X";    
    }else{
        get_player_input();
    }
}

function find_winner(){
    let a1 = moves['A1'].toString();
    let a2 = moves['A2'].toString();
    let a3 = moves['A3'].toString();
    let b1 = moves['B1'].toString();
    let b2 = moves['B2'].toString();
    let b3 = moves['B3'].toString();
    let c1 = moves['C1'].toString();
    let c2 = moves['C2'].toString();
    let c3 = moves['C3'].toString();

    if(a1.localeCompare(a2)===0 && a2.localeCompare(a3)===0){
        if(a1.localeCompare("X") === 0){
            return 1;
        }
        if(a1.localeCompare("O") === 0){
            return 2;
        }
    }
    if(b1.localeCompare(b2)===0 && b2.localeCompare(b3)===0){
        if(b1.localeCompare("X") === 0){
            return 1;
        }
        if(b1.localeCompare("O") === 0){
            return 2;
        }
    }
    if(c1.localeCompare(c2)===0 && c2.localeCompare(c3)===0){
        if(c1.localeCompare("X") === 0){
            return 1;
        }
        if(c1.localeCompare("O") === 0){
            return 2;
        }
    }
    if(a1.localeCompare(b1)===0 && b1.localeCompare(c1)===0){
        if(a1.localeCompare("X") === 0){
            return 1;
        }
        if(a1.localeCompare("O") === 0){
            return 2;
        }
    }
    if(a2.localeCompare(b2)===0 && b2.localeCompare(c2)===0){
        if(a2.localeCompare("X") === 0){
            return 1;
        }
        if(a2.localeCompare("O") === 0){
            return 2;
        }
    }
    if(a3.localeCompare(b3)===0 && b3.localeCompare(c3)===0){
        if(a3.localeCompare("X") === 0){
            return 1;
        }
        if(a3.localeCompare("O") === 0){
            return 2;
        }
    }
    if(a1.localeCompare(b2)===0 && b2.localeCompare(c3)===0){
        if(a1.localeCompare("X") === 0){
            return 1;
        }
        if(a1.localeCompare("O") === 0){
            return 2;
        }
    }
    if(a3.localeCompare(b2)===0 && b2.localeCompare(c1)===0){
        if(a3.localeCompare("X") === 0){
            return 1;
        }
        if(a3.localeCompare("O") === 0){
            return 2;
        }
    }
    return 0;
}