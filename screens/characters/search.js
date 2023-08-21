const inputSearch = document.getElementById('search');

inputSearch.addEventListener('input', async () => {
  try {
    const data = await api(`https://rickandmortyapi.com/api/character/?name=${inputSearch.value}`);
    list.innerHTML = ``;
    showItens(data);
  } catch (error) {
    showErr();
  }
  if (inputSearch.value) divPages.innerHTML = ``; 
  else displayResults(currentPage);
});