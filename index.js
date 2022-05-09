/*let count = 0
function increment(){
  count = count + 1
  console.log(count)

}
let countEl = document.getElementById("count-el")
console.log(countEl)

function increment(){
  count = count + 1
  countEl.innerText = count
  
}
function save(){
  count = 0
  countEl.innerText = count
  console.log(save)
}

function fruit(){
var fruitsName = prompt('orange');
document.getElementById('fruit-btn')
}
*/

/*
let click = 0
function fruit(){
  click = click + 1
  console.log(click)

}
let fruitsName = document.getElementById("fruits-name")
console.log(fruitsName)

function fruit(){
  click = click + 1
  fruitsName.innerText = click
  
}
function save(){
  click = 0
  fruitsName.innerText = click
  console.log(save)
}
*/
/*let click = 0
function fruit() {
  console.log(click)
  
  
}

let fruitsName = document.getElementById("fruits-name")
console.log(fruitsName)

function fruit(){
  click = click + click 
fruitsName.innerText = "pear"

}

*/
/*
function fruit() {
  console.log('orange')
  console.log("pear")
  console.log("grape")
  console.log("cucumba")
}
  fruit()
*/

/*function dog(){
  console.log(42)
 
}
dog()
*/

  /*let lap1 = 34
  let lap2 = 33
  let lap3 = 36
function sum(){
  console.log(lap1 + lap2 + lap3)
}
sum()
*/

/*let count = 0
function logger(){
  count=count + 1
console.log(count)

}
logger()
*/
//let userName = "per"
//let message = "You have three new notification"
//let messageToUser = message + ", " + userName + "! "
//console.log(messageToUser)

//let name = "john"
//let greetings = "Hi, my name is "
//let myGreeting = greetings + name
//console.log(myGreeting)

//let welcomeEl = document.getElementById("welcome-el")
//let nick = "Donatus ibor"
//let greeting = "welcome back "
//let myGreeting = greeting + nick
//console.log(myGreeting)
//welcomeEl.innerText = greeting + nick




let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
console.log(countEl)
count = 0
function increment() {
count += 1
countEl.innerText=count
}
function save(){
  let click = count + "- "
  saveEl.textContent += click
  console.log(click)
  countEl.innerText = 0
  count = 0
}

//let errorParagraph=getElementById("error")
//console.log(errorParagraph)

//function purchase() {
//  console.log("clicked")
//}
//let firstName = "Donatus"
//let lastName= " Ibor"
//let fullName = firstName + lastName
//console.log(fullName)
/*
let name ="Linda"
let greeting = "Hi there"
function greetLinda(){
  console.log(greeting + " ," + name +"!")
}
greetLinda()
*/
let myPoints = 3
function add3Points(){
  myPoints+=3
 
}


function remove1Point(){
myPoints -= 1

}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log(myPoints)