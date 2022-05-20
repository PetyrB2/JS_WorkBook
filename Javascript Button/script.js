// Manipulating the DOM - By using a Button and Innerhtml
//
//


'use strict'

const para = document.getElementById("paragraph");

para.innerHTML = `<center><b><h3>Hello world!</h3></b></center>`;

// 

// get objects from our DOM
const list = document.getElementById("list");
const text = document.getElementById("words").value = "I have been pressed";
const button = document.getElementById("butt");

// create functionality to add text to list
let addToList = (str) => {
    let child = document.createElement(`li`);
    let text = document.createTextNode(str);
    child.appendChild(text)// = str;
    list.appendChild(child);
}

// when button is clicked send text from input to function
button.onclick = () => addToList(text.value);