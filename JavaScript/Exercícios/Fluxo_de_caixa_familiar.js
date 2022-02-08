/* Sistema de gastos familiar
Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/
let gastos = {
  receitas: [500, 2000],
  despesas: [400, 600]
}

function sum(array) {
  let resto = 0
  for (value of array) {
    resto += value
  }
  return resto
}

function total() {
  const calculateReceitas = sum(gastos.receitas)
  const calculateDespesas = sum(gastos.despesas)

  const resto = calculateReceitas - calculateDespesas

  const itsOk = resto >= 0

  let balanceText = 'nagativo'

  if (itsOk) {
    balanceText = 'positivo'
  }

  console.log(`Seu saldo é ${balanceText}: ${resto.toFixed(2)} R$`)
}
total()
