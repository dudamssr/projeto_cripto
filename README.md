# Petal Crypto

## Desafio: Painel de Criptomoedas

O mercado de criptomoedas possui milhares de moedas digitais, com preços que podem sofrer alterações constantemente. Para acompanhar esse mercado, investidores e estudantes precisam consultar os valores atualizados e realizar cálculos rapidamente.

Uma empresa fictícia chamada **Petal Crypto** decidiu desenvolver uma aplicação web para facilitar esse acompanhamento.

Seu desafio é desenvolver um **painel interativo de criptomoedas**, capaz de consultar dados de uma API externa, apresentar as moedas disponíveis e permitir que o usuário faça uma conversão simples de valores.

---

## Situação-problema

Imagine que você foi contratado para desenvolver a primeira versão do sistema da Petal Crypto.

A aplicação deverá consultar informações reais sobre criptomoedas e apresentar esses dados de maneira clara e organizada.

O usuário deverá conseguir:

- Visualizar as criptomoedas disponíveis;
- Consultar o preço atual de cada moeda em reais;
- Pesquisar uma moeda específica;
- Selecionar uma criptomoeda;
- Informar uma quantidade;
- Descobrir quanto essa quantidade representa em reais;
- Interagir com os cards das moedas para facilitar a seleção.

Para isso, será necessário utilizar HTML, CSS, JavaScript e uma API externa.

---

## Objetivo do exercício

Desenvolver uma aplicação web capaz de:

1. Consumir dados de uma API de criptomoedas;
2. Manipular os dados recebidos utilizando JavaScript;
3. Exibir as criptomoedas dinamicamente na página;
4. Criar uma busca para filtrar as moedas;
5. Criar um conversor de criptomoedas para reais;
6. Permitir que o usuário selecione uma moeda por meio de uma lista;
7. Atualizar o valor convertido conforme a quantidade informada;
8. Criar uma interface organizada, responsiva e agradável.


---

## API

Para obter os dados das criptomoedas, utilize a API pública da **CoinGecko**.

A consulta deverá retornar informações de criptomoedas com seus respectivos valores em BRL (Real brasileiro).

A documentação da API pode ser consultada em:

https://docs.coingecko.com/

O sistema deverá tratar possíveis erros durante a comunicação com a API.

Caso a requisição não seja realizada corretamente, o usuário deverá receber uma mensagem informando que houve um problema ao carregar os dados.

- URL da API: https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl

---

## Requisitos funcionais

### 1. Carregamento das criptomoedas

Ao abrir a aplicação, o sistema deverá realizar uma requisição à API e carregar as informações das moedas.

Os dados deverão ser armazenados no JavaScript para serem utilizados nas demais funcionalidades.

### 2. Exibição das moedas

As criptomoedas deverão ser apresentadas dinamicamente em cards.

Cada card deverá apresentar, no mínimo:

- Imagem da criptomoeda;
- Nome da criptomoeda;
- Preço atual em reais.

Os cards não deverão ser escritos manualmente no HTML. Eles deverão ser criados utilizando JavaScript a partir dos dados recebidos da API.

### 3. Pesquisa de criptomoedas

A aplicação deverá possuir um campo de pesquisa.

Ao digitar o nome de uma moeda, os cards deverão ser filtrados automaticamente, mostrando somente as moedas relacionadas ao texto informado.

Caso nenhuma moeda seja encontrada, o sistema deverá apresentar uma mensagem informando que não existem resultados.

### 4. Seleção de moeda

A aplicação deverá possuir uma área para selecionar uma criptomoeda.

As opções deverão ser preenchidas dinamicamente utilizando os dados recebidos da API.

Cada opção deverá apresentar o nome da moeda e seu símbolo.

### 5. Conversor

O usuário deverá informar a quantidade de uma determinada criptomoeda.

O sistema deverá calcular:

**Quantidade × Preço atual da criptomoeda**

O resultado deverá ser apresentado em reais.

Exemplo:

> 2 unidades de uma criptomoeda que custa R$ 10.000,00  
> Resultado: R$ 20.000,00

O cálculo deverá ser atualizado sempre que o usuário:

- Alterar a moeda selecionada;
- Alterar a quantidade.

### 6. Integração entre os cards e o conversor

Ao clicar em um card de criptomoeda, essa moeda deverá ser automaticamente selecionada no conversor.

Dessa forma, o usuário não precisará procurar novamente a moeda na lista de seleção.

### 7. Tratamento de erros

O sistema deverá considerar situações como:

- Erro na requisição da API;
- API indisponível;
- Resposta inválida;
- Nenhuma moeda encontrada na pesquisa;
- Quantidade inválida ou vazia.

A aplicação não deverá simplesmente quebrar caso alguma dessas situações aconteça.

---

## Requisitos de interface

A interface deverá apresentar:

- Menu lateral;
- Identificação da aplicação;
- Campo de pesquisa;
- Painel de conversão;
- Área principal com os cards;
- Indicação de que os dados são provenientes do mercado de criptomoedas;
- Layout responsivo.

A aparência deverá ser organizada e coerente, utilizando cores, espaçamentos, tipografia e componentes que facilitem a leitura das informações.

<img width="1896" height="914" alt="Captura de tela 2026-09-09 155635" src="https://github.com/user-attachments/assets/7c386bad-80bd-49bb-b91c-f2a0a9641004" />
<img width="1891" height="906" alt="Captura de tela 2026-09-09 155723" src="https://github.com/user-attachments/assets/f3af1485-cd5f-48aa-aea8-52ab4b57ed70" />
<img width="1916" height="909" alt="Captura de tela 2026-09-09 155741" src="https://github.com/user-attachments/assets/7cf92199-02cf-4a60-8fc5-249b546788ca" />

---

## Responsividade

A aplicação deverá funcionar adequadamente em diferentes tamanhos de tela.

Em telas menores, a estrutura deverá se adaptar para que:

- O menu lateral não prejudique a visualização;
- Os cards sejam reorganizados;
- Os campos do conversor continuem utilizáveis;
- Não seja necessário realizar rolagem horizontal.

  <img width="606" height="905" alt="Captura de tela 2026-09-09 155937" src="https://github.com/user-attachments/assets/b34872f3-0cb2-4894-96c7-99db1bf8d43b" />


---
