class Stack {
  constructor(capacity) {
    this.capacity = capacity;
    this.top = 0;
    this.array = new Array(capacity);
  }

  push(value) {
    if (this.top === this.capacity) {
      console.error('overflow');
      return false;
    }
    // this.array.push(value)
    this.array[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.isEmpty()) {
      console.error('underflow');
      return undefined;
    }
    // no need to pop out which would be the overhead
    // As this.top pointer moves, push method will overwrite the cell
    this.top--;
  }

  peek() {
    return this.array[this.top - 1];
  }

  isEmpty() {
    // return this.array.every((v) => v === undefined);
    return this.top === 0;
  }

  print() {
    console.log(this.array);
  }
}

const stack = new Stack(5);
stack.print();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();

stack.push(5);
stack.print();

console.log(stack.pop());
console.log(stack.pop());
stack.print();

console.log(stack.peek());
stack.print();

console.log(stack.pop());
console.log(stack.pop());
stack.print();
