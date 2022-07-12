class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;

        let [temp, prev] = [this.head, this.head];

        while (temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;

        this.length--;
        if (this.length == 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;

    }
    unshift(value) { }
    insert(index, value) { }
}


// let myLinkedList = new LinkedList(4);
// myLinkedList.push(7);
// myLinkedList.push(10);

// console.log(myLinkedList);

// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
// console.log(myLinkedList.pop());
