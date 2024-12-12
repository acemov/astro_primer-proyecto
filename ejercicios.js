// Aquí te dejo ejemplos de cada método que mencioné anteriormente:
// *Métodos de arreglos*
console.log("1. *`sort()`*//: Ordena los elementos de un arreglo.")


const frutas = ['manzana', 'banana', 'naranja'];
frutas.sort();
console.log(frutas); // ['banana', 'manzana', 'naranja']


console.log("1. *`filter()`*//: Crea un nuevo arreglo con los elementos que cumplen una condición.")


const números1 = [1, 2, 3, 4, 5];
const pares = números1.filter(n => n % 2 === 0);
console.log(pares); // [2, 4]


console.log("1. *`map()`*//: Aplica una función a cada elemento del arreglo y devuelve un nuevo arreglo.")


const nombres = ['Juan', 'Ana', 'Pedro'];
const mayúsculas2 = nombres.map(nombre => nombre.toUpperCase());
console.log(mayúsculas2); // ['JUAN', 'ANA', 'PEDRO']


console.log("1. *`reduce()`*//: Aplica una función a cada elemento del arreglo y devuelve un valor único.")


const números2 = [1, 2, 3, 4, 5];
const suma = números2.reduce((acumulado, actual) => acumulado + actual, 0);
console.log(suma); // 15


console.log("1. *`indexOf()`*//: Busca el índice de un elemento en el arreglo.")


const frutas2 = ['manzana', 'banana', 'naranja'];
const índice = frutas2.indexOf('banana');
console.log(índice); // 1


console.log("1. *`includes()`*//: Verifica si un elemento está en el arreglo.")


const números3 = [1, 2, 3, 4, 5];
const existe = números3.includes(3);
console.log(existe); // true


//  -------------------------------- *Métodos de cadenas* --------------------------------
console.log("1. *`toUpperCase()`*//: Convierte una cadena a mayúsculas.")


const nombre1 = 'juan';
const mayúsculas = nombre1.toUpperCase();
console.log(mayúsculas); // JUAN


console.log("1. *`toLowerCase()`*//: Convierte una cadena a minúsculas.")


const nombre2 = 'JUAN';
const minúsculas = nombre2.toLowerCase();
console.log(minúsculas); // juan


console.log("1. *`trim()`*//: Elimina espacios en blanco al principio y final de una cadena.")


const texto1 = '   Hola, mundo!   ';
const limpio = texto1.trim();
console.log(limpio); // Hola, mundo!


console.log("1. *`split()`*//: Divide una cadena en un arreglo de substrings.")


const texto2 = 'Hola, mundo!';
const palabras = texto2.split(' ');
console.log(palabras); // ['Hola,', 'mundo!']


console.log("1. *`join()`*//: Une los elementos de un arreglo en una cadena.")


const palabras1 = ['Hola', 'mundo'];
const texto = palabras1.join(' ');
console.log(texto); // Hola mundo


// ------------------------------------- *Métodos de objetos*---------------------------------
console.log("1. *`Object.keys()`*//: Devuelve un arreglo con las claves del objeto.")


const persona2 = { nombre: 'Juan', edad: 30 };
const claves = Object.keys(persona2);
console.log(claves); // ['nombre', 'edad']


console.log("1. *`Object.values()`*//: Devuelve un arreglo con los valores del objeto.")


const persona3 = { nombre: 'Juan', edad: 30 };
const valores = Object.values(persona3);
console.log(valores); // ['Juan', 30]


console.log("1. *`Object.entries()`*//: Devuelve un arreglo con las claves y valores del objeto.")


const persona4 = { nombre: 'Juan', edad: 30 };
const entradas = Object.entries(persona4);
console.log(entradas); // [['nombre', 'Juan'], ['edad', 30]]


// ------------------------------*Métodos numéricos*------------------------------
console.log("1. *`Math.max()`*//: Devuelve el número máximo de un conjunto de números.")


const números4 = [1, 2, 3, 4, 5];
const máximo = Math.max(...números4);
console.log(máximo); // 5


console.log("1. *`Math.min()`*//: Devuelve el número mínimo de un conjunto de números.")


const números5 = [1, 2, 3, 4, 5];
const mínimo = Math.min(...números5);
console.log(mínimo); // 1


console.log("1. *`Math.pow()`* //: Eleva un número a una potencia.")


// Aquí te dejo 10 ejercicios de JavaScript que cubren métodos comunes:
// *Ejercicios*

/* 1. Crea una función que tome un arreglo de números y devuelva el número mayor.

2. Escribe un código que convierta una cadena de texto en mayúsculas.

3. Crea una función que reciba un objeto y devuelva su clave y valor.

4. Haz una función que elimine duplicados de un arreglo.

5. Crea una función que ordene un arreglo de objetos por una propiedad específica.

1. Escribe un código que verifique si un número es primo.

2. Crea una función que convierta un número en una cadena binaria.

3. Haz una función que busque un elemento en un arreglo y devuelva su índice.

4. Crea una función que reciba una fecha y devuelva el día de la semana.

5. Escribe un código que calcule el factorial de un número. */

// *Métodos requeridos*
// *Métodos de arreglos*

1. `sort()`
2. `filter()`
3. `map()`
4. `reduce()`
5. `indexOf()`
6. `includes()`

// *Métodos de cadenas*

1. `toUpperCase()`
2. `toLowerCase()`
3. `trim()`
4. `split()`
5. `join()`

// *Métodos de objetos*

1. `Object.keys()`
2. `Object.values()`
3. `Object.entries()`

// *Métodos numéricos*

1. `Math.max()`
2. `Math.min()`
3. `Math.pow()`
4. `Math.sqrt()`

// *Métodos de fechas*

1. `getDate()`
2. `getDay()`
3. `getMonth()`
4. `getFullYear()`

// Recuerda resolver los ejercicios sin mirar las soluciones directamente. ¡Buena suerte!