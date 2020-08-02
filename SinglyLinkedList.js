class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    // return !!this.head
    return this.head === null;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    if (this.isEmpty()) {
      this.head = new Node(value, null);
      return;
    }

    let lastNode = this.head;

    while (true) {
      if (lastNode.next) lastNode = lastNode.next;
      else break;
    }

    lastNode.next = new Node(value, null);
  }

  setHead(index) {
    // this.head = this.access(index); //trivial under access method
    if (this.isEmpty()) return null;

    let targetNode = this.head;
    for (let i = 0; i < index; i++) targetNode = targetNode.next;

    this.head = targetNode;
    return this.head;
  }

  access(index) {
    if (this.isEmpty()) return null;

    let targetNode = this.head;
    for (let i = 0; i < index; i++) targetNode = targetNode.next;

    return targetNode.value;
  }

  insert(index, value) {
    if (index === 0 || this.isEmpty()) {
      this.prepend(value);
      return;
    }

    let prevNode = this.head;
    for (let i = 0; i < index - 1; i++) prevNode = prevNode.next;
    prevNode.next = new Node(value, prevNode.next);
  }

  remove(index) {
    if (index === 0) {
      if (this.isEmpty()) return;
      else this.head = this.head.next;
    }

    let prevNode = this.head;

    for (let i = 0; i < index - 1; i++) {
      prevNode = prevNode.next;
    }
    prevNode.next = prevNode.next.next;
  }

  print() {
    let curr = this.head;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let s = '';
    while (curr !== null) {
      s += `${curr.value} `;
      curr = curr.next;
    }
    console.log(`[${s}]`);
  }
}

const doublyLinkedList = new SinglyLinkedList();
doublyLinkedList.print();

for (let i = 0; i < 10; i++) {
  doublyLinkedList.append(i + 1);
}
doublyLinkedList.print();

for (let i = 0; i < 10; i++) {
  doublyLinkedList.prepend(i + 1);
}
doublyLinkedList.print();

const value = doublyLinkedList.access(3);
console.log(`myList.access(3) = ${value.value}`);

doublyLinkedList.insert(8, 128);
doublyLinkedList.print();

doublyLinkedList.remove(4);
doublyLinkedList.print();

doublyLinkedList.setHead(10);
doublyLinkedList.print();
