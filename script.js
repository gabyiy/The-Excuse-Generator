var but = document.querySelector('.but');

let who = [' I think i ', ' My brother ', ' Alexa ', ' The driver '];
let action = [' Lost ', ' missed ', ' borke ', ' was not able '];
let what = [' to deliver', ' the keys', ' the call ', ' my foot '];
let when = [
  ' when jogging ',
  ' this morning ',
  ' when her mom called ',
  ' the package today ',
];

let conc = [];
let randomNum = 0;

function onLoad() {
  randomNum = Math.round(Math.random() * 4) + 1;
  if (randomNum === 1) {
    conc = who[0].concat(action[2], what[3], when[0]);
    document.querySelector('.random').textContent = conc;
  } else if (randomNum === 2) {
    conc = who[1].concat(action[0], what[1], when[1]);

    document.querySelector('.random').textContent = conc;
  } else if (randomNum === 3) {
    conc = who[2].concat(action[1], what[2], when[2]);

    document.querySelector('.random').textContent = conc;
  } else if (randomNum === 4) {
    conc = who[3].concat(action[3], what[0], when[3]);

    document.querySelector('.random').textContent = conc;
  }
}
but.addEventListener('click', onLoad);
