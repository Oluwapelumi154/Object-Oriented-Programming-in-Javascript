// An Object is a Collection of key-value pairs
const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

//Object can also be created using factories function or constructors Function

//  When an object has more than one method we say the object has behaviour

// Factory Function

function createCircles(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const Circle = createCircles(1);
console.log(Circle, "Factory Function");

//Constructor Function

//Object can also be created using constructor Function

// the this keyword  is a reference to the Object that is executing the piece of code i.e the Circle Constructor

function CircleConstructor(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}
// CircleConstructor.name  returns the Constructor name
// CircleConstructor.length return the length parameters the constructor function has
CircleConstructor.call({}, 1);

//  Is Equivalent to  new CircleConstructor(1)

const another = new CircleConstructor(1);

//Enumerating Objects

//Objects can be enumerated using the for In Operator or Object.keys Method
for (let key in another) {
  console.log(key);
}
console.log(Object.keys(another));
// To check if a key is present in an Object
if ("radius" in another) {
  console.log("true");
}
const Circle1 = new Function(
  "radius",
  `
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
`
);

const circle2 = new Circle1(1);

// When a function is created using the function Literal Syntex Internally the javascript engine uses the function Constructor to create that function

//Every Object in Js has the Constructor property AND THAT  references the function that was used to create or construct that Object
delete circle2.radius;
console.log(circle2);

console.log(another, "another");

// WHen a Object created using the Object Literal Syntax internally the javascript engine uses the Object constructor function

// Object Literal Syntax

let x = {};
// Equivaluent to
let y = new Object();

let string = "";
//Equivaluent to
let strings = new String();

let booleanLiteral = true;
//Equivalent to
let boolean = new Boolean();

// In Javascript functions are Object

// In Javascript we have valueTypes or primitiveTypes and ReferenceTypes

// Values Types are:

// 1) Number;
// 2)Boolean;
// 3) null;
// 4)undefined;
// 5)String;
// 6) Symbol;

// Reference Types are:

// 1) Object;
// 2) Function;
// 3) Array;

// Primitives are copied by their value

// Object are copied by their reference

//Objects in javascript are dynamic that is , data can be added and also deleted
