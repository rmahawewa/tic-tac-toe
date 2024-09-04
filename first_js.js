let count = 0;
let player_count = -1;
let comp_count = -1;
let gameBoard = game_board();
let player1 = "";
let player2 = "";
let btn_start = document.querySelector("#start-btn");

let new_gb = btn_start.addEventListener("click", function(){

    let player_value = document.querySelector("select").value;
    let comp_value = (player_value.localeCompare("X") === 0)?"O":"X";

    player1 = player("You", player_value);
    player2 = player("Computer", comp_value);

    if(player1.mark.localeCompare("X") === 0){
        player_count = 0;
        comp_count = 1;
        document.querySelector("#winner-lbl").innerHTML = "You first";    
        setTimeout(() => {
            document.querySelector("#winner-lbl").innerHTML = "";
        }, 2000);
    }else{
        player_count = 1;
        comp_count = 0;
        comp_round(gameBoard, comp_value);
        count++;
    }
    
});

let board_btns = document.querySelectorAll(".board-btns");

board_btns.forEach((btn) => 
    btn.addEventListener("click", function(){
    const indx = btn.value;
    if(player1.player_code !== undefined && count%2 === player_count && count < 9){
        gameBoard.add(indx, player1.mark);
        gameBoard.draw_board();
        count++;

        setTimeout(() => {
            console.log("computer's round");
            comp_round(gameBoard, player2.mark);
            count++;
        }, 700);        
    }
}));

function game_board(){
    const gameboard = ["", "", "", "", "", "", "", "", ""];

    const add = (index, sign) => {
        gameboard[index] = sign;
    }

    const draw_board = () => {
        document.querySelector("#btn-one").innerHTML = gameboard[0];
        document.querySelector("#btn-two").innerHTML = gameboard[1];
        document.querySelector("#btn-three").innerHTML = gameboard[2];
        document.querySelector("#btn-four").innerHTML = gameboard[3];
        document.querySelector("#btn-five").innerHTML = gameboard[4];
        document.querySelector("#btn-six").innerHTML = gameboard[5];
        document.querySelector("#btn-seven").innerHTML = gameboard[6];
        document.querySelector("#btn-eight").innerHTML = gameboard[7];
        document.querySelector("#btn-nine").innerHTML = gameboard[8];
    }

    return {gameboard, add, draw_board};
}

function player(player, sign){
    let player_code = player;
    let mark = sign;

    return {player_code, mark};
}

function add_sign_comp(gb){
    let get_indexes = gb.gameboard.map((v, i) => i);
    let free_space = get_indexes.filter(i => gb.gameboard[i].localeCompare("") == 0);
    let length = free_space.length;
    let random_number = -1;
    if(length > 0){
        random_number = Math.floor((Math.random()*(length-1)));
    }
    return free_space[random_number];
}

function comp_round(gameBoard, comp_value){
    let indx = add_sign_comp(gameBoard);
    if(indx > -1){
        gameBoard.add(indx, comp_value);
    }
    gameBoard.draw_board();
}