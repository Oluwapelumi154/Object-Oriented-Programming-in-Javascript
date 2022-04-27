//Objects
const circle = {
  //Properties
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  // Methods
  draw: function () {
    console.log("draw");
  },
};

circle.draw();
//Procedural Approach
//A function with so many Parameters it a symptom of Procedural Programming Approach
let baseSalary = 5000;
let rate = 10;
let overTime = 20;
function getWage(baseSalary, rate, overTime) {
  return baseSalary + rate * overTime;
}

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      return radius;
    },
  };
}

const circles = createCircle(1);
circle.draw();

// Object can also be created using function Constructor
function Circle(radius) {
  //this keyword refers to the object that is executing this piece of code
  this.radius = radius;
  this.draw = function () {
    console.log("draw", circle);
  };
  let value = 1;
  this.getValue = function () {
    return value;
  };
  Object.defineProperty(this, "location", {
    get: function () {
      return value;
    },
    set: function (values) {
      value = values;
    },
  });
}

//The new keyword create an empty object {}  the this keyword then point to the that empty object then assign  properties to the Object
// if the new keyword is not specified the this keyword reference the global Obect which is called the window Object
// const circlee = new Circle(2);
const f = new Circle(2);
f.location = 22;
// console.log(Circle.call({}, 1));
// circlee;
// circlee.radius;
//Encapsulation
const Income = {
  rate: 10,
  baseSalary: 5000,
  overTime: 10,
  getWage() {
    return this.baseSalary + (this.rate + this.overTime);
  },
};
delete Income.rate;
//Primitive Types
let x = 50;
let y = x;
x = 60;
console.log(x, y);

const z = {value: 20};
const g = z;
//Constructor Function

//Exercise
function StopWatch() {
  let duration = 0,
    startTime = 0,
    endTime = 0,
    running = false;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
    },
  });
}
StopWatch.prototype.start = function () {
  if (this.running) {
    throw new Error("StopWatch Already Started");
  }
  this.running = true;
  startTime = new Date();
  return startTime;
};
StopWatch.prototype.reset = function () {
  this.duration = 0;
  this.running = 0;
  this.startTime = null;
  this.endTime = null;
};
StopWatch.prototype.stop = function () {
  if (!this.running) {
    throw new Error("StopWatch hasn't Started");
  }
  this.running = false;
  this.endTime = new Date();
  this.duration = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  return duration;
};
const time = new StopWatch();

//Inheritance
