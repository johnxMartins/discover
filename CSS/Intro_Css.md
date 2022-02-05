# Introdução à CSS

A CSS trata cada elemento HTML como se ele aparecesse dentro
de uma caixa própia e usa regras para indicar a aparência que esse
elemento deve ter.

## Seletores

As regras são compostas por seletores (que especificam os elementos aos
quais a regra se aplica) e declarações (que indicam a aparência que esse
elemento deve ter).

Diferentes tipos de seletores permitem direcionar suas regras para diferentes
elementos.

Declarações são compostas por duas partes: as propiedades do elemento que voce
deseja alterar, e os valores dessas propiedades. Por exemplo, a propiedade
_font-family_ define a escolha da fonte, e o valor _arial_ especifica a fonte
escolhida.

# Cor

Há três maneiras de especificar cores na CSS:

- Valores RGB
- Códigos hexadecimais
- Nomes de cores

Os seletores de cores podem ajudar a encontrar a cor que você quer. A CSS3
introduziu um valor extra para cores RGB a fim de indicar a opacidade. Ele
é conhecido como RGBA.

A CSS3 tambem permite especificar cores como valores _HSL_, com um valor
opcional de opacidade. Este é conhecido como _HSLA_.

# Cascata (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o
mesmo elemento.

> Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores

1. Origem do estilo
2. Especificidade
3. Importância

## Origem do estilo

inline > tag style > tag link

## Especificidade

É um cálculo matamático, onde, cada tipo de seletor e origem de estilo, possuem
valores a serem considerados.

0. Universal seletor, combinators e nagation pseudo-class (:not())
1. Element type selector e pseudo-elements (::before, ::after) (_+_)
2. Classes e attribute selectors ([type="radio"]) (_++_)
3. ID selector (_+++_)
4. Inline (_O mais forte ++++_)

## A regra !important

- cuidado, **evite o uso**
- não é considerado uma boa prática
- quebra o fluxo natural da cascata

## At-rules

- Está relacionado ao comportamento do CSS
- Começa com o sinal de '@' seguido de identificador e valor

## Exemplos comuns

- @import /_ incluir um CSS externo _/

- @media /_ regras condicionais para dispositivos _/

- @font-face /_ fontes externas _/

- @keyframes /_ Animation _/
