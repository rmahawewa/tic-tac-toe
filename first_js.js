let count = 0;
let gameBoard = game_board();
let player1 = "";
let player2 = "";
let player_name = "player one";
let player_symbol = "O";
let btn_start = document.querySelector("#start-btn");

let new_gb = btn_start.addEventListener("click", function(){   
    count = 0;
    
    gameBoard.reset_gameboard();
    gameBoard.draw_board();

    player1 = player("You", player_symbol);
    player1.get_player_data();

    setTimeout(() => {
        document.querySelector("#user-name").value = "";
        document.querySelector("#model-get-user").setAttribute("style","opacity: 0; z-index:-1000");
        document.querySelector("#model-get-sign").setAttribute("style","opacity: 0; z-index:-1000");

        player1.player_code = player_name;
        player1.mark = player_symbol;
        console.log(player1.player_code);
        console.log(player1.mark);
        let comp_value = (player1.mark.localeCompare("X") === 0)?"O":"X";
        player2 = player("Computer", comp_value);
        let msg_modal = document.querySelector("#message");
        let view_msg = document.querySelector("#view-msg");
        
        if(player1.mark.localeCompare("X") === 0){
            player1.cnt = 0;
            player2.cnt = 1;
            view_msg.innerHTML = player1.player_code + " begins";
            msg_modal.setAttribute("style", "opacity:1; z-index:1");
            setTimeout(() => {
                view_msg.innerHTML = "";
                msg_modal.setAttribute("style", "opacity:0; z-index:-1");
            }, 2000);
        }else{
            player1.cnt = 1;
            player2.cnt = 0;
            view_msg.innerHTML = player2.player_code + " begins";
            msg_modal.setAttribute("style", "opacity:1; z-index:1");
            setTimeout(() => {
                view_msg.innerHTML = "";
                msg_modal.setAttribute("style", "opacity:0; z-index:-1");
            }, 2000);            
            comp_round(gameBoard, comp_value);
            count++;
        }
    }, 10000);
    
    
});

let board_btns = document.querySelectorAll(".board-btns");

board_btns.forEach((btn) => 
    btn.addEventListener("click", function(){
    const indx = btn.value;
    const btn_dsply = btn.innerHTML;
    //alert(btn_dsply);
    if(player1.player_code !== undefined && count%2 === player1.cnt && count < 9 && btn_dsply.localeCompare("") === 0){
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
    let gameboard = ["", "", "", "", "", "", "", "", ""];
    let gb = [10, 10, 10, 10, 10, 10, 10, 10, 10]

    const reset_gameboard = () => {
        gameboard.forEach((v,i) => gameboard[i] = "");
        gb.forEach((v,i) => gb[i] = 10);
    }

    const add = (index, sign) => {
        gameboard[index] = sign;
        gb[index] = sign.localeCompare("X") === 0?1:-1;
        console.log(gb);
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

    return {gameboard, add, draw_board, reset_gameboard};
}

function player(player, sign){
    let player_code = player;
    let mark = sign;
    let cnt = -1;

    const get_player_data = () => {
        document.querySelector("#model-get-user").setAttribute("style","opacity: 1; z-index:1");
        let usr = document.querySelector("#user-name");
        usr.focus();     
    }

    return {player_code, mark, cnt, get_player_data};
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
        console.log("test");
        gameBoard.add(indx, comp_value);
    }
    console.log(gameBoard.gameboard);
    gameBoard.draw_board();
}

const plyr = document.querySelector("#btn-get-usr");
 plyr.addEventListener("click",() => {
    let usr_name = document.querySelector("#user-name");
    player_name = usr_name.value;
    if(player_name.localeCompare("") !== 0){
        player_name = "player " + player_name;        
    }else{
        player_name = "player one"
    }
    document.querySelector("#user-name").value = "";
    document.querySelector("#model-get-user").setAttribute("style","opacity: 0; z-index:-1000");
    document.querySelector("#model-get-sign").setAttribute("style","opacity: 1; z-index:1");
});

let sym = document.querySelectorAll(".symbol");

sym.forEach((s) => 
    s.addEventListener("click", function(){
        player_symbol = this.id;
        // let other = player_symbol.localeCompare("X") === 0?"O":"X";
        // document.querySelector("#" + other).setAttribute("disabled","true");
    })
);

