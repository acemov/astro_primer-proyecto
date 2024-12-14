// 1. Declara la función `addNumbers` con tipos explícitos
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

// 2. Declara dos variables con valores numéricos
let number1: number = 5;
let number2: number = 10;

// 3. Llama a la función `addNumbers` con estas variables como argumentos
const result: number = addNumbers(number1, number2);

// 4. Muestra el resultado en la consola
console.log(`La suma de ${number1} y ${number2} es: ${result}`);
