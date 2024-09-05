// JavaScript source code
var contactos = [
    { nombre: "Luis", telefono: "01234567" },
    { nombre: "Carmen", telefono: "12345678" }
];

console.log(contactos);

for (var i = 0; i < contactos.length; i++) {
    var html = "<tr>";
    html += "       <td>" + contactos[i].nombre + "</td>";
    html += "       <td>" + contactos[i].telefono + "</td>";
    html += "</tr>";

    document.getElementById("tbodyContactos").innerHTML += html;
}