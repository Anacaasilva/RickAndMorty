const select = document.getElementById('select');
const topics = document.getElementsByClassName('topics');

const setMargin = val => select.style.marginBottom = `${val}px`;

topics[0].addEventListener('mouseenter', () => setMargin(140));
topics[1].addEventListener('mouseenter', () => setMargin(-58));
topics[2].addEventListener('mouseenter', () => setMargin(-255));