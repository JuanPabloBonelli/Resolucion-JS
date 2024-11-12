// Clasificación de Números Pares e Impares:
// Crea un array llamado numeros y agrégale varios números enteros.
// Escribe un bucle for que recorra el array numeros.
// Dentro del bucle, usa un condicional if para verificar si cada número es par o impar.
// Si el número es par, imprime "El número X es par" (donde X es el número actual).
// Si el número es impar, imprime "El número X es impar".

// Solución 

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    
    if (numero % 2 === 0) {
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


let calificaciones = [45, 67, 85, 78, 90, 56, 70, 88, 60];

for (let i = 0; i < calificaciones.length; i++) {
  let calificacion = calificaciones[i];
    
  if (calificacion < 60) {
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

let precios = [12, 25, 7, 45, 60, 18, 30, 55];

for (let i = 0; i < precios.length; i++) {
    
    if (precios[i] < 20) {
        console.log("Producto económico");
    } else if (precios[i] >= 20 && precios[i] <= 50) {
        console.log("Producto de precio moderado");
    } else {
        console.log("Producto de lujo");
    }
}


