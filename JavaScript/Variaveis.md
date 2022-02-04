# Variáveis

- Nomes simbólicos para receber algum valor
- Atalhos de código
- Identificadores
- 3 palavras reservadas para criar uma variável

### Tipos:

- var
- let
- const (Não pode ser alterada)

O JS é uma linguagem fracamente tipada e dinâmica.
Variáveis não precisam ter um tipo previamente definido. Podemos mudar o conteúdo da variável

# Scope

Escopo determina a visibilidade de alguma variável no JS.

# Block statement (Declaração de bloco)

    - var é global e, também local
    - Global

{
var = x / Local
}
O bloco tambem criará um novo escopo. Chamamos de 'Block-Scoped'

# Var

    - var é global e poderá funcionar fora de um escopo de bloco (>Cuidado<)

## Let e const

> const e let são locais e só funcionam no escopo onde foi criada

# Para criar nomes

> JS é case-sensitive (sensível ao caso).
> JS aceita a cadeia de caracteres Unicode

## Posso:

    - Iniciar com esses caracteres especiais: $ \_
    - Iniciar com letras
    - Colocar acentos
    - Letras maíusculas e minúsculas fazem diferança

## Não posso:

    - Iniciar com números
    - Colocar espaçes vazios no nome

## Ideal:

    - Criar nomes que fazem sentido
    - Que explique o que a variável é ou faz
    - camelCase
    - snake_case
    - Escrever em ingles
