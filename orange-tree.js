class OrangeTree {
  constructor(age = 0, height = 0) {
    this.age = age;
    this.height = height;
    this.orange = [];
  }

  passGrowingSeason() {
    let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
    this.age += 1;
    if (this.height < 25) this.height += 2.5;
    if (this.age > 6) {
      for (let i = 0; i < randomNum; i++) {
        this.orange.push(new Orange())
      }
    }
    console.log(this.orange)
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
    return this.age >= 100
    // if (this.age >= 100) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  hasOranges() {
    // Возвращает true, если на дереве есть апельсины, иначе false
    return this.orange.length > 0
    // if (this.orange.length > 0) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  pickAnOrange() {
    //  Returns an Orange if there are any
    //  Raises a NoOrangesError otherwise
    if (!this.hasOranges()) {
      throw Error('This tree has no oranges');
    }
    //  orange-picking logic goes here
    return this.orange.pop();
    
  }
}
// const orange = new OrangeTree(7,10)
// console.log(orange)
// orange.passGrowingSeason()
// console.log(orange)
// console.log(orange.isMature())
// console.log(orange.isDead())
// orange.passGrowingSeason()
// console.log(orange)
// orange.hasOranges()
// orange.passGrowingSeason()
// console.log(orange)

// module.exports = OrangeTree;
