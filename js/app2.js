/*Escribe un programa que reciba una calificación numérica entre 0 y 100 y luego imprima su equivalente
en letras, de acuerdo con la siguiente tabla: */

let nota = Number(prompt('Ingrese una nota: '));
if (nota > 90) {
console.log('¡Felicidades su nota es A!');
} else if(nota > 80 < 89){
    console.log('¡Felicidades su nota es B!');

 } else if(nota > 70 < 79) {
    console.log('¡Buen trabajo su nota es C!');

 } else if (nota > 60 < 69){
    console.log('¡Bien hecho aprobaste tu nota es D!');

 } else if (nota < 59) {
    console.log('Persevera para alcanzar tus metas una nota jamas define tu capacidad intelectual, no te rindas F');

 } else {
    console.log('La nota ingresada no puede ser procesada');
 }