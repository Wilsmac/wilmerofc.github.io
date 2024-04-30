function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    document.getElementById("chat-box").innerHTML += "<p><strong>Tú:</strong> " + userInput + "</p>";
    document.getElementById("user-input").value = "";
}
