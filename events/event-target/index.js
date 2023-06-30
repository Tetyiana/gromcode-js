const elemButtonOne = document.querySelector('.btn:nth-of-type(1)');
const elemButtontwo = document.querySelector('.btn:nth-of-type(2)');

function handleClick(event) {
  console.log(event.target.textContent);
}

elemButtonOne.addEventListener('click', handleClick);
elemButtontwo.addEventListener('click', handleClick);
