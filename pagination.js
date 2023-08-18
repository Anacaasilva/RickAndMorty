const pages = document.getElementById('pages');

let currentPage = 1;

const fetchApiData = async (page) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = response.json;

  return data;
}

const displayResults = async (page) => {
  const data = await fetchApiData(page);
}

displayResults(currentPage);