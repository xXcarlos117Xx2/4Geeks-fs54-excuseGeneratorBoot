/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  ///////////////////////////////////////////////////////////////////////////////
  //                                                                           //
  //                                 Funciones                                 //
  //                                                                           //
  ///////////////////////////////////////////////////////////////////////////////

  //Funcion para escoger elemento aleatorio dentro del array

  const elementoAleatorio = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  ///////////////////////////////////////////////////////////////////////////////
  //  Objeto con los "array" dentro, cada uno con los valores de las excusas.  //
  //                                                                           //
  //                     objeto {etiqueta : valor}                             //
  ///////////////////////////////////////////////////////////////////////////////

  const excuses = {
    who: ["The dog", "My grandma", "His turtle", "My bird"],
    action: ["ate", "peed", "crushed", "broke"],
    what: ["my homework", "the keys", "the car"],
    when: ["before the class", "right on time", "when I finished", "during my lunch", "while I was praying"]
  };

  ///////////////////////////////////////////////////////////////////////////////
  //                                                                           //
  //                                 Programa                                  //
  //                                                                           //
  ///////////////////////////////////////////////////////////////////////////////

  //1. Pedimos al documento el id "excuse" y le editamos el HTML interior ==> "document.getElementById("excuse").innerHTML"
  //Usamos la función "Object.values()" para que nos devuelva el objeto como un array. ==> Object.values(excuses)
  //Usamos el ".map" para escoger un elemento de cada uno junto con la funcion de "elementoAleatorio". ==> .map(elementoAleatorio)
  //Usamos ".join" para que junte todos los valores con espacios entre cada uno. ==> .join(" ")
  //Todo esto se manda al HTML al elemento "excuse" que ya ha sido previamente formateado con Bootstrap.

  document.getElementById("excuse").innerHTML = Object.values(excuses).map(elementoAleatorio).join(" ");
};
