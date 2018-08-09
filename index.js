// add solution here
const musician = ['John Lennon', 'Paul McCartney', 'George Harrison', 'Ringo Starr'];
const instrument = ['Guitar', 'Bass Guitar', 'Lead Guitar', 'Drums'];

function theBeatlesPlay(musician, instrument) {
  let empty = [];
  for (let i = 0; i <= musician.length; i++) {
    empty.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return empty;
}
