const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const num3 = document.querySelector("#num3");
const num4 = document.querySelector("#num4");
const num5 = document.querySelector("#num5");
const num6 = document.querySelector("#num6");
const num7 = document.querySelector("#num7");
const num8 = document.querySelector("#num8");
const num9 = document.querySelector("#num9");
const num0 = document.querySelector("#num0");
const dot = document.querySelector("#dot");
const prev = document.querySelector("#ans");
var input = document.querySelector(".display");
var sum = document.querySelector("#sum");
var minus = document.querySelector("#minus");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var mod = document.querySelector("#mod");
var clear = document.querySelector("#clear");
var back = document.querySelector("#delete");
var equals = document.querySelector("#eq");

let expression = "";
let previous = "";
function makenum(digit) {
  expression += digit;
  give();
}

function clr() {
  expression = "";
  give();
}

function del() {
  expression = expression.substring(0, expression.length - 1);
  give();
}

function give() {
  input.innerHTML = `${expression}`;
}

function evaluateExpression() {
  if (expression == "") {
    input.innerHTML = "0";
  } else {
    try {
      const result = eval(expression);
      input.innerHTML = `${result}`;
      previous = result;
      expression = "";
    } catch (error) {
      input.innerHTML = "Error";
    }
  }
}

function storeAns() {
  if (expression != "") {
    evaluateExpression();
  }
  expression = previous;
}

function get() {
  // for mobile
  num1.addEventListener("click", () => {
    makenum(1), vibrate(50);
  });
  num2.addEventListener("click", () => {
    makenum(2), vibrate(50);
  });
  num3.addEventListener("click", () => {
    makenum(3), vibrate(50);
  });
  num4.addEventListener("click", () => {
    makenum(4), vibrate(50);
  });
  num5.addEventListener("click", () => {
    makenum(5), vibrate(50);
  });
  num6.addEventListener("click", () => {
    makenum(6), vibrate(50);
  });
  num7.addEventListener("click", () => {
    makenum(7), vibrate(50);
  });
  num8.addEventListener("click", () => {
    makenum(8), vibrate(50);
  });
  num9.addEventListener("click", () => {
    makenum(9), vibrate(50);
  });
  num0.addEventListener("click", () => {
    makenum(0), vibrate(50);
  });
  dot.addEventListener("click", () => {
    makenum("."), vibrate(50);
  });
  sum.addEventListener("click", () => {
    makenum("+"), vibrate(50);
  });
  minus.addEventListener("click", () => {
    makenum("-"), vibrate(50);
  });
  multiply.addEventListener("click", () => {
    makenum("*"), vibrate(50);
  });
  divide.addEventListener("click", () => {
    makenum("/"), vibrate(50);
  });
  mod.addEventListener("click", () => {
    makenum("%"), vibrate(50);
  });
  clear.addEventListener("click", () => {
    clr(), vibrate(50);
  });
  back.addEventListener("click", () => {
    del(), vibrate(50);
  });
  equals.addEventListener("click", () => {
    evaluateExpression(), vibrate(100);
  });
  prev.addEventListener("click", () => {
    storeAns(), vibrate(100);
  });

  // Keyboard event listeners
  document.addEventListener("keydown", function (e) {
    if (e.key === "1") {
      makenum(1), vibrate(50);
    } else if (e.key === "2") {
      makenum(2), vibrate(50);
    } else if (e.key === "3") {
      makenum(3), vibrate(50);
    } else if (e.key === "4") {
      makenum(4), vibrate(50);
    } else if (e.key === "5") {
      makenum(5), vibrate(50);
    } else if (e.key === "6") {
      makenum(6), vibrate(50);
    } else if (e.key === "7") {
      makenum(7), vibrate(50);
    } else if (e.key === "8") {
      makenum(8), vibrate(50);
    } else if (e.key === "9") {
      makenum(9), vibrate(50);
    } else if (e.key === "0") {
      makenum(0), vibrate(50);
    } else if (e.key === ".") {
      makenum("."), vibrate(50);
    } else if (e.key === "+") {
      makenum("+"), vibrate(50);
    } else if (e.keyCode === 107) {
      makenum("+"), vibrate(50);
    } else if (e.key === "-") {
      makenum("-"), vibrate(50);
    } else if (e.key === "*") {
      makenum("*"), vibrate(50);
    } else if (e.key === "/") {
      makenum("/"), vibrate(50);
    } else if (e.key === "%") {
      makenum("%"), vibrate(50);
    } else if (e.key === "Backspace") {
      del(), vibrate(50);
    } else if (e.key === "Enter") {
      evaluateExpression(), vibrate(100);
    } else if (e.key === "=") {
      evaluateExpression(), vibrate(100);
    } else if (e.key === "ArrowUp") {
      storeAns(), vibrate(100);
    } else if (e.key === "Delete") {
      clr(), vibrate(50);
    }
  });
}
get();

// Addition features
function vibrate(val) {
  navigator.vibrate(val);
}
