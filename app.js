const ui = new UI();
const jokes = new Jokes();

const getJokes = () => {
  const num = ui.numInp.value;
  jokes.getJokes(num).then((results) => {
    results.forEach((joke) => {
      ui.appendToList(joke);
    });
  });
};

ui.jokesBtn.addEventListener('click', (e) => {
  getJokes();
  e.preventDefault();
});
