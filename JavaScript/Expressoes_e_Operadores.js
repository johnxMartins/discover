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

// Grouping Operator
let total = (2 + 3) * 5
console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

let total = 2 + 3 * 5
console.log(total)
//com essa precedência, nosso resultado é 17.

// Operadores de comparação igual a e diferente de
// Irá comparar valores e retornar um Boolean como resposta à comparação
let one = 1
let two = 2
// == igual à
console.log(two == 1) //false
console.log(one == '1') //True
// != diferente de
console.log(one != two) //True

// Operadores de comparação estritamente igual e estritamente diferente
let one = 1
let two = 2
// '===' estritamente igual a (compara o valor e o tipo)
console.log(one === '1') //False
console.log(one === 1) //True
// !== Estritamente diferente de
console.log(two !== '2') //True
console.log(two !== 2) //False

// Operadores de comparação maior e menor (igual)
let one = 1
let two = 2
// '>' maior que
// '>=' maior igual à
// '<=' menor igual à
console.log(one <= two) //True
console.log(one <= 0) //False

// Operadores de atribuição (assignment)
// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2
