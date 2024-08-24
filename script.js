// Variable que almacenará el texto escrito en el espacio de texto
let textArea = document.querySelector(".espacio-texto");

// Variable que almacenará el texto ya encriptado en el espacio de lectura
let mensajeLectura = document.querySelector(".espacio-lectura");

// Función para validar la entrada del textarea
function validarTexto(event) {
    // Obtiene el valor actual del textarea
    let valor = event.target.value;

    // Compara el valor original con el valor filtrado
    let valorFiltrado = valor.replace(/[^a-z\s]/g, '');

    // Si se eliminó algo, muestra una alerta
    if (valor !== valorFiltrado) {
        alert("Solo se permiten letras minúsculas y espacios.");
    }

    // Asigna el valor filtrado de vuelta al textarea
    event.target.value = valorFiltrado;
}

// Escucha el evento input y ejecuta la función validarTexto
textArea.addEventListener("input", validarTexto);

/*
La letra "e" es convertida a "enter"
La letra "i" es convertida a "imes"
La letra "a" es convertida a "ai"
La letra "o" es convertida a "ober"
La letra "u" es convertida a "ufat"
*/

function btnEncriptar() {
    // Encripta el texto ingresado en el textArea y lo asigna al espacio de lectura
    let textoEncriptado = encriptar(textArea.value);
    mensajeLectura.value = textoEncriptado;
    textArea.value = ""; // Limpia el campo de texto
    mensajeLectura.style.backgroundImage = "none"; // Remueve la imagen de fondo
}

function btnDesencriptar() {
    // Desencripta el texto ingresado en el textArea y lo asigna al espacio de lectura
    let textoEncriptado = desencriptar(textArea.value);
    mensajeLectura.value = textoEncriptado;
    textArea.value = ""; // Limpia el campo de texto
}

function encriptar(stringEncriptado) {
    // Matriz que contiene los caracteres a encriptar y su correspondiente valor encriptado
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    // Convierte el texto a minúsculas
    stringEncriptado = stringEncriptado.toLowerCase();

    // Reemplaza cada carácter según la matrizCodigo
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    // Retorna el texto encriptado
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    // Matriz que contiene los caracteres a desencriptar y su correspondiente valor encriptado
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    // Convierte el texto a minúsculas
    stringDesencriptado = stringDesencriptado.toLowerCase();

    // Reemplaza cada carácter según la matrizCodigo
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    // Retorna el texto desencriptado
    return stringDesencriptado;
}

function copiarTexto() {
    let textoCopiar = document.querySelector(".espacio-lectura").value;
    navigator.clipboard.writeText(textoCopiar)
        .then(() => {
            alert("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar: ", err);
        });
}


