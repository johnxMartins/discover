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

// Operadores lógicos (logical operators)
// Valores booleanos quando verificados, resultará em verdadeiro ou falso
let pao = true
let queijo = true
// AND '&&' os dois valores devem ser iguais/True
// OR '||' se tiver um dos 2 já retornará true
// NOT '!' nega, troca o valor

// Operador condicional (ternário)
// Dependendo da condição, nós receberemos valores diferentes
// Condição então valor 1 senão valor 2
// condition ? value1 : value2
// Exemplo:
// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
console.log(niceBreakfast)

// Operadores para string (string operator)
// comparison ('a' == 'a')
// concatenation (retorna a união de 2 strings)
let alpha = 'alpha'
console.log(alpha + 'bet' + 's')

// Falsy e truthy
// Falsy: quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)
/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/
console.log(NaN ? 'verdadeiro' : 'falso')
// Truthy: quando um valor é considerado true em contextos onde um booleano é obrigatório.
/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/
console.log(Infinity ? 'verdadeiro' : 'falso')
