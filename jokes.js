class Jokes {
  async getJokes(num) {
    const url = `http://api.icndb.com/jokes/random/${num}`;
    const response = await fetch(url);
    const resData = await response.json();
    return resData.value;
  }
}
