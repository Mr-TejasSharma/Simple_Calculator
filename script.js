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
function makenum(digit) {
    expression += digit;
    give();
};

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
};

function evaluateExpression() {
    try {
        const result = eval(expression); 
        input.innerHTML = `${result}`;
        expression = ""; 
    } catch (error) {
        input.innerHTML = "Error"; 
    }
}

function get() {

    num1.addEventListener("click", function () { makenum(1) });
    num2.addEventListener("click", function () { makenum(2)  });
    num3.addEventListener("click", function () { makenum(3)  });
    num4.addEventListener("click", function () { makenum(4)  });
    num5.addEventListener("click", function () { makenum(5)  });
    num6.addEventListener("click", function () { makenum(6)  });
    num7.addEventListener("click", function () { makenum(7)  });
    num8.addEventListener("click", function () { makenum(8)  });
    num9.addEventListener("click", function () { makenum(9)  });
    num0.addEventListener("click", function () { makenum(0)  });
    dot.addEventListener("click", function () { makenum('.')  });
    sum.addEventListener("click", function () { makenum('+')  });
    minus.addEventListener("click", function () { makenum('-')  });
    multiply.addEventListener("click", function () { makenum('*')  });
    divide.addEventListener("click", function () { makenum('/')  });
    mod.addEventListener("click", function () { makenum('%')  });
    clear.addEventListener("click", function () { clr() });
    back.addEventListener("click", function () { del()  });
    equals.addEventListener("click", function () { evaluateExpression()  }); 
};
get();

// Addition features 
button=document.getElementsByTagName("input");
button.addEventListener("click", vibrate());
function vibrate() {
    navigator.vibrate(50)  
  }
  