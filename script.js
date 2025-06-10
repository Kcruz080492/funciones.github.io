function verificarEdad() {
    const edad = parseInt(prompt("Ingrese su edad:"));
    const mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
    alert(mensaje);
}

function calcularNotaFinal() {
    const nombre = prompt("Nombre del alumno:");
    const carnet = prompt("Carnet:");
    const examen = parseFloat(prompt("Nota de Examen (0-10):"));
    const tareas = parseFloat(prompt("Nota de Tareas (0-10):"));
    const asistencia = parseFloat(prompt("Nota de Asistencia (0-10):"));
    const investigacion = parseFloat(prompt("Nota de Investigación (0-10):"));
    const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    alert(`Nombre: ${nombre}\nCarnet: ${carnet}\nNota final: ${notaFinal.toFixed(2)}`);
}

function calcularAumento() {
    const nombre = prompt("Nombre del empleado:");
    const salario = parseFloat(prompt("Salario actual:"));
    const categoria = prompt("Categoría (A, B, C):").toUpperCase();
    let aumento;

    switch (categoria) {
        case 'A':
            aumento = salario * 0.1;
            break;
        case 'B':
            aumento = salario * 0.15;
            break;
        case 'C':
            aumento = salario * 0.2;
            break;
        default:
            alert("Categoría no válida");
            return;
    }

    const nuevoSalario = salario + aumento;
    alert(`Nombre: ${nombre}\nAumento: $${aumento.toFixed(2)}\nNuevo Salario: $${nuevoSalario.toFixed(2)}`);
}

function encontrarMayor() {
    const num1 = parseInt(prompt("Ingrese el primer número:"));
    const num2 = parseInt(prompt("Ingrese el segundo número:"));
    const mayor = (num1 > num2) ? num1 : num2;
    alert(`El número mayor es: ${mayor}`);
}

function calcularDescuentoCoche() {
    const coche = prompt("Modelo del coche (FORD FIESTA, FORD FOCUS, FORD ESCAPE):").toUpperCase();
    const monto = parseFloat(prompt("Precio del coche:"));
    let descuento = 0;

    switch (coche) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.1;
            break;
        case 'FORD ESCAPE':
            descuento = 0.2;
            break;
        default:
            alert("Modelo no válido");
            return;
    }

    const precioFinal = monto - (monto * descuento);
    alert(`Modelo: ${coche}\nDescuento: ${descuento * 100}%\nPrecio final: $${precioFinal.toFixed(2)}`);
}

function calcularDescuentoViaje() {
    const origen = "PALMA";
    const destinoInput = prompt("Su origen es Ciudad Palma, ingrese el destino del viaje: (LA COSTA DEL SOL, PANCHIMALCO, PUERTO EL TRIUNFO)").toUpperCase();
    const monto = parseFloat(prompt("Precio del viaje:"));
    let descuento = 0;
    if (origen === "PALMA") {
        switch (destinoInput) {
            case "LA COSTA DEL SOL":
                descuento = 0.05;
                break;
            case "PANCHIMALCO":
                descuento = 0.1;
                break;
            case "PUERTO EL TRIUNFO":
                descuento = 0.15;
                break;
            default:
                return "Destino no encontrado";
        }
    }
    const venta = monto - (monto * descuento);
    alert(`Origen: Ciudad Palma, Destino: ${destinoInput}, Monto: $${monto}, Descuento: ${descuento * 100}%, Precio final: $${venta}`);
}

function analizarValores() {
    const valores = [];
    for (let i = 0; i < 10; i++) {
        const valor = parseInt(prompt(`Ingrese el valor ${i + 1}:`));
        valores.push(valor);
    }

    let negativos = 0;
    let positivos = 0;
    let multiplosDe15 = 0;
    let sumaPares = 0;

    for (let valor of valores) {
        if (valor < 0) {
            negativos++;
        } else if (valor > 0) {
            positivos++;
        }
        if (valor % 15 === 0) {
            multiplosDe15++;
        }
        if (valor % 2 === 0) {
            sumaPares += valor;
        }
    }

    alert(`Negativos: ${negativos}, Positivos: ${positivos}, Múltiplos de 15: ${multiplosDe15}, Suma de Pares: ${sumaPares}`);
}

function tablaMultiplicar() {
    const numero = parseInt(prompt("Ingrese un número:"));
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

function convertirTemperatura() {
    const celsius = parseFloat(prompt("Ingrese la temperatura en Celsius:"));
    const fahrenheit = (celsius * 9/5) + 32;
    let mensaje;

    if (fahrenheit >= 14 && fahrenheit < 32) {
        mensaje = "Temperatura baja";
    } else if (fahrenheit >= 32 && fahrenheit < 68) {
        mensaje = "Temperatura adecuada";
    } else if (fahrenheit >= 68 && fahrenheit < 96) {
        mensaje = "Temperatura alta";
    } else {
        mensaje = "Temperatura desconocida";
    }

    alert(`Temperatura en Fahrenheit: ${fahrenheit.toFixed(2)}°F\n${mensaje}`);
}

function generarInputs(turno, cantidad) {
  const contenedor = document.getElementById(turno);
  for (let i = 0; i < cantidad; i++) {
    const input = document.createElement("input");
    input.type = "number";
    input.className = `edad-${turno}`;
    input.required = true;
    contenedor.appendChild(input);
  }
}

// Llama a esta función al cargar la página
window.addEventListener("DOMContentLoaded", () => {
  generarInputs("mañana", 5);
  generarInputs("tarde", 6);
  generarInputs("noche", 11);
});

function procesarPromedios() {
  const obtenerValores = (selector) => {
    return Array.from(document.querySelectorAll(selector))
      .map(i => parseInt(i.value))
      .filter(num => !isNaN(num));
  };

  const promedio = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  const edadesM = obtenerValores(".edad-mañana");
  const edadesT = obtenerValores(".edad-tarde");
  const edadesN = obtenerValores(".edad-noche");

  if (edadesM.length !== 5 || edadesT.length !== 6 || edadesN.length !== 11) {
    alert("Por favor completa todas las edades correctamente.");
    return;
  }

  const promM = promedio(edadesM);
  const promT = promedio(edadesT);
  const promN = promedio(edadesN);

  let turnoMayor = "mañana";
  let mayor = promM;

  if (promT > mayor) {
    mayor = promT;
    turnoMayor = "tarde";
  }

  if (promN > mayor) {
    turnoMayor = "noche";
  }

document.getElementById("resultado-mañana").textContent = `Promedio turno mañana: ${promM.toFixed(2)}`;
document.getElementById("resultado-tarde").textContent = `Promedio turno tarde: ${promT.toFixed(2)}`;
document.getElementById("resultado-noche").textContent = `Promedio turno noche: ${promN.toFixed(2)}`;
document.getElementById("turno-mayor").textContent = `Turno con mayor promedio: ${turnoMayor} (${mayor.toFixed(2)})`;
document.getElementById("resultado").style.display = "block";
}   