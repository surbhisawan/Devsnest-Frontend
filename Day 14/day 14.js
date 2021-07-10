// Q1Create 2 object and try to use call, apply and bind on them
const test1 = {
    comName: "Microsoft",
    a: (a, b) => {
        console.log(this.comName);
        console.log(b - a);
    }
}

const test2 = {
    comName: "Amazon",
    b: function (a, c) {

        console.log(this.comName);
        console.log(a * c);
    }
}
test2.b(1, 2);
test2.b.call(test1, 1, 2);
test2.b.apply(test1, [1, 2]);
let Bind = test2.b.bind(test1, 3, 2);
Bind();

// Q2.Try to use different events on objects, you can refer to this link
var myFunction = () => {
    alert("This document is now being printed");
}
var disapper = () => {
    // as the image will not be present in the deployed directly 
    alert("server can not find the requested image!!!");
    document.getElementById("disapper").style.display = "none";
}

//Q3. JS For Game!
var active = 0;
var dead = 16;

window.onload = () => {

    let i = 0;
    var divId;
    while (i < 16) {
        if (i == 0) {
            // create amain div of classname new-div and set its displayy flex
            let new_div = document.createElement("div");
            new_div.setAttribute('class', "new-div");
            new_div.setAttribute('id', "new_div" + String(i));
            document.getElementById('box-start').append(new_div);
            divId = String(i);
        }

        if (i % 4 == 0 && i != 0) {
            //append a br tag into the box-start div
            let new_br = document.createElement("br");
            document.getElementById('box-start').append(new_br);
            let new_div = document.createElement("div");
            new_div.setAttribute('class', "new-div");
            new_div.setAttribute('id', "new_div" + String(i));
            document.getElementById('box-start').append(new_div);
            divId = String(i);
        }

        // create a div and append this div into new-div
        let clone = document.createElement("div");
        let id = "box" + String(i);
        clone.setAttribute('id', id);
        clone.setAttribute('class', "box");
        clone.addEventListener('click', function () {
            clicked()
            boxClick(id);
        });

        // Append the newly created element on element box 
        document.getElementById('new_div' + divId).append(clone);
        i++;
    }

}
var clicked = () => {
    if (dead > 0) {
        dead--;
        active++;
        document.getElementById("active-blocks").innerText = active;
        document.getElementById("inactive-blocks").innerText = dead;
    }
}

var boxClick = (id) => {
    let color = document.getElementById(id).style.background;
    if (color.length == 0 || color == "brown") {
        document.getElementById(id).style.background = "#E97451";
        document.getElementById(id).style.hover = "maroon";

    }
    else {
        document.getElementById(id).style.background = "brown";
        document.getElementById(id).style.hover = "maroon";
        active -= 2;
        dead = 16 - active;
        document.getElementById("active-blocks").innerText = active;
        document.getElementById("inactive-blocks").innerText = dead;
    }
    // once clicked we also want that 
}
var set = false;
function timer() {
    var sec = 22;
    var timer = setInterval(function () {
        document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
        sec--;
        if (sec < 0) {
            set == true;
            check();
            clearInterval(timer);
        }

    }, 700);

}
function check() {
    if (active != 16)
        alert("Sorry you loose ! Try again next time :(");
    else
        alert("Hurray you won!");
    window.location.reload();

}
function start(id) {
    // alert("Are you ready you only have 7secs!");
    console.log(id);
    document.getElementById(id).style.display = "none";
    document.getElementById('show-div').style.display = "block";
    document.querySelector('button').disabled = true;
    timer();
}