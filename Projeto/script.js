const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl';
const moedas = [];


const containerMoedas = document.querySelector('#containerMoedas');
const campoBusca = document.querySelector('#campoBusca');
const selectMoeda = document.querySelector('#selectMoeda');
const qtdMoeda = document.querySelector('#qtdMoeda');
const valorConvertido = document.querySelector('#valorConvertido');

carregarMoedas();

function carregarMoedas() {
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .then(data => {
      moedas.length = 0;
      moedas.push(...data);
      listarCards(moedas);
      preencherSelect();
      calcularValor();
    })
    .catch(() => alert('Erro ao conectar com a API de Criptomoedas'));
}

function listarCards(lista) {
  containerMoedas.innerHTML = '';

  if (lista.length === 0) {
    containerMoedas.innerHTML = '<p class="empty-msg">Nenhuma moeda encontrada.</p>';
    return;
  }

  lista.forEach(moeda => {
    const card = document.createElement('div');
    card.classList.add('card-music');

    card.innerHTML = `
      <img src="${moeda.image}" alt="${moeda.name}">
      <h3>${moeda.name}</h3>
      <p>R$ ${moeda.current_price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
    `;

    card.onclick = () => {
      selectMoeda.value = moeda.id;
      calcularValor();
    };

    containerMoedas.appendChild(card);
  });
}

function preencherSelect() {
  selectMoeda.innerHTML = '';
  moedas.forEach(moeda => {
    const option = document.createElement('option');
    option.value = moeda.id;
    option.textContent = `${moeda.name} (${moeda.symbol.toUpperCase()})`;
    selectMoeda.appendChild(option);
  });
}


function calcularValor() {
  const moedaSelecionada = moedas.find(m => m.id === selectMoeda.value);
  const quantidade = parseFloat(qtdMoeda.value) || 0;

  if (moedaSelecionada) {
    const total = quantidade * moedaSelecionada.current_price;
    valorConvertido.textContent = `R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }
}


selectMoeda.addEventListener('change', calcularValor);
qtdMoeda.addEventListener('input', calcularValor);

campoBusca.addEventListener('input', () => {
  const texto = campoBusca.value.toLowerCase();
  const moedasFiltradas = moedas.filter(m => m.name.toLowerCase().includes(texto));
  listarCards(moedasFiltradas);
});