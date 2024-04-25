var D = setTimeout(showalert,3000);
function showalert(){
  alert("Welcome to plz my channel kumar!");
}
const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-btn');

// Function to add a new message to the chat box
function addMessage(message, sender) {
  const messageElement = document.createElement('div');
  messageElement.textContent = `${sender}: ${message}`;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
}

// Function to handle sending a message
function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    addMessage(message, 'You');
    messageInput.value = '';
    // Here you would send the message to the server or perform any other necessary action
  }
}

// Event listener for the send button
sendButton.addEventListener('click', sendMessage);

// Event listener for pressing Enter key to send message
messageInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function reverseString(){
  var str = document.getElementById("reversTheName").value;
  var newString="";
  for(var i=str.length-1;i>=0;i--){
    newString += str[i];
  }
  document.getElementById("showData").value = newString;
}










var d = new Date();
document.write(d);
 function myfunc(){
  var userconfirmation = confirm(` Do you want to visit website
  `);
  if(userconfirmation == true){
  window.open("https://www.apnacollege.in/path-player?courseid=delta-batch-3&unit=657412d8d9181a8dd7095743Unit");
  return true;
  }else{
  document.write(`<h3 style= "color:red"> User doesnt want to visit on webpage`);
  return false;
  }
 }
 document.getElementById("thapa").style.color="red";
 document.getElementById("thapa").setAttribute("style","color:red; background-color:black; text-align:center;font-size:50px; height:160px;margin-top:10px;border-radius:30px")
function mydone(){
  window.print();
}
 
 var a = 20;
 var b = 40;
 var sum = a+b ;
 document.write(sum);
 function  myfun(){
  var choice = document.getElementById("choise").value;
  switch(choice){
case "add":var a = 10;
var b = 30;
var sum = a+b;
document.write("addition of two number is" +sum);
break;
case "Sub":var a = 10;
var b = 30;
var Sub = a-b;
document.write("subtraction of two number is" +Sub);
break;
case "Mult":var a = 10;
var b = 30;
var Mult = a*b;
document.write("multiplication of two number is" + Mult);
break;
case "Div":var a = 10;
var b = 30;
var Div = a+b;
document.write("divide of two number is" + Div);
break;
default:alert(`not a valid input`);
  }
 }
 document.write("<br>");
for (let i = 1; i <= 10; i++) {
  let result = 2 * i;
  document.write(`<span style= "color:blue">2 * ${i} = ${result}<br>`);
}

document.write("<br>");
for (let i = 1; i <= 10; i++) {
  let result = 3 * i;
  document.write(`<span style= "color:red">3 * ${i} = ${result}<br>`);
}
document.write("<hr>")
var i = 1;
do{
  document.write(i);
  i++;
  document.write("<br>");
}while(i<=20);
 function hello(){
  document.write("The will be entire screen will be renderise");
 }
  hello();
  sum(32,90);
  sum(80,332);
  sum(321,982);
  function sum(a , b){
    var add = a + b;
  document.write("The two number sum .is"+add+"<br>");
  }
  function twit(){
    document.body.style.backgroundColor ="#00aced";
    document.body.style.color = 'White';
  }
  function face(){
    document.body.style.backgroundColor ="#3b5999";
    document.body.style.color = 'White';
  }
  function whatsapp(){
    document.body.style.backgroundColor ="#25D366";
    document.body.style.color = 'White';
  }
  function yutube(){
    document.body.style.backgroundColor ="#dd1c1a";
    document.body.style.color = 'White';
  }
  var dateobj = new Date();
  var month  = dateobj.getUTCMonth()+1;
  var day  = dateobj.getUTCDate();
  var year  = dateobj.getUTCFullYear();
  document.write(year +":" +month+":"+day);
document.write("<br>");
var clock = setInterval(clocktiming,1000)
function clocktiming(){
var d = new Date();
var thapa = d.toLocaleTimeString();
document.getElementById('showclock').innerHTML = thapa;
}

//DOBARA SE PICHE KA RIVISION //

var aa = 30;
var bb = 10;
var sum = aa+bb;
document.write(sum);
function myfan(){
  var chois = document.getElementById("chois").value;
switch (chois){
  case "add" :
  var an = 20;
  var bc= 40;
  var sum = an+bc;
  document.write("addtiton of two number in sum" + sum);
  break;
  case "sub" :
    var an = 202;
    var bc= 40;
    var sum = an-bc;
    document.write("subtraction of two number in sub" + sub);
    break;
    case "mult" :
      var an = 20;
      var bc= 40;
      var sum = an*bc;
      document.write("multiple of two number in mul" + mult);
      break;
      default:alert("not a valid number exist")

}
}




  

 

