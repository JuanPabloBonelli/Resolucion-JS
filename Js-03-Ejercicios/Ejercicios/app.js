// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución 

let numeros = [12, 20, 33, 1, 8, 6, 57, 78, 19, 13, 22]; //Arreglo con numeros enteros

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    
    if (numero % 2 === 0) {  // Si el numero al dividirse por dos da como resultado un numero entero, entonces es par
        console.log(`El número ${numero} es par`);
    } else {
        console.log(`El número ${numero} es impar`);
    }
}


// Filtrar Calificaciones:
// Declara un array llamado calificaciones que contenga varios números representando calificaciones (por ejemplo, en una escala de 0 a 100).
// Usa un bucle for para recorrer cada calificación en el array.
// Dentro del bucle, usa un condicional if para clasificar cada calificación:
// Si la calificación es menor a 60, imprime "Reprobado".
// Si la calificación está entre 60 y 80, imprime "Aprobado".
// Si la calificación es mayor a 80, imprime "Excelente".

// Solución: 


let calificaciones = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

for (let i = 0; i < calificaciones.length; i++) {
  let calificacion = calificaciones[i];
    
  if (calificacion < 60) {  //Comienzo de los condicionales para determinar la clasificación
    console.log("Reprobado");
  } else if (calificacion >= 60 && calificacion <= 80) {
    console.log("Aprobado");
  } else if (calificacion > 80) {
    console.log("Excelente");
  }
}



// Clasificación de Productos por Precio:

// Crea un array llamado precios con diferentes valores numéricos que representen el precio de varios productos.
// Escribe un bucle for que recorra cada precio en el array.
// Dentro del bucle, usa un condicional if para clasificar cada producto en función de su precio:
// Si el precio es menor a 20, imprime "Producto económico".
// Si el precio está entre 20 y 50, imprime "Producto de precio moderado".
// Si el precio es mayor a 50, imprime "Producto de lujo".


// Solución: 

let precios = [12, 26, 2, 80, 47, 18, 39, 95];

for (let i = 0; i < precios.length; i++) {
    
    if (precios[i] < 20) {  //Comienzo de los condicionales para la clasificación del producto en base al precio
        console.log("Producto económico");
    } else if (precios[i] >= 20 && precios[i] <= 50) {
        console.log("Producto de precio moderado");
    } else {
        console.log("Producto de lujo");
    }
}


