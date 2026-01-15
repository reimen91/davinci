"use strict";

const nombre=prompt("Ingrese su nombre:");
const apellido= prompt("Ingrese su apellido:");
const edad= parseInt(prompt("Ingrese su edad"));
const telefono = prompt("Ingrese su telefono")
const respuesta = confirm("¿Te gusta la escuela?");


let contenido='';
contenido += `<ul>`;
contenido += `<li> Nombre: ${nombre} </li>`;
contenido += `<li> Apellido: ${apellido} </li>`;
contenido += `<li> Edad: ${edad} </li>`;
contenido += `<li> ¿Te gusta la escuela?: ${respuesta} </li>`;
contenido += `<li> Edad: ${telefono} </li>`;
contenido += `</ul>`;
document.writeln(contenido);


//alert("Hola, me llamo " + nombre + ' ' + apellido + ' y tengo ' + edad);