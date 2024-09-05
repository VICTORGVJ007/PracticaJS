document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("calcular").onclick = function () {
        const nota1 = parseFloat(document.getElementById("nota1").value) || 0;
        const nota2 = parseFloat(document.getElementById("nota2").value) || 0;
        const nota3 = parseFloat(document.getElementById("nota3").value) || 0;

        // Verificar si al menos una nota fue ingresada
        if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            document.getElementById("resultado").innerText = "Por favor, ingrese todas las notas.";
            return;
        }

        const promedio = (nota1 + nota2 + nota3) / 3;
        document.getElementById("resultado").innerText = "El promedio es: " + promedio.toFixed(2);
    };

    document.getElementById("cancelar").onclick = function () {
        document.getElementById("nota1").value = '';
        document.getElementById("nota2").value = '';
        document.getElementById("nota3").value = '';
        document.getElementById("resultado").innerText = '';
    };
});
