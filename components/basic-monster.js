class Monster {
  constructor(weapons, character) {
    this.health = 100;
    this.actions = Math.ceil(Math.random() * 5);;
    this.character = character;
    this.weapons = weapons;
    this.alive = true;
    this.currentHit = 0;
    this.currentWeapon = '';
    this.restoredHealth = 0;
    this.demage = 0;
  }

  get armor() {
    return Math.round(Math.random() * 20);
  }

  addHealth() {
    return Math.round(Math.random() * 20);
  }

  getWeapon() {
    this.currentWeapon = this.weapons[Math.floor(Math.random() * this.weapons.length)];
    return this.currentWeapon;
  }

  hit() {
    this.getWeapon();
    const weapon = this.currentWeapon;

    return Math.ceil(Math.random() * (weapon.maxDemage - weapon.minDemage)) + weapon.minDemage;
  };

  performAction(action, opponent, reportAttack, reportRecovery) {
    if (!this.actions >= action) return;
    this.canAttack() ? this.attack(opponent) : this.increaseHealth();
    this.currentHit
      ? reportAttack(this.character, this.currentWeapon.name, this.currentHit, opponent)
      : reportRecovery(this.character, this.restoredHealth);
  }

  canAttack() { 
    return !this.healthForRest || this.health >= this.healthForRest;
  };

  attack(opponent) {
    const hit = this.currentHit = this.hit();
    return this.isAttackSuccessful(hit, opponent) ? opponent.decreaseHealth(hit) : opponent.health; 
  };

  isAttackSuccessful(hit, opponent) {
    return (hit > opponent.armor || hit === 20) && hit !== 1;
  };

  decreaseHealth(demage) {
    this.demage = demage;
    if (this.health - demage <= 0) return this.setDeath();
    this.health -= demage;
  };

  increaseHealth() {
    this.currentHit = 0;
    this.restoredHealth = this.addHealth();
    this.health = this.health + this.restoredHealth > 100
      ? 100
      : this.health + this.restoredHealth;
    return this.health;
  };

  setDeath() {
    this.health = 0;
    return this.alive = false;
  }
};
