class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    this.addition = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.length > pos) {
      return this.items[pos];
    } else throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }

    this.items.forEach(num => {
      this.addition += num;
    });
    return this.addition;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    for (let i = 0; i < this.items.length; i++) {
      this.addition += this.items[i];
    }
    const average = this.addition / this.items.length;
    return average;
  }
}

module.exports = SortedList;
