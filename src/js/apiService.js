const baseURL = 'https://pixabay.com/api';
const apiKey = '17101210-5860812662443c66832a02556';

export const objIMG = {
  page: 1,
  findWord: '',
  perpage: 12,

  makeFetchImg() {
    // const mainUrl = `/?image_type=photo&orientation=horizontal&q=${this.findWord}&page=${this.page}&per_page=12&key=`;
    const mainUrl = `/?image_type=photo&orientation=horizontal&q=${this.findWord}&page=${this.page}&per_page=${this.perpage}&key=`;

    return fetch(baseURL + mainUrl + apiKey)
      .then(res => {
        console.log(res);
        this.page += 1;
        // this.perpage += 12;
        return res.json();
      })
      .catch(err => {
        throw err;
      });
  },

  setWord(findWord) {
    this.findWord = findWord;
  },

  resetPage() {
    this.page = 1;
  },
};
