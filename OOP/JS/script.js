class House {
    // Takes all the parameters we want to put INTO our house when we create a NEW INSTANCE or a NEW OBJECT of this House (This is a Specific Constructor).
    constructor(color) {
        this.color = color; // "this.color" refers to the object's color attribute.
    }

    // Methods
    getFurniture() {
        return 'sofa'
    }
}
/* This will be actually the instantiated OBJECT of our house (Here an object of the House class will be stored).
 * We use the NEW keyword in order to instantiate a new object of the House class into the houseObject*/
const houseObject = new House('red'); // New house of RED color will be instantiated.
const houseObject2 = new House('blue'); // New house of RED color will be instantiated.

// Unlike in Java, we don't use PRIVATE, PUBLIC, PROTECTED keywords, so we can access the attributes value without using a getter method as proxy.
console.log(houseObject.color);
console.log(houseObject.getFurniture());

console.log(houseObject2.color);
console.log(houseObject2.getFurniture());