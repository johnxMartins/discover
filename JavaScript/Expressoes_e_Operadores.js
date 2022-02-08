// Expressoes e Operadores
// Operators: Binary, Unary e Ternary
let number = 1
console.log(number + 1) //Binary
console.log(number--) //Unary
console.log(true ? 'alo' : 'nada') //Ternary

//  New (left-hand-side expression)
// Criar um novo Objeto
let name = newString('John')
name.surName = 'Brito'
let date = new Date('2020-12-01')
console.log(date.__proto__)

// TypeOf delete
const person = {
  name: 'John',
  age: 22
}
delete person.age // Procura uma propiedade e se existir deleta
console.log(person)

// Operadores Aritméticos
// Multiplicação '*'  // Divisão '/'
// Soma '+'           // Subtração '-'
// Resto da divisão  '%'
// Incremento e Decremento ('++' '--')
/* resto da divisão: sinal % */
let remainder
remainder = 11 % 9
console.log(remainder)

/* incremento: sinal ++ */
let increment = 0

console.log(++increment)
console.log(increment)

/* decremento: sinal -- */
let decrement = 0
decrement--
console.log(decrement)

/* exponencial: sinal ** */
console.log(2 ** 3)
