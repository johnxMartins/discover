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

- @import _incluir um CSS externo_

- @media _regras condicionais para dispositivos_

- @font-face _fontes externas_

- @keyframes _Animation_

# Shorthand

- junção de propiedades
- resumido
- legível

```css
 {
  /* Background properties */
  background-color: #000;
  background-image: url(images/bg.gif);
  background-repeat: no-repeat;
  background-position: left top;

  /* background shorthand */
  background: #000 url(images/bg.gif) no-repeat left top;

  /* font properties */
  font-style: italic;
  font-weight: bold;
  font-size: .8em;
  line-height; 1.2;
  font-family: Arial, sans-serif;

  /* font shorthand */
  font: italic bold .8em/1.2 Arial, sans-serif;
}
```

## Detalhes

- não irá considerar propidades anteirios
- valores não especificados irão assumir o valor padrão
- geralmente, a ordem descrita não importa, mas, se houver muitas propiedades
  com valores semelhantes, poderemos encotrar problemas

# Funções

- nome seguido de abre e fecha parentesis
- recebe argumentos

## Exemplos

```css
@import url('http://urlaqui.com/style.css');
 {
  color: rgb(255, 0, 100);
  width: calc(100% - 10px);
}
```

# Vendor Prefixes

Permite que browsers adicione `features` a fim de colocar
em uso alguma novidade que vemos no CSS.

# Exemplo

```css
p {
  -webkit-background-clip: text; /* Chrome, Safari, IOS e Android */
  -moz-background-clip: text; /* Mozilla (Firefox) */
  -ms-background-clip: text; /* Internet Explorer */
  -o-background-clip: text; /* Opera */
}
```

# Consultas

- [http://ireade.github.io/which-vendor-prefix/]
- [http://caniuse.com]
