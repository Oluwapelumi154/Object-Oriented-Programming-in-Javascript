function Circle(radius) {
  this.radius = radius;

  let defaultLocation = {x: 0, y: 0};
  let computeOptimumLocation = function (factor) {
    console.log("optimum Location", factor);
  };
  // A closure determines what variable will be accesible by the inner function

  this.draw = function () {
    let x, y;
    computeOptimumLocation(0.1);
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) {
        throw new Error("Invalid location");
      }
      defaultLocation = value;
    },
  });
}

const circle = new Circle(1);
console.log(circle.defaultLocation, "locationSetter");
console.log(circle, "Abstraction");
circle.defaultLocation = 2;
// A getter is a function that is used to read a property

function StopWatch() {
  let startTime,
    endTime,
    duration,
    running = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "running", {
    get: function () {
      return running;
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
}
StopWatch.prototype.start = function () {
  if (this.running) {
    throw new Error("StopWatch Already Started");
  }
  this.startTime = new Date();
  this.running = true;
};
StopWatch.prototype.end = function () {
  if (!this.running) {
    throw new Error("Stopwatch Ended");
  }
  this.endTime = new Date();
  const seconds = (endTime.getTime - startTime.getTime()) / 1000;
  this.duration += seconds;

  this.running = false;
};
StopWatch.prototype.reset = function () {
  this.startTime = null;
  this.endTime = null;
  this.running = false;
  this.duration = 0;
};

// iMPLEMENTING PRIVATE PROPERTIES AND METHODS USING ES6

const _radius = Symbol();
const _draw = Symbol();
class Cirlce {
  constructor(radius) {
    this[_radius] = radius;
  }
  [_draw]() {}
}

const c = new Circle(1);
const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);
