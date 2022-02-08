/*
Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

let notas = 60
if (notas < 60) {
  console.log('F')
}
if (notas >= 60 && notas < 70) {
  console.log('D')
}
if (notas >= 70 && notas < 80) {
  console.log('C')
}
if (notas >= 80 && notas < 90) {
  console.log('B')
}

if (notas >= 90) {
  console.log('A')
}
