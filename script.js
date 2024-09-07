function proceed(element){
    this.element = element;
    const make_visible = () => {
        document.querySelector(element).setAttribute("style", "opacity: 1; z-index:1");
    }

    const make_invisible = () => {
        document.querySelector(element).setAttribute("style", "opacity: 0; z-index:-1000");
    }

    const make_focus = () => {
        document.querySelector(element).focus();
    }

    const add_content = (content) => {
        document.querySelector(element).innerHTML = content;
    }

    const change_value = (v) => {
        document.querySelector(element).value = v;
    }

    let get_value = () => {
        return (document.querySelector(element).value);
    }

    const get_element = () => {
        return (document.querySelector(element));
    }

    const get_element_group = () => {
        return (document.querySelectorAll(element));
    }

    const get_element_id = () => {
        return (element.id);
    }

    return {element, make_visible, make_invisible, make_focus, add_content, change_value, get_value, get_element, get_element_group, get_element_id};
}

function player(player, sign){
    let player_code = player;
    let mark = sign;
    let cnt = -1;

    const click_start = () => {
        const interface_get_user_name = proceed("#model-get-user");
        interface_get_user_name.make_visible();
    }

    const focus_username_input = () => {
        const user_name = proceed("#user-name");
        user_name.make_focus();
    }

    const get_username_button_click = () => {
        let user = proceed("#user-name").get_value();
        user = user.localeCompare("") === 0?"player one":user;
        const interface_get_user_name = proceed("#model-get-user");
        interface_get_user_name.make_invisible();
        const interface_select_symbol = proceed("#model-get-sign");
        interface_select_symbol.make_visible();
        return user;
    }

    const get_user_symbol = () => {
        let symbols = proceed(".symbol").get_element_group();
        return symbols;
    } 

    const get_player_data = () => {
        document.querySelector("#model-get-user").setAttribute("style","opacity: 1; z-index:1");
        let usr = document.querySelector("#user-name");
        usr.focus();     
    }

    const get_player_mark_button_click = (s) => {
        let mrk = proceed(s).get_element_id();
        const interface_select_symbol = proceed("#model-get-sign");
        interface_select_symbol.make_invisible();
        return mrk;
    }

    return {player_code, mark, cnt, get_player_data, click_start, focus_username_input, get_username_button_click, get_user_symbol, get_player_mark_button_click};
}