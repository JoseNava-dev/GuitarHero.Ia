document.addEventListener('DOMContentLoaded', () => {
  const botaoFiltrar = document.querySelector('.btn-filtrar');

  if (!botaoFiltrar) {
    console.error('Botão filtrar não encontrado!');
    return;
  }

  botaoFiltrar.addEventListener('click', () => {
    console.log('Botão Filtrar clicado!');

    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();
    let precoInput = document.querySelector('#preco').value.trim();

    console.log('Categoria selecionada:', categoriaSelecionada);
    console.log('Preço input:', precoInput);

    precoInput = precoInput.replace(',', '.');
    const precoMaximo = parseFloat(precoInput);

    console.log('Preço máximo parseado:', precoMaximo);

    const cartas = document.querySelectorAll('.carta');
    console.log('Número de cartas:', cartas.length);

    cartas.forEach(carta => {
      const categoriaCarta = carta.dataset.categoria.toLowerCase();
      const precoCarta = parseFloat(carta.dataset.preco);

      console.log(`Carta: ${carta.querySelector('.nome-personagem').textContent}`);
      console.log(` - Categoria: ${categoriaCarta}`);
      console.log(` - Preço: ${precoCarta}`);

      let mostrarCarta = true;

      if (categoriaSelecionada !== '' && categoriaSelecionada !== categoriaCarta) {
        mostrarCarta = false;
      }

      if (!isNaN(precoMaximo) && precoCarta > precoMaximo) {
        mostrarCarta = false;
      }

      if (mostrarCarta) {
        carta.classList.add('mostrar');
        carta.classList.remove('esconder');
      } else {
        carta.classList.add('esconder');
        carta.classList.remove('mostrar');
      }
    });
  });
});
