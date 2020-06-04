const createCube = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  <div class="side front"></div>
            <div class="side back"></div>
            <div class="side right"></div>
            <div class="side left"></div>
            <div class="side top"></div>
            <div class="side bottom"></div>
  `;

  div.classList.add('cube');
  document.querySelector('.container').appendChild(div);

  getImages();
};

async function getImages() {
  const response = await fetch('images.json');

  const resData = await response.json();

  

  document.querySelectorAll('.side').forEach((side) => {
    let rand = Math.floor(Math.random() * resData.length);
    side.style.backgroundColor = resData[rand].color;
  });
}

createCube();
