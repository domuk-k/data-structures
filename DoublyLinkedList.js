class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    if (this.isEmpty()) {
      /* then, initialize. */
      const newNode = new Node(value, null, null);
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    const newNode = new Node(value, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;
    this.size++;
  }

  append(value) {
    if (this.isEmpty()) {
      /* then, initialize. */
      const newNode = new Node(value, null, null);
      this.head = newNode;
      this.tail = newNode;
      this.size++;
      return;
    }
    this.tail;
    const newNode = new Node(value, this.tail, null);
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  access(index) {
    if (this.isEmpty()) return null;
    if (index >= this.size) return null;

    // backward access
    if (index < 0) {
      let targetNode = this.tail;
      for (let i = 0; i < Math.abs(index) - 1; i++)
        targetNode = targetNode.prev;

      return targetNode;
    }

    let targetNode = this.head;
    for (let i = 0; i < index; i++) targetNode = targetNode.next;

    return targetNode;
  }

  setHead(index) {
    if (this.isEmpty()) return null;
    this.head = this.access(index);
    this.size -= index;
  }

  insert(index, value) {
    const targetNode = this.access(index);
    const prevNode = targetNode.prev;
    const newNode = new Node(value, prevNode, targetNode);

    prevNode.next = newNode;
    targetNode.prev = newNode;

    this.size++;
  }

  remove(index) {
    const targetNode = this.access(index);
    targetNode.prev.next = targetNode.next;
    targetNode.next.prev = targetNode.prev;

    this.size -= 1;
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

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.print();

for (let i = 0; i < 10; i++) {
  doublyLinkedList.append(i + 1);
}
doublyLinkedList.print();

for (let i = 0; i < 10; i++) {
  doublyLinkedList.prepend(i + 1);
}
doublyLinkedList.print();

const node = doublyLinkedList.access(3);
console.log(`myList.access(3) = ${JSON.stringify(node.value)}`);

doublyLinkedList.insert(8, 128);
doublyLinkedList.print();

doublyLinkedList.remove(4);
doublyLinkedList.print();

doublyLinkedList.setHead(10);
doublyLinkedList.print();
