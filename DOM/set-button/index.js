// export function setButton(buttonText) {
//   const titleElem = document.querySelector("body");
//   titleElem.createElement.innerHTML = "<button>buttonText</button>";

// }
export function setButton(buttonText) {
  const bodyElem = document.querySelector("body");
  const buttonElem = document.createElement("button");
  buttonElem.innerHTML = `<button>buttonText</button>`;

}


