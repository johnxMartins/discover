// function expression
// function anonymous
// parâmetros (parameters)
const sum = function (number1, number2) {
  total = number1 + number2 //NAO FAÇA ISSO (DECLARE O TIPO)
  return total
}

let number1 = 34
let number2 = 24
sum(2, 3) //arguments - argumentos

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(total)

/*
// function hosting
sayMyName()

function sayMyName() {
  console.log('John')
}
*/

/*
// arrow Function
const sayMyName = () => {
  console.log('Nome')
}
sayMyName()
*/

/*
// Callback function
function sayMyName(name) {
  console.log('antes de executar a callback')
  name()
  console.log('depois de executar a callback')
}

sayMyName(() => {
  console.log('estou em uma callback')
})
*/
