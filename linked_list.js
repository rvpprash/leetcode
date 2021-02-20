function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
   }

   function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
   }

   function remove(item) {
    var currNode = this.find(item);
    if (!(currNode.next == null)) {
      currNode.previous.next = currNode.next;
      currNode.next.previous = currNode.previous;
      currNode.next = null;
      currNode.previous = null;
    }
   }

   function display() {
    var currNode = this.head;
    while (!(currNode.next == null)) {
       console.log(currNode.next.element);
       currNode = currNode.next;
    }
   }

  // Helper function to find a particular node.
   function find(item) {
    var currNode = this.head; //  create a new node and assign it as the head node.

    while (currNode.element != item) {
       currNode = currNode.next;
    }
    return currNode;
   }

   function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
   }

   var personList = new LList();
   personList.insert("Leo", "head");
   personList.insert("Sheldon", "Leo");
   personList.insert("John", "Sheldon");
   personList.insert("Bruce", "John");

   personList.display();
   personList.remove("Sheldon");
   console.log("**After removal**");
   personList.display();

/* OUTPUT: -
  Leo
  Sheldon
  John
  Bruce
  **After removal**
  Leo
  John
  Bruce */
