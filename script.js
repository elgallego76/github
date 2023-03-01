
alert ("Bienvenido a mi CV");

document.getElementById("boton1").onclick = function diayhora() {
    document.getElementById("demo").innerHTML = Date ();
}

document.getElementById("boton").onclick = function Cartelok() {
    alert ("Formulario completado ok");
}

document.addEventListener('DOMContentLoaded', function(){
    let formulario = document.getElementById('formul');
    formulario.addEventListener('submit', function() {
      formulario.reset();
    });
  });