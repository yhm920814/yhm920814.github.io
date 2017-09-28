//q1
console.log("Hello, World");
//q2
console.log("The answer for q2 is a");
//q3
var myName = "袁鹤鸣";
console.log(myName);
//q4

window.onload = function(){
    alert( myName );
    var name = document.querySelector('h1');
    name.onclick(){
        var content = "<span>I\'m</span>" + myName;
        name.setAttribute("content", content);
    }

};



