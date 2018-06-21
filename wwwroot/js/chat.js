// The following sample code uses modern ECMAScript 6 features 
// that aren't supported in Internet Explorer 11.
// To convert the sample for environments that do not support ECMAScript 6, 
// such as Internet Explorer 11, use a transpiler such as 
// Babel at http://babeljs.io/. 
//
// See Es5-chat.js for a Babel transpiled version of the following code:

const connection = new signalR.HubConnection(
    "/ChatHub",
    { logger: signalR.LogLevel.Information });

connection.on("ReceiveMessage", (user, message) => {
    const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const encodedMsg = user + " says " + msg;
    const li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
});

connection.on("ReceiveMessage", (user, message) => {
    const msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const encodedMsg = user + " says " + msg;
const li = document.createElement("li");
li.textContent = encodedMsg;
document.getElementById("messagesList").appendChild(li);
});



connection.on("ReceiveList", (SignalRUsers) => {
    const msg = SignalRUsers.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
//const encodedMsg = user + " says " + msg;
// /*const li = document.createElement("li");
// li.textContent = encodedMsg;
// document.getElementById("messagesList").appendChild(li);*/
});



connection.start().catch(err => console.error(err.toString()));

document.getElementById("sendButton").addEventListener("click", event => {
    const user = document.getElementById("userInput").value;
    const message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
connection.invoke("SendList").catch(err => console.error(err.toString()));
  //var result = connection.invoke("SendMessage", user, message).catch(err => console.error(err.toString()));
    
    event.preventDefault();
});