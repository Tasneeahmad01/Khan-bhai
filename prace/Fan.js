let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});
ul.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("delete");
    }
});
let deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach(function(button) {
    button.style.backgroundColor = "red";
    button.style.color = "white";
});
function getbmivalue(){
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    height = height *12;
    height = height * 0.025;
    var newbmivalue = weight /
    (Math.pow(height,2));
    newbmivalue = Math.round(newbmivalue);
    document.getElementById("bmivalue").value = newbmivalue
    }
 var child = document.body.children;
 console.log(child)

 var para = document.createElement("p");
 var textNode = document.createTextNode("This is my contact for ius");
 para.appendChild(textNode);
 console.log(para);
 var list = document.querySelector ("ul");
 console.log(list);
 console.log(list.firstChild);

 ludogame = () => {
    const play1 = Math.floor(Math.random() * 6) + 1;
    const play1dice = `assets/dice ${play1}.png`;
    document.getElementById("check1").setAttribute('src', play1dice);

    const play2 = Math.floor(Math.random() * 6) + 1;
    const play2dice = `assets/dice${play2}.png`;
    document.getElementById("check2").setAttribute('src', play2dice);

    if (play1 > play2) {
        document.querySelector("h1").innerHTML = "Player 1 won :)";
    } else if (play1 < play2) {
        document.querySelector("h1").innerHTML = "Player 2 won :)";
    } else {
        document.querySelector('h1').innerHTML = "DRAW";
    }
}
//vs//
let database = [{
    username: "Vinod",
    password: "thapa",
}];
let status = [{
        name: "Thecnical",
        status: "I want 50k subscribe",
    },
    {
        name: "thapa",
        status: "I will helpline",
    }
];
const username = prompt("Enter the username");
const password = prompt("Enter the password");
const login = (user, pass) => {
    if (user === database[0].username && pass === database[0].password) {
        for(let value of status){
        console.log(value);    
        }
    } else {
       alert("Username or password is incorrect");
    }
}
login(username, password);
 "use Strict";
function sum(a,b){
  var add = a+b;
  console.log(add);  
}
sum(10,10)
//SIMONSAYS GAMES JAVASCRIPT//

