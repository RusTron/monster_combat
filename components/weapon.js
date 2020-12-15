class Weapon {
  constructor(name, minValue = 0, maxValue = 20) {
    this.name = name;
    this.minDemage = minValue;
    this.maxDemage = maxValue;
  }
};

const knife = new Weapon('Knife', 0, 5);
const rapier = new Weapon('Rapier', 1, 10);
const sabel = new Weapon('Sabel', 5, 15);
const broadsword = new Weapon('Broadsword', 5, 15);
const cutlas = new Weapon('Cutlas', 5, 18);
const pistol = new Weapon('Pistol', 10, 20);
const musketon = new Weapon('Musketon', 15, 20);
const weapons = [knife, rapier, sabel, cutlas, broadsword, pistol, musketon];
