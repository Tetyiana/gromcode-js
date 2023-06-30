const clickButton = document.querySelector('.single-use-btn');

const outputText = () => {
  console.log('clicked');
  clickButton.removeEventListener('click', outputText);
};

clickButton.addEventListener('click', outputText);
