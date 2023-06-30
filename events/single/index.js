const clickButton = document.querySelector('.single-use-btn');
const outputText = () => { console.log('clicked') };
clickButton.addEventListener('click', outputText);
clickButton.removeEventListener('click', outputText);