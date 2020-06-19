import { objIMG } from './apiService.js';
import imageCard from '../templates/imagecard.hbs';
const refs = {
  input: document.querySelector('[name="query"]'),
  list: document.querySelector('.gallery'),
  btn: document.querySelector('.button_more'),
};

refs.input.addEventListener('input', handleSubmit);
refs.btn.addEventListener('click', handleClickMoreIMG);
let searchQuery = '';
function handleSubmit(e) {
  // e.preventDefault();
  const input = e.currentTarget;
  if (input.value.length === 0) return;
  searchQuery = input.value;
  refs.list.innerHTML = '';
  // input.reset();
  objIMG.setWord(input.value);
  objIMG.resetPage();
  makeFetch();
  // e.currentTarget.reset();
}
function handleClickMoreIMG() {
  makeFetch();
}
export function makeFetch() {
  objIMG
    .makeFetchImg()
    .then(data => {
      console.log(data);
      console.log(imageCard);

      refs.list.insertAdjacentHTML('beforeend', imageCard(data.hits));
      console.log(...data.hits);

      if (objIMG.page > 1) {
        refs.btn.classList.add('button_more--active');
        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
      }
    })
    .catch(err => console.log(err));
}
