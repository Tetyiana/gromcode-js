// const buttonElem = document.querySelector('btn');
// const handleClick = (event) => {
//   console.log(event.target.textContent);
// };
// buttonElem.addEventListener("click", handleClick);

const elemButtonOne = document.querySelector('.btn:nth-of-type(1)');
const elemButtontwo = document.querySelector('.btn:nth-of-type(2)');

function handleClickOne(event) {
  console.log(event.target.textContent);
}

// function handleClickTwo(event) {
//   console.log(event.target.textContent);
// }

elemButtonOne.addEventListener('click', handleClick);
elemButtontwo.addEventListener('click', handleClick);
