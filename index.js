// add solution here
const musician = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instrument = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musician, instrument) {
  let array = [];
  for (var i = 0; i < musician.length; i++) {
    array.push(musician[i] + ' plays ' + instrument[i]);
  }
  return array;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i <= facts.length) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return empty;
}
