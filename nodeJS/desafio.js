/* Crie 2 arquivos JavaScript
 * O primeiro, irá exportar um função getFlag()
 * que receberá um argumento do tipo String.
 * e retornar o valor da flag
 *
 * O segundo irá importar a função e passar a flag desejada.
 *
 * Iremos rodar no terminal o segundo arquivo passando as
 * flags --name e --greeting para que seja impresso no
 * termninal a saudação e nome da pessoa.
 */
function getFlag(flag) {
  const index = process.argv.indexOf(flag) + 1
  return process.argv[index]
}

module.exports = getFlag
