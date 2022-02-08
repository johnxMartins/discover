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
