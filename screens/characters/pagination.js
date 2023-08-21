const divPages = document.getElementById('pages');

let currentPage = 1;
let qtPages = 0;


const fetchApiData = async (page) => {
  // const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  // const data = response.json();
  const data = await api(`https://rickandmortyapi.com/api/character?page=${page}`);

  return data;
}

const changePage = (numPage) => {
  currentPage = numPage;
  list.innerHTML = ``;
  displayResults(currentPage);
}

const displayResults = async (page) => {
  // const { info: { count, pages }} = await fetchApiData(page); //recebo o data e desestruturo o campo info {count, page}
  const data = await fetchApiData(page);
  showItens(data);

  const { info: { count, pages } } = data;
  qtPages = pages; //atribuindo o valor que recebo da api "pages".

  let end = currentPage * 20;
  let init = end - 19;

  divPages.innerHTML = `
  <p class="results">Mostrando de ${init} até ${end} de ${count} resultados</p>
  <div>
  ${currentPage != 1 && `<button class="buttonPage disabled" onclick="changePage(${currentPage - 1})">${currentPage - 1}</button>` //if ternário, quando o valor for diferente de 1, irá aparecer o botao de voltar
    }
    <button class="buttonPage">${currentPage}</button>
    <button class="buttonPage disabled" onclick="changePage(${currentPage + 1})">${currentPage + 1}</button>
  </div>`;

}

displayResults(currentPage);
