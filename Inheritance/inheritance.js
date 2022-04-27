// In Javascript We have two types of Inheritance

// (1) Classical Inheritance
// (2) Prototypical Inheritance

// Prototype typically means Parent of another Object

// Object base refers to the root of all Object in Javascript

// Every Object in Javascript has a prototype or parent except the Object base i.e the root Object
// A prototype is a regular object

// All Objects created by a given constructor will have the same prototype
// All Array Created by a given constructor will have the same prototype

function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    this.draw();
    console.log("move");
  };
}
Circle.prototype.draw = function () {
  console.log("draw");
};

Circle.prototype.toString = function () {
  return `circle with radius ${this.radius}`;
};
const circle1 = new Circle(3);
const circle2 = new Circle(4);
console.log(circle1, circle2);
let person = {name: "pelumi"};

// By default all Object are writable,configurable,enumerable
Object.defineProperty(person, "name", {
  writable: false,
  enumerable: true,
  configurable: false,
});
person.name = "hello";
// Object.getPrototypeOf(person) === person._proto_(parent of personObject)
// The ._proto_ property is deprecated it not a best practice to use that property
console.log(delete person.name);
console.log(person, "person Object");
console.log(Object.keys(person));
let objectBase = Object.getPrototypeOf(person);
const propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(propertyDescriptor, "Property Descriptor");
console.log(objectBase);

// configurable-true Typically means the (toString) method can be deleted
// writeable-true Typically means the  (toString) method can be overwritten

// We have to types of properties and method in  javascript

// Instance Properties and Methods
// Prototype Properties and Methods

// Iterating over instance and prototypical Properties

// Object.keys() returns only instance members
// for In loop returns all members that is both instance and prototypical members

// Note

// Do not modify the built in Object in Javascript
// Prototypical Inheritance

function Shape(color) {
  this.color = color;
}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
// This was the implicit relationship it inherit from the Object base are called the root base which is Circle.prototype = Object.create(Object.prototype);
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(Circle, Shape);
Circle.prototype.draw = function () {
  console.log("draw");
};
Circle.prototype.duplicate = function () {
  console.log("duplicate Circle");
};

function Square(size) {
  this.size = size;
}

extend(Square, Shape);
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
const s = new Shape();
const c = new Circle(1, "red");
// Whenever a prototype is reset always ensure the constructor is reset

// ES6 classes
// Implementing Inheritance using EcmaScript2015
// classes are functions
class CircleClasses {
  constructor(radius) {
    this.radius = radius;
  }
  // Instance Method
  draw() {
    console.log("draw");
  }
  static Parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

// const circleClasses = new CircleClasses(3);
const staticMethod = CircleClasses.Parse('{"radius": 1}');
// console.log(circleClasses.draw());
console.log(staticMethod, "static Method");

// In javascript we have two ways of declaring a function:
// 1) function Decleration
// function Decleration are hoisted that is, they are raised to the top of the code while executing
// function sayHello()
// 2) function Expression
// function Expression are not hoisted
// const sayGoodbye= function(){};

// Classes can be defined using the class declaration or class expression syntax
// class Declaration or class Expression are not hoisted
// Class Declaration
// class Class {}

// Class Expression
// const square= class{}

// In Classical Object Oriented Language we have to types of Method:
// 1) Instance Method
// 2) Static Method

// Static Method is available on the class Itself not on the Object Instance
// To use a static method the  instance method of the class is not required

class Parent {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log("move");
  }
}

class Child extends Parent {
  constructor() {
    super(color);
  }
  draw() {
    console.log("draw");
  }
}

const child = new Child("red");
console.log(child);
