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
    var hello = document.querySelector('.profile-preword');
    //q5
    hello.onclick = function () {
        if(name.innerHTML==="<span>I'm</span> " +myName){
            name.innerHTML = "<span>I'm</span> Heming Yuan";
        }else {
            name.innerHTML = "<span>I'm</span> " + myName + "</h1>";
        }
    }
    //q6
    name.onclick = function(){
        var x = document.querySelector('.profile-list');
        if (x.style.visibility === 'hidden') {
            x.style.visibility = 'visible';
        } else {
            x.style.visibility = 'hidden';
        }
    }

//q7
    document.querySelector(".profile-photo").addEventListener("mouseover", mouseOver);
    document.querySelector(".profile-photo").addEventListener("mouseout", mouseOut);

    function mouseOver() {
        var div = document.createElement("DIV");
        div.setAttribute('class','remove');
        div.innerHTML = 'yhm920814.github.io';
        document.querySelector(".col-xs-5").appendChild(div);
    }

    function mouseOut() {
        document.querySelector(".col-xs-5").removeChild(document.querySelector('.remove'));
    }

};



