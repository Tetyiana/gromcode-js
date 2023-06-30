const buttonElem = document.querySelector('btn');
const handleClick = (event) => {
  console.log(event.target.textContent);
};
buttonElem.addEventListener("click", handleClick);
