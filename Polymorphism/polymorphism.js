// Polymorphism means many form
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

Square.prototype.duplicate = function () {
  console.log("duplicate Square");
};
// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;
const shape = new Shape();
const circles = new Circle(1, "red");

const shapes = [new Circle(), new Shape()];
for (let shape of shapes) {
  console.log(shape.duplicate());
}
// Whenever a prototype is reset always ensure the constructor is reset

// Mixins or Composition
const canEat = {
  eat: function () {
    this.hunger--;
    console.log("eating");
  },
};

const canWalk = {
  walk: function () {
    console.log("Walking");
  },
};
const canSwim = {
  swim: function () {
    console.log("swimming");
  },
};

function mixin(target, ...Sources) {
  Object.assign(target, ...Sources);
}
function Person() {}
const persons = new Person();
mixin(Person.prototype, canEat, canWalk);

function GoldFish() {}
mixin(GoldFish.prototype, canEat, canWalk);

function HtmlElement() {
  this.click = function () {
    console.log("click");
  };
}
HtmlElement.prototype.focus = function () {
  console.log("focus");
};
const htmlTag = new HtmlElement();

function HtmlSelectElement(items = []) {
  this.items = items;
  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    items.splice(items.indexOf(item), 1);
  };

  this.render = function () {
    return `<select>
    ${this.items.map((item) => `<option>${item}</option>`).join("")}
    </select>`;
  };
}

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}
// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
HtmlSelectElement.prototype = new HtmlElement();

HtmlSelectElement.prototype.constructor = HtmlSelectElement;
const selectEl = new HtmlSelectElement();
const imageEl = new HtmlImageElement();
// Polymorphism
const elements = [new HtmlSelectElement([1, 2, 3]), new HtmlImageElement("http://")];
for (let element of elements) {
  console.log(element.render());
}

const d = selectEl.addItem(2);
console.log(selectEl.removeItem(2));
console.log(imageEl);
console.log(selectEl.items);

