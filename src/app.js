/* eslint-disable */
// Aqui teneis mi Magnus Opus
// El codigo esta hecho complicado a proposito. Mas abajo teneis la version simplificada
// Si quereis lo repito sin "bromas", pero siempre viene bien reirse un rato...
import "bootstrap";
import "./style.css";
window.onload = function() {
  const excuses = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ]
  };
  let result = "";
  for (let i = 0; i < Object.keys(excuses).length; i++) {
    result +=
      excuses[Object.keys(excuses)[i]][
        Math.floor(Math.random() * excuses[Object.keys(excuses)[i]].length)
      ];
    if (i < Object.keys(excuses).length - 1) {
      result += " ";
    }
  }
  document.getElementById("excuse").innerHTML = result;
};
/*
O puedes utilizar esto...

Version simplificada:
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const result = Object.values(excuses)
      .map(getRandomElement)
      .join(" ");
    document.getElementById("excuse").innerHTML = result;

*/
