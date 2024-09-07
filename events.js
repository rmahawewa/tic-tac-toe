// var script = document.createElement('script');
// script.src = './script.js';
// document.body.appendChild(script);

let player1 = player("player one", "O");
let computer = player("computer", "X");

let start = proceed("#start-btn").get_element();
let reset = proceed("#reset-btn").get_element();
let get_user_button = proceed("#btn-get-usr").get_element();
let user_name = proceed("#user-name").get_element();
let get_symbols = proceed(".symbol").get_element_group();

let board_buttons = proceed(".board-btns").get_element_group();

let message_modal = proceed("#message").get_element();
let message = proceed("#view-msg").get_element();

start.addEventListener("click", function(){
    console.log("button clicked");
    player1.click_start();
    player1.focus_username_input();
});

get_user_button.addEventListener("click", function(){
    player1.player_code = player1.get_username_button_click();
    console.log(player1.player_code);
});

get_symbols.forEach((s) => {
    s.addEventListener("click", function(){
        player1.mark = player1.get_player_mark_button_click(s);
        console.log(player1.mark);
    });
})