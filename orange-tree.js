class OrangeTree {
  constructor(age, height, orange) {
    this.age = age;
    this.height = height;
    this.orange = orange;
  }

  passGrowingSeason() {
    this.age += 1;
    this.orange = 0;
    while (this.height < 25) this.height += 2.5;
    if (this.age > 6) this.orange = Math.floor(Math.random() * (300 - 100) + 100)
  }

  isMature() {
    // Возвращает true, если дерево достаточно взрослое, чтобы приносить плоды, иначе false 
    if (this.age >= 6) {
      return true;
    } else {
      return false;
    }
  }

  isDead() {
    if (this.age >= 100) {
      return true;
    } else {
      return false;
    }
  }

  hasOranges() {
    // Возвращает true, если на дереве есть апельсины, иначе false
    if (this.orange > 0) {
      return true;
    } else {
      return false;
    }
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    //  orange-picking logic goes here
    this.orange -= 1;
  }
}
module.exports = OrangeTree;
