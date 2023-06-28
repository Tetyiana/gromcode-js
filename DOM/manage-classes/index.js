export function manageClasses() {
  const addClasses = document.querySelector('.one');
  addClasses.classList.add('selected');
  const removeClasses = document.querySelector('.two');
  removeClasses.classList.remove('selected');
  const toggleClasses = document.querySelector('.three');
  toggleClasses.classList.toggle('three_done');
  const anotherClasses = document.querySelector('.four');
  if (anotherClasses.classList.contains('some-class')) {
    anotherClasses.classList.add('another-class');
  }
}
manageClasses();

