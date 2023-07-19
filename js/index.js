const list = document.getElementById('list');
const select = document.getElementById('select');

const api = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(resolve => resolve.json())
      .then(val => resolve(val))
      .catch(err => reject(err))
  })
}

const showItens = data => {

  data.results.map(character => {
    list.innerHTML += `
        <h1> ${character.name} </h1>
        <img src=${character.image}>
        `
  })

}


const showCharacter = character => {

    select.innerHTML = `
        <h1> ${character.name} </h1>
        <img src=${character.image}>
        `

}

const showErr = () => {
  list.innerHTML = `<h1>Erro</h1>`
}

api('https://rickandmortyapi.com/api/character?page=1')
  .then(data => showItens(data))
  .catch(_err => showErr())


api('https://rickandmortyapi.com/api/character/1')
  .then(data => showCharacter(data))
  .catch(_err => showErr())