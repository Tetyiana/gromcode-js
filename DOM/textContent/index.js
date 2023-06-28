export function getTitle() {
  const titleElem = document.querySelector('.title');
  // console.log(titleElem.textContent);
  return titleElem.textContent;
}
getTitle();

export function getDescription() {
  const description = document.querySelector('.about');
  // console.log(description.innerText);
  return description.innerText;
}
getDescription();

export function getPlans() {
  const plans = document.querySelector('.plans');
  // console.log(plans.innerHTML);
  return plans.innerHTML;
}
getPlans();

export function getGoal() {
  const goal = document.querySelector('.goal');
  // console.log(goal.outherHTML);
  return goal.outherHTML;
}
getGoal();