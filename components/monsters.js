class Calm extends Monster {
  constructor(weapons, character = 'Calm'){
    super(weapons, character);
    this.healthForRest = 50;
    this.restsUsed = 0;
  };
};

class AbsentMinded extends Monster {
  constructor(weapons, character = 'Absent-minded') {
    super(weapons, character);
    this.restsUsed = 0;
  };

  get healthForRest() {
    return Math.round(Math.random() * 100);
  };
};

class Careful extends Monster {
  constructor(weapons, character = 'Careful') {
    super(weapons, character);
    this.healthForRest = 75;
    this.restsUsed = 0;
  };
};

class Berserk extends Monster {
  constructor(weapons, character = 'Berserk') {
    super(weapons, character);
    this.restsUsed = 0;
  };
};
