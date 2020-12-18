'use strict';

const names = document.querySelectorAll('.game__opponents--name');
const selects = document.querySelectorAll('.game__select');
const form = document.querySelector('.game');
const monsterClasses = [Calm, AbsentMinded, Berserk, Careful];

selects.forEach(select => (
  select.addEventListener('change', function(event) {
  switch(event.target.id) {
    case 'monster1':
      return names[0].innerText = event.target.value;
    case 'monster2':
      return names[1].innerText = event.target.value;
    default:
      return;
    }
  })
));

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const monsters = [];
  names.forEach(item => {
    monsters.push(monsterClasses.find(monster => {
      let name = item.innerText;
      name = name.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('');

      if (monster.name === name) return monster}));
  })

  const monster1 = new monsters[0](weapons);
  const monster2 = new monsters[1](weapons);
  const game = new Game(monster1, monster2);
  game.start();
});
