const Orange = require('../orange');
const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {

  let tree;
  const age = 5;
  const height = 4;
  const orange = 10;
  beforeEach(() => {
    tree = new OrangeTree(age, height, orange);
  });

  describe('age', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('has an age', () => {
      expect(tree.age).toBe(age);
    });
  });

  describe('height', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('has a height', () => {
      expect(tree.height).toBe(height);
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('should change the tree age', () => {
      // const height = 22.5;
      // const tree = new OrangeTree(25, height);
      expect(tree.passGrowingSeason()).not.toBe(tree.height);
    });

    test('should make the tree grow', () => {
      // Это должно быть более явным. Насколько должно вырасти дерево?
      tree.passGrowingSeason();
      expect(tree.height).toBe(height+2.5);
    });

    // Если дерево достаточно взрослое, чтобы плодоносить
    test('should cause the tree to produce oranges', () => {
      expect(tree.height).toBe(height+2.5);
    });

  });

  describe('isMature', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('returns true if tree is old enough to bear fruit', () => {
      expect(tree.height).toBe(height+2.5);
    });

    test('returns false if tree is not old enough to bear fruit', () => {
      expect(tree.height).toBe(height+2.5);
    });
  });

  describe('isDead', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('should return false for an alive tree', () => {
      expect(tree.height).toBe(height+2.5);
    });

    test('should return true for a dead tree', () => {
      expect(tree.height).toBe(height+2.5);
    });
  });

  describe('hasOranges', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('should return true if oranges are on the tree', () => {
      expect(tree.height).toBe(height+2.5);
    });

    test('should return false if the tree has no oranges', () => {
      expect(tree.height).toBe(height+2.5);
    });
  });

  describe('pickAnOrange', () => {
    beforeEach(() => {
      tree = new OrangeTree(age, height, orange);
    });
    test('should return an orange from the tree', () => {
      expect(tree.height).toBe(height+2.5);
    });

    test('the returned orange should no longer be on the tree', () => {
      expect(tree.height).toBe(height+2.5);
    });

    test('should raise an error if the tree has no oranges', () => {
      expect(tree.height).toBe(height+2.5);
    });
  });
});

