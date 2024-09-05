document.addEventListener('DOMContentLoaded', () => {
    // Lista de vegetales
    var vegetales = [
        { nombre: "Tomate" },
        { nombre: "Pepino" },
        { nombre: "Cebolla" },
        { nombre: "Zanahoria" },
        { nombre: "Calabaza" },
        { nombre: "Pimiento" },
        { nombre: "Cebolla roja" },
        { nombre: "Ajo" },
        { nombre: "Espinaca" },
        { nombre: "Lechuga" },
        { nombre: "Rabano" },

    ];

    var listaVegetales = document.getElementById("listaVegetales");

    vegetales.forEach(vegetal => {
        var row = listaVegetales.insertRow();
        var cellNombre = row.insertCell();

        cellNombre.textContent = vegetal.nombre;
    });

    // Lista de no vegetales
    var noVegetales = [
        { nombre: "Carne" },
        { nombre: "Pescado" },
        { nombre: "Huevo" },
        { nombre: "Pollo" },
        { nombre: "Ternera" },
        { nombre: "Cerdo" },
        { nombre: "Cordero" },
        { nombre: "Langostino" },
        { nombre: "Gamba" },
        { nombre: "Tortuga" },
        { nombre: "Cangrejo" },
    ];

    var listaNoVegetales = document.getElementById("listaNoVegetales");

    noVegetales.forEach(noVegetal => {
        var row = listaNoVegetales.insertRow();
        var cellNombre = row.insertCell();

        cellNombre.textContent = noVegetal.nombre;
    });
});
