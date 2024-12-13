const numbers = [3, 1, 4, 1, 5, 9];
numbers.sort(); // ¡Cuidado! Esto ordena como cadenas: [1, 1, 3, 4, 5, 9]
console.log(numbers);

numbers.sort((a, b) => a - b); // Orden numérico ascendente
console.log(numbers); // [1, 1, 3, 4, 5, 9]

/* Ejercicios:
1 - Ordena un arreglo de nombres de personas alfabéticamente.
2 - Ordena un arreglo de edades de menor a mayor.
3 - Ordena un arreglo de objetos que tienen una propiedad price de menor a mayor.
4 - Ordena un arreglo de objetos por su name en orden alfabético.
5 - Ordena un arreglo de palabras en orden descendente.
6 - Ordena un arreglo de números de mayor a menor.
7 - Ordena un arreglo que mezcla cadenas de texto y números como cadenas.
8 - Ordena un arreglo de fechas en orden ascendente.
9 - Ordena un arreglo de palabras ignorando las mayúsculas/minúsculas.
10 - Ordena un arreglo de números negativos en orden ascendente. */