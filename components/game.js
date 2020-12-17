class Game {
  constructor(monster1, monster2) {
    this.monster1 = monster1;
    this.monster2 = monster2;
    this.count = 0;
    this.currentRound = 1;
    this.maxAmountOfActions = this.setMaxAmountOfActions();
  }

  setMaxAmountOfActions() {
    return this.monster1.actions < this.monster2.actions ? this.monster2.actions : this.monster1.actions;
  }

  start() {
    while (this.monster1.alive && this.monster2.alive) {
      if(this.currentRound > 200) return this.finish(); 
      this.round(this.monster1, this.monster2);
    }
  }

  round(monster1, monster2) {
    console.log(`Round ${this.currentRound} started!`);
    console.log(`${monster1.character} HP = ${monster1.health}`);
    console.log(`${monster2.character} HP = ${monster2.health}`);

    for (let action = 1; action <= this.maxAmountOfActions; action++) {
      monster1.performAction(action, monster2, this.reportAttack, this.reportRecovery);

      if (!monster2.alive) return this.finish(monster1);
      monster2.performAction(action, monster1, this.reportAttack, this.reportRecovery);

      if (!monster1.alive) return this.finish(monster2);
    }

    this.currentRound += 1;
  }

  reportAttack(monster, weapon, opponent) {
    console.log(`${monster} attacks ${opponent.character} with ${weapon} dealing ${opponent.demage} damage`);
  }

  reportRecovery(character, restoredHealth) {
    console.log(`${character} rests and regains ${restoredHealth} HP.`);
  }

  finish(monster) {
    const result = monster ? `The ${monster.character} monster is winner!` : 'No winner'; 
    console.log(result);
    window.alert(result);
  }
}
