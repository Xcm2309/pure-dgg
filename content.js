var chat_win_main = document.getElementById("chat-win-main");
var chat_lines = chat_win_main.childNodes[0];

chat_lines.addEventListener("DOMNodeInserted", function (e) {

    var chat_message = e.target;
    
    // Remove combo messages
    if (chat_message.classList.contains("msg-emote")) {
        chat_lines.removeChild(chat_message);
    } else {
        chat_message_text = chat_message.getElementsByClassName("text");
        for (var i = 0; i < chat_message_text.length; i++) {
            chat_message_emotes = chat_message_text[i].getElementsByClassName("emote");
            for (var emote_index = 0; emote_index < chat_message_emotes.length; emote_index++) {
                chat_message_text[i].removeChild(chat_message_emotes[emote_index]);
            }

            if (chat_message_text[i].childNodes.length == 0) {
                chat_lines.removeChild(chat_message);
            }
        }
    }

}, false);

