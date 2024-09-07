const one=document.querySelector(".num1");
const two=document.querySelector(".num2");
const three=document.querySelector(".num3");
const four=document.querySelector(".num4");
const five=document.querySelector(".num5");
const six=document.querySelector(".num6");
const seven=document.querySelector(".num7");
const eight=document.querySelector(".num8");
const nine=document.querySelector(".num9");
const zero=document.querySelector(".num0");
var output=document.querySelector(".output");
var input=document.querySelector(".input");
var clear=document.querySelector(".clr")
var back=document.querySelector(".del")
var num=0;
function makenum(digit){
    num=num*10+digit;
    give();
};
function clr(){
    num=0;
    give();
}
function del(){
    num=Math.floor(num/10);
    give();
}
function get(){
    one.addEventListener("click",function(){makenum(1)});
    two.addEventListener("click",function(){makenum(2)});
    three.addEventListener("click",function(){makenum(3)});
    four.addEventListener("click",function(){makenum(4)});
    five.addEventListener("click",function(){makenum(5)});
    six.addEventListener("click",function(){makenum(6)});
    seven.addEventListener("click",function(){makenum(7)});
    eight.addEventListener("click",function(){makenum(8)});
    nine.addEventListener("click",function(){makenum(9)});
    zero.addEventListener("click",function(){makenum(0)});
    clear.addEventListener("click",function(){clr()});
    back.addEventListener("click",function(){del()})
};
function give(){
    input.innerHTML=`<td colspan="9">${num}</td>`;
};
get();