const list = document.getElementById('list');
const containerModal = document.getElementById('containerModal');


const requestCharacter = (id) => {
  api(`https://rickandmortyapi.com/api/character/${id}`)
    .then(data => showModal(data))
    .catch(_err => showErr())

}

const hideModal = () => {
  containerModal.innerHTML = ``
}

const showModal = (character) => {

  let color = '';

  if (character.status == 'Alive') color = '#49C141';
  else if (character.status == 'Dead') color = '#E40303';
  else color = '#A1A6A1';

  containerModal.innerHTML = `
    <div class="modal">
      <button class="hideModal" onclick="hideModal()">
      </button>
        <div class="backgroundModal">
          <div class="containerCharacter">
            <h2 class="nameCharacter">${character.name}</h2>
            <img class="imgModal" src="${character.image}" alt="Image character">
          </div>
          <div class="statusModal">
            <div style="background-color:${color}"></div>
            <p style="color:${color}">${character.status}</p>
          </div>
          <div class="containerInfo">
            <p class="infoCharacter"><strong>Gender:</strong> ${character.gender}</p>
            <p class="infoCharacter"><strong>Species:</strong> ${character.species}</p>
            <p class="infoCharacter"><strong>Type:</strong> ${character.type}</p>
            <p class="infoCharacter"><strong>Origin:</strong> ${character.origin.name}</p>
            <p class="infoCharacter"><strong>Location:</strong> ${character.location.name}</p>
          </div>
        </div>
    </div>
  `
}

const showItens = ({ results }) => {

  results.map(({ name, image, status, id }) => {

    let color = '';

    if (status == 'Alive') color = '#49C141';
    else if (status == 'Dead') color = '#E40303';
    else color = '#A1A6A1';

    list.innerHTML += `
        <div class="card">
        <div class="backgroundCard">
          <img class="imgCharacter" src="${image}" alt="Image character">
          <h2 class="nameCharacter">${name}</h2>
          <div class="containerStatus">
            <div class="circle" style="background-color: ${color} "></div>
            <p class="status" style="color: ${color}">${status}</p>
          </div>
          <div class="containerButton">
            <button class="button" type="button" onclick=requestCharacter(${id})>Ver sobre</button>
          </div>
        </div>
      </div> 
        `
  })

}

const showErr = () => {
  list.innerHTML = `<h1>Erro</h1>`
}

api('https://rickandmortyapi.com/api/character?page=1')
  .then(data => showItens(data))
  .catch(_err => showErr())
