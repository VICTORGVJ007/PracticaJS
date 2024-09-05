// JavaScript source code
//Arrays
var frutas = ["Manzana", "Uva", "Pera", "Sandia", "Naranja", "Aguacate"];


for (var i = 0; i < frutas.length; i++) {

    document.getElementById("listaFrutas").innerHTML += "<li>" + frutas[i] + "</li>";

}

//Object
var persona = { nombre: "Juan", telefono: "89988787" };

//Lista de objetos
var contactos = [
    { nombre: "Juan", telefono: "8998-8787" },
    { nombre: "Carmen", telefono: "4556-5421" },
];
for (var i = 0; i < contactos.length; i++) {

    document.getElementById("listaContactos").innerHTML += "<li>" + contactos[i].nombre + ": " + contactos[i].telefono + "</li>";
    console.log(contactos[i]);

}