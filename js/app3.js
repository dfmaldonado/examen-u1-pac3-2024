/* Crea un programa que le pida al usuario un año y determine si es un año bisiesto o no. Un año es bisiesto
si:
i. Es divisible por 4, pero no por 100, a menos que también sea divisible por 400.
ii. Ejemplo:
1. Si el usuario ingresa 2024, el programa debe imprimir "El año 2024 es bisiesto." */
/*
1. Usar operadores lógicos para implementar las reglas de los años bisiestos.
2. Utilizar una estructura condicional if-else para decidir si es bisiesto o no. */


let anio = Number(prompt('Ingrese un anio: '));

if (anio % 4 & anio %! 100 & anio % 400 ) {
console.log('El año Es bisciesto');
} else { 
    console.log('El año ingresado no es bisciesto');
    
}