const list = document.getElementById('list');

const showItens = data => {

  data.results.map(character => {
    list.innerHTML += `
        <h1> ${character.name} </h1>
        <img src=${character.image}>
        `
  })

}

const showErr = () => {
  list.innerHTML = `<h1>Erro</h1>`
}

api('https://rickandmortyapi.com/api/character?page=1')
  .then(data => showItens(data))
  .catch(_err => showErr())
