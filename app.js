const UiCtrl = (function () {
  const UISelectors = {
    numberBtn: '.get-jokes',
    numberInput: '#number',
    output: '.jokes',
  };

  return {
    addToList: function (joke) {
      document.querySelector(
        UISelectors.output
      ).innerHTML += `<li>${joke.joke} </li>`;
    },

    getNumberOfJokes: function () {
      return {
        number: document.querySelector(UISelectors.numberInput).value,
      };
    },
    getSelectors: function () {
      return UISelectors;
    },
  };
})();

const ItemCtrl = (function () {
  const data = {
    url: 'http://api.icndb.com/jokes/random/',
  };

  return {
    async getJokes(number) {
      const response = await fetch(`${data.url}${number}`);
      const resData = await response.json();
      console.log(resData);
      return resData.value;
    },
  };
})();

const App = (function (UiCtrl, ItemCtrl) {
  // Load Event Listeners
  const loadEventListeners = function () {
    const UISelectors = UiCtrl.getSelectors();

    document
      .querySelector(UISelectors.numberBtn)
      .addEventListener('click', getJokes);
  };

  // Test get number function
  //   const getNumber = function (e) {
  //     e.preventDefault();
  //     console.log(UiCtrl.getNumberOfJokes().number);
  //   };

  const getJokes = function (e) {
    e.preventDefault();
    ItemCtrl.getJokes(UiCtrl.getNumberOfJokes().number).then((results)=>{
        results.forEach((joke)=>{
            UiCtrl.addToList(joke);
        })
    });
  };

  return {
    // Initialize the event listeners
    init: function () {
      loadEventListeners();
    },
  };
})(UiCtrl, ItemCtrl);

App.init();
