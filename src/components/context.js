import {v4 as uuid } from 'uuid';

const items = []

for (let i = 1; i <= 10; i++) {
  items.push({ value: i, id: uuid});
  items.push({ value: i, id: uuid});
}


function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

export default shuffle(items);

