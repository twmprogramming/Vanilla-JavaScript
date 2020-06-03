async function getJokes(e) {
  e.preventDefault();
  const number = document.querySelector('input[type="number"]').value;

  const url = `http://api.icndb.com/jokes/random/${number}`;
  const response = await fetch(url);

  const resData = await response.json();

  console.log(resData);

  let output = '';

  resData.value.forEach((joke) => {
    
    output += `<li>${joke.joke} </li>`;
  });

  document.querySelector('.jokes').innerHTML = output;
}

document.querySelector('.get-jokes').addEventListener('click', getJokes);
