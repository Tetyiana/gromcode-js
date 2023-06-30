const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const eventsListElem = document.querySelector('.events-list');
let removeHandlersBtn = true;
const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');


divElem.addEventListener('click', logGreyDiv, true);
divElem.addEventListener('click', logGreenDiv);

pElem.addEventListener('click', logGreyP, true);
pElem.addEventListener('click', logGreenP);

spanElem.addEventListener('click', logGreySpan, true);
spanElem.addEventListener('click', logGreenSpan);

const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  eventsListElem.innerHTML = '';
});

const removeHandlers = document.querySelector('.remove-handlers-btn');
removeHandlers.removeEventListener('click', () => {
  removeHandlersBtn = false;
});




// const divElem = document.querySelector('.rect_div');
// const pElem = document.querySelector('.rect_p');
// const spanElem = document.querySelector('.rect_span');

// const eventsListElem = document.querySelector('.events-list');
// const clearBtn = document.querySelector('.clear-btn');
// const removeHandlersBtn = document.querySelector('.remove-handlers-btn');

// let handlersEnabled = true;

// const logTarget = (text, color) => {
//   if (handlersEnabled) {
//     eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
//   }
// };

// const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
// const logGreyP = logTarget.bind(null, 'P', 'grey');
// const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

// const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
// const logGreenP = logTarget.bind(null, 'P', 'green');
// const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

// divElem.addEventListener('click', logGreyDiv, true);
// divElem.addEventListener('click', logGreenDiv);

// pElem.addEventListener('click', logGreyP, true);
// pElem.addEventListener('click', logGreenP);

// spanElem.addEventListener('click', logGreySpan, true);
// spanElem.addEventListener('click', logGreenSpan);

// clearBtn.addEventListener('click', () => {
//   if (handlersEnabled) {
//     eventsListElem.innerHTML = '';
//   }
// });

// removeHandlersBtn.addEventListener('click', () => {
//   handlersEnabled = false;
// });
