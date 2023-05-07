const getPeople = obj => Object.values(obj).flat().map(element => element.name);


const obj = {
  room1: [
    { name: 'Jack' },
    { name: 'Andrey' },
    { name: 'Ann' },
    { name: 'Vasyl' },
  ],
  room2: [
    { name: 'Den' },
    { name: 'Jon' },
    { name: 'Katya' },
  ],
  room3: [
    { name: 'Petya' },
    { name: 'Nastya' },
    { name: 'Victor' },
  ],
}
getPeople(obj);