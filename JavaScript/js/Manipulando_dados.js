/*
  Prototype
  - protorype-based language 
  -prototype chain
  - __proto__
*/

// Strings e Numeros
// transformar string em numero e vice-versa
/*
let string = '123'
console.log(Number(string))
let number = 321
string(number)
*/

/*
// Contando caracteres e dígitos
let word = 'Paralelepipedo'
console.log(word.length)
let number = 1234
console.log(String(number).length)
*/

// Casas decimais
// transformar numero quebrado com 2 casas decimais e trocar ponto por virgula

/*
let number = 21321312.231231
console.log(number.toFixed(2))
console.log(number.replace('.', ','))
console.log(number)
*/

// Manipulando letras Maiúsculas e Minúsculas

/*
let word = 'Maça é bom'
console.log(word.toUpperCase())
console.log(word.toLocaleLowerCase())
*/

/*
// Separando Strings
// Separe um texto que contem espaços, em um novo array aonde cada texto é uma posição do array. Depois
// disso, transforme o array em um texto e onde eram espaços coloque _
let phrase = 'Eu quero viver!'
let myArray = phrase.split(' ')
console.log(myArray)
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore)
*/

/*
//Encontrando palavras em frases
let phrase = 'Eu quero viver!'
console.log(phrase.includes('amor')) //case sensitive 'amor' != 'Amor'
*/

/*
// Criando Array com Construtor
let myArray = new Array('a', 'b', 'c')
console.log(myArray)
*/

/*
// Elementos do Array
console.log(
  [
    'a',
    { type: 'array' },
    function () {
      return 'alo'
    }
  ].length
)
*/

/*
// Strings para arrays
// transformar uma cadeia de caracteres em elementos de um array
let word = 'manipulação'
console.log(Array.from(word))
*/

// Manipulando arrays
let techs = ['html', 'css', 'js']
// adiciocar um item no fim
// techs.push('node.js)

// adicionar no começo
// techs.unshift('sql')

// remover do fim
// techs.pop()

// remover do começo
// techs.shift()

// pegar somente alguns elementos do array
// techs.slice(1, 2)

// remover 1 ou mais items em qualquer posição do array
// techs.splice(1, 3)

// encontrar a posição de um elemento no array
// let index = techs.indexOf('css')
// console.log(techs)
