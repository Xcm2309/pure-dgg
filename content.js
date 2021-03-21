var chat_win_main = document.getElementById("chat-win-main");
var chat_lines = chat_win_main.childNodes[0];

function remove_emotes_from_message(chat_message)
{
    chat_message_text = chat_message.getElementsByClassName("text");
    for (var text_index = 0; text_index < chat_message_text.length; text_index++)
    {
        chat_message_emotes = chat_message_text[text_index].getElementsByClassName("emote");
        var num_emotes = chat_message_emotes.length;
        var hasEmote = num_emotes != 0;
        for (var emote_index = num_emotes - 1; emote_index >= 0; emote_index--) {
            chat_message_emotes[emote_index].remove();
        }

        if (hasEmote) {
            console.log(chat_message_text[text_index].textContent);
            if (chat_message_text[text_index].textContent == " 7") {
                console.log("salute detected");
                chat_message.remove();
            }
        }
    }
}

function remove_empty_messages(chat_message) {

    chat_message_text = chat_message.getElementsByClassName("text");
    if (chat_message_text[0].textContent == "") {
        chat_message.remove();
    }
}

chat_lines.addEventListener("DOMNodeInserted", function (e) {

    var chat_message = e.target;
    if (chat_message.classList.contains("msg-chat")) {
        remove_emotes_from_message(chat_message);
        remove_empty_messages(chat_message);
    }
}, false);

