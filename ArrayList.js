class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  prepend(value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);
      /* O(N) : move to newly allocated space
      one by one as capacity runs out */
      for (let i = 0; i < this.length; i++) {
        newArray[i + 1] = this.array[i];
      }

      this.array = newArray;
    } else {
      for (let i = this.length - 1; i >= 0; i--) {
        this.array[i + 1] = this.array[i];
      }
    }

    this.array[0] = value;
    this.length++;
  }

  append(value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);
      /* O(N) : move to newly allocated space
      one by one as capacity runs out */
      for (let i = 0; i < this.length; i++) {
        newArray[i] = this.array[i];
      }

      this.array = newArray;
    }

    this.array[this.length] = value;
    this.length++;
  }

  setHead(index) {
    if (index > this.length) {
      return false;
    }
    // const newArray = new Int32Array(this.capacity - index);
    // for (let i = index; i < this.array.length; i++) {
    //   newArray[i - index] = this.array[i];
    // }
    // ↑ is what TypedArray.prototype.subarray() basically does
    this.array = this.array.subarray(index, this.capacity);
    this.length = this.length - index;
    this.capacity = this.capacity - index;

    return true;
  }

  access(index) {
    if (index > this.length) {
      return undefined;
    }
    return this.array[index];
  }

  insert(index, value) {
    if (index > this.length) {
      return false;
    }

    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);

      for (let i = 0; i < index; i++) {
        newArray[i] = this.array[i];
      }

      for (let i = index + 1; i < this.length; i++) {
        newArray[i + 1] = this.array[i];
      }

      this.array = newArray;
    } else {
      for (let i = this.length - 1; i >= index; i--) {
        this.array[i + 1] = this.array[i];
      }
    }

    this.array[index] = value;
    this.length++;

    return true;
  }

  remove(index) {
    if (index > this.length) {
      return false;
    }

    for (let i = index; i < this.length - 1; i++) {
      this.array[i] = this.array[i + 1];
    }
    this.length--;

    return true;
  }

  print() {
    let s = '';
    for (let i = 0; i < this.length; i++) {
      s += `${this.array[i]} `;
    }
    console.log(`[${s}]`);
  }
}

arrayList = new ArrayList(8);
arrayList.print();

for (let i = 0; i < 10; i++) {
  arrayList.append(i + 1);
}
arrayList.print();

for (let i = 0; i < 10; i++) {
  arrayList.prepend(i + 1);
}
arrayList.print();

const value = arrayList.access(3);
console.log(`myList.access(3) = ${value}`);

arrayList.insert(8, 128);
arrayList.print();

arrayList.remove(4);
arrayList.print();

arrayList.setHead(10);
arrayList.print();
