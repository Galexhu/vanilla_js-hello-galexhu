import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pajaro'];
let action = ['se comio', 'hizo pis', 'aplasto', 'rompio'];
let what = ['mis deberes', 'mi telefono', 'el coche'];
let when = ['antes de clase', 'mientras dormia', 'mientras hacia ejercicio', 'durante mi merienda', 'mientras estaba rezando'];

function getRandomNumber(a,b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray) {
  let max = anyArray.length;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when);
};
