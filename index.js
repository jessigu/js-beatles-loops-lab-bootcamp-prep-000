// add solution here
const musician = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instrument = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musician, instrument) {
  let empty = [];
  for (let i = 0; i <= musician.length; i++) {
    empty.push(`${musician[i]} plays ${instrument[i]}`);
    i++;
  }
  return empty;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let i = 0;
  while (i <= facts.length) {
    facts.push(facts[i] + '!!!');
    i++
  }
  return facts;
}