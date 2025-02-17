// class LinkedList {
//     set append(value) {

//     }
// }

// class Node {

//   constructor(Node, NextNode) {
//     Node = null;
//     NextNode = null;
//   }
// }

class Node {
  constructor(data = null, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // add an element as the first one
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }

  //   print all node data
  printData() {
    let current = this.head;

    while (current) {
      console.log(`${current.data}`);
      current = current.nextNode;
    }
    console.log("null");
  }

  //   adds an element as last
  append(value) {
    let node = new Node(value);
    let current;

    // if the list is empty
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }

    this.size++;
  }

  //   function returns the size
  Size() {
    return this.size;
  }

  //   return the first element
  Head() {
    return this.head;
  }
  // return the last element
  tail() {
    let current = this.Head();
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  //   return the node data at index
  at(index) {
    if (index > this.Size()) {
      return this.tail();
    } else if (index === 0) {
      return this.Head();
    } else {
      let count = 0;
      let current = this.Head();
      while (count < index) {
        current = current.nextNode;
        count++;
      }

      return current.data;
    }
  }

  //   removes the last element in a list
  pop() {
    if (!this.head) {
      return;
    }
    if (!this.head.nextNode) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
    this.size--;
  }

  //
  contains(value) {
    let currentValue = this.head;
    // let count = 0;

    while (currentValue) {
      if (currentValue.data === value) {
        return true;
      }

      currentValue = currentValue.nextNode;
    }

    return false;
  }

  //   return the index of the node containing the value otherwise null
  find(value) {
    let currentValue = this.head;
    let count = 0;

    while (currentValue) {
      if (currentValue.data === value) {
        return count;
      }

      currentValue = currentValue.nextNode;
      count++;
    }

    return null;
  }

  //   print the list as a string
  toString() {
    let current = this.head;

    while (current) {
      if (current.nextNode) {
        console.log(`(${JSON.stringify(current.data)}) ->`);
      }
      console.log(`->(${JSON.stringify(current.data)})`);
      current = current.nextNode;
    }
  }

  //
  insertAt(value, index) {
    if (index > this.Size()) {
      this.tail().nextNode = new Node(value);
    } else if (index === 0) {
       this.head.data = value;
    } else {
      let count = 0;
      let current = this.Head();
      let previous;
      while (count < index) {
        current = current.nextNode;
        count++;
      }

      let newNode = new Node(value);
       previous = current;
       previous.nextNode = newNode;
       newNode.nextNode = current;
       
    }
  }
}

const ll = new LinkedList();
ll.prepend(3000);
ll.prepend(4000);
ll.prepend(7000);


ll.append(7000);
ll.prepend(8000);
// ll.toString();
ll.printData();
// ll.insertAt(1000, 5);
// ll.printData();
// console.log("the size before popping is: ", ll.Size());
// console.log(ll.Head());
// console.log(ll.tail());
// console.log(ll.at(2));
// ll.pop();

// ll.printData();
// console.log("the size after popping is: ", ll.Size());

// console.log(ll.contains(3002));

// console.log("find me this 500: ", ll.find(8000));
