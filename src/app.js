/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The mecanic", "My uncle", "The dog", "My sister", "The grandpa"];

  let action = ["make ", "go", "eat", "peed", "broke"];

  let what = ["the car", "my homework", "biscuits", "spain", "the tv"];

  let when = [
    "today.",
    "before the exam.",
    "after the party.",
    "in vacations.",
    "yesterday."
  ];

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  document.querySelector("#excuse").innerHTML =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
};
