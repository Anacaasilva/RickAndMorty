const list = document.getElementById('list');

const showItens = ({ results }) => {

  results.map(({ name, image, status }) => {

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
            <button class="button" type="button">Ver sobre</button>
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
