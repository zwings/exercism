class Node {
    constructor(element) {
        this.element = element;
        this.previous = null;
        this.next = null;
    };
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    };
    push(number) {
        const node = new Node(number);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            };
            currentNode.next = node;
            node.previous = currentNode;
            this.tail = node;
        }
        this.length++;
    };
    pop() {
        if (this.length > 0) {
            var currentNode = this.tail;
            var result = currentNode.element;
            if (currentNode.previous !== null) {
                currentNode = currentNode.previous;
                currentNode.next = null;
                this.tail = currentNode;
            } else {
                this.head = null;
                this.tail = null;
            }
            return result;
        }
        this.length--;
    };
    shift() {
        if (this.length > 0) {
            var currentNode = this.head;
            var result = currentNode.element;
            if (currentNode.next !== null) {
                currentNode = currentNode.next;
                currentNode.previous = null;
                this.head = currentNode;
            } else {
                this.head = null;
                this.tail = null;
            }
            return result;
        }
        this.length--;
    };
    unshift(number) {
        const node = new Node(number);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            var currentNode = this.tail;
            while (currentNode.previous) {
                currentNode = currentNode.previous;
            };
            currentNode.previous = node;
            node.next = currentNode;
            this.head = node;
        }
        this.length++;
    };
    count() {
        return this.length;
    };
    delete(number) {
        var currentNode = this.head;
        
        while (currentNode.element !== number) {
            currentNode = currentNode.next;
        };
        var result = currentNode;
        if (currentNode.previous !== null && currentNode.next !== null) {
           currentNode.previous.next = currentNode.next;
           currentNode.next.previous = currentNode.previous;
        } else {
            this.head = null;
            this.tail = null;
        }
        this.length--;
        return result;
    }


}

module.exports = LinkedList;