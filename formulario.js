//variables 
var Btnenviar = document.getElementById("Btnenviar");

var botonBorrar = document.createElement("button");
var corteLinea = document.createElement("br");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);


//lista
var lista = document.getElementById("lista-de-invitados");

var elementoLista = document.createElement("div");
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")

Btnenviar.onsubmit = function(e) {
  e.preventDefault ();
  
  var n = Btnenviar.elements[0]
  var e = Btnenviar.elements[1]
  var na = Btnenviar.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }


  elementoLista.classList.added("elemento-lista")
  lista.appendChild(elementoLista)


  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  
}

function crearElemento(descripcion, valor) {
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

}


 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
    
  }
