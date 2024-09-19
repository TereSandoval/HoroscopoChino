function calcularSigno() {
    let año = document.getElementById("año").value;

    if (!año) {
        document.getElementById("signo").innerHTML = "Por favor, introduce un año válido.";
        document.getElementById("imagen-signo").style.display = "none";
        return;
    }

    // Calcula el resto de la división por 12
    let resto = año % 12;

    // Array de signos con imágenes correspondientes desde la carpeta ./IMG
    let signos = [
        { nombre: "Mono", imagen: "./IMG/mono.jpeg" },
        { nombre: "Gallo", imagen: "./IMG/gallo.jpeg" },
        { nombre: "Perro", imagen: "./IMG/perro.jpeg" },
        { nombre: "Cerdo", imagen: "./IMG/cerdo.jpeg" },
        { nombre: "Rata", imagen: "./IMG/rata.jpeg" },
        { nombre: "Buey", imagen: "./IMG/buey.jpeg" },
        { nombre: "Tigre", imagen: "./IMG/tigre.jpeg" },
        { nombre: "Conejo", imagen: "./IMG/conejo.jpeg" },
        { nombre: "Dragón", imagen: "./IMG/dragon.jpeg" },
        { nombre: "Serpiente", imagen: "./IMG/serpiente.jpeg" },
        { nombre: "Caballo", imagen: "./IMG/caballo.jpeg" },
        { nombre: "Cabra", imagen: "./IMG/cabra.jpeg" }
    ];

    // Selecciona el signo basado en el resto
    let signo = signos[resto];

    // Muestra el residuo, signo y la imagen correspondiente en sus artículos respectivos
    document.getElementById("residuo").innerHTML = `Residuo de la división: ${resto}`;
    document.getElementById("signo").innerHTML = `Tu signo es: ${signo.nombre}`;
    
    let imagen = document.getElementById("imagen-signo");
    imagen.src = signo.imagen;
    imagen.style.display = "block";
}
