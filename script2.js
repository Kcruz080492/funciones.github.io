//1- Crear una función que en base a la edad que ingreso el usuario devolver un
// mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.
function verificarEdad(edad) {
    return (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
}
console.log(verificarEdad(20)); // Eres mayor de edad

/*2- Crear una función que determine la nota final de un alumno, la cual depende
de lo siguiente:
• Examen =20%
• tareas = 40%
• asistencia = 10%
• investigación = 30%
Al final deberá mostrar los datos del alumno, nombre, carnet y nota final.
*/

function calcularNotaFinal(nombre, carnet, examen, tareas, asistencia, investigacion) {
    const notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
    return `Nombre: ${nombre}, Carnet: ${carnet}, Nota Final: ${notaFinal}`;
}

console.log(calcularNotaFinal("Karla Cruz", "M20220056", 5, 9, 8, 9));

/*3- Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
aumento. Deberá demostrar los datos del empleado y el aumento salarial.*/
function calcularAumento(nombre, salario, categoria) {
    let aumento;
    switch (categoria) {
        case 'A':
            aumento = salario * 0.1; // 10%
            break;
        case 'B':
            aumento = salario * 0.15; // 15%
            break;
        case 'C':
            aumento = salario * 0.2; // 20%
            break;
        default:
            aumento = 0; // Sin aumento
    }
    const nuevoSalario = salario + aumento;
    return `Nombre: ${nombre}, Salario Actual: ${salario}, Aumento: ${aumento}, Nuevo Salario: ${nuevoSalario}`;
}

console.log(calcularAumento("Amadeo González", 50000, "B"));

/*4- Crear una función que en base a 2 números enteros que ingrese el usuario,
calcular cual número es el mayor y devolverlo.*/
function encontrarMayor(num1, num2) {
    return (num1 > num2) ? num1 : num2;
}
console.log(encontrarMayor(10, 20)); // 20

/*5- Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.*/

function calcularDescuento(coche, monto) {
    let descuento = 0;
    switch (coche) {
        case 'FORD FIESTA':
            descuento = 0.05;
            break;
        case 'FORD FOCUS':
            descuento = 0.1;
            break;
        case 'FORD ESCAPE':
            descuento = 0.2; // 20%
            break;
        default:
            return "Carro no encontrado";
    }
    const venta = monto - (monto * descuento);
    return `Tipo de carro: ${coche}, Monto: ${monto}, Descuento: ${descuento * 100}%, Precio final: ${venta}`;
}
console.log(calcularDescuento('FORD FIESTA', 17000))

/*6- Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.*/

function calcularDescuentoViaje(origen, destino, monto) {
    let descuento = 0;
    if (origen === "Palma") {
        switch (destino) {
            case "La costa del Sol":
                descuento = 0.05;
                break;
            case "Panchimalco":
                descuento = 0.1;
                break;
            case "Puerto el Triunfo":
                descuento = 0.15;
                break;
            default:
                return "Destino no encontrado";
        }
    }
    const venta = monto - (monto * descuento);
    return `Origen: ${origen}, Destino: ${destino}, Monto: ${monto}, Descuento: ${descuento * 100}%, Precio final: ${venta}`;
}
console.log(calcularDescuentoViaje("Palma", "La costa del Sol", 200));

/*7- Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.*/
function analizarValores(valores) {
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

    return {
        negativos,
        positivos,
        multiplosDe15,
        sumaPares
    };
}
const resultados = analizarValores([-5, 10, 15, -3, 30, 22, 0, -8, 45, 60]);
console.log(`Negativos: ${resultados.negativos}, 
    Positivos: ${resultados.positivos}, 
    Múltiplos de 15: ${resultados.multiplosDe15}, 
    Suma de Pares: ${resultados.sumaPares}`);

/*8-Escribir un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.*/
function mostrarTablaMultiplicar(numero) {
    let tabla = "";
    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }
    return tabla;
}
console.log(mostrarTablaMultiplicar(5));

/*9- Crear programa donde se introduce una temperatura en Celsius y salga el resultado en
Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
• Si ºF está entre 14 y 32, sale la frase “Temperatura baja”
• Si ºF está entre 32 y 68, sale la frase “Temperatura adecuada”
• Si ºF está entre 68 y 96, sale la frase “Temperatura alta”
• Si no está entre ningún caso anterior la frase “Temperatura desconocida”*/
function convertirCelsiusAFahrenheit(celsius) {
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

    return `Temperatura en Fahrenheit: ${fahrenheit}, ${mensaje}`;
}
console.log(convertirCelsiusAFahrenheit(20)); // Temperatura en Fahrenheit: 68, Temperatura alta
