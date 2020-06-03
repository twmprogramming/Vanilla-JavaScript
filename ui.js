class UI {
  constructor() {
    this.jokesBtn = document.querySelector('.get-jokes');
    this.numInp = document.querySelector('#number');
    this.output = document.querySelector('.jokes');
  }

  appendToList(joke) {
    this.output.innerHTML += `<li>${joke.joke} </li>`;
  }
}
