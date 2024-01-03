let colorActual = "brown"

for (let i = 0; i < 256; i++) {
    let bloque = document.createElement("div")
    bloque.className = "bloque"
    document.getElementById("contenedor").appendChild(bloque)
    bloque.onclick = cambiar
}

function colors (color) {
    colorActual = color
}

function cambiar (n) {
    n.target.style.backgroundColor = colorActual
}