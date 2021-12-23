function ShowTime(){
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();

    if(hour<10) hour = "0"+hour;
    if(minute<10) minute = "0"+minute;

    let RealTime = hour+":"+minute;
    document.getElementById('CellHour').innerHTML = RealTime;
}

function InitTime(){
    setInterval(ShowTime, 1000);
}

let home_view = document.getElementById('home');
let back_view = document.getElementById('back');
let apps_view = document.getElementById('apps');

home_view.addEventListener('click', 
    document.getElementById('BrowenBody').style.display = 'none'
);




//----------------------------------//
/*
var xhr= new XMLHttpRequest();
xhr.open('GET', '', true);
xhr.onreadystatechange= function() {
    if ( this.readyState !== 4 ) return;
    if ( this.status !== 200 ) return; // or whatever error handling you want
    document.getElementById('BrowenBody').innerHTML= this.responseText;
};
xhr.send();

*/

/*

//GOOOOOOOOOOD!

async function loadHtml() {
    const response = await fetch("./TestPage.html")
    const text = await response.text()
    document.getElementById('BrowenBody').insertAdjacentText('beforeend', text)
}

loadHtml();

*/

/*
let BrowenBody = document.getElementById('BrowenBody');

async function load_home() {
    let url = 'https://www.google.com/'
    BrowenBody.innerHTML = await (await fetch(url)).text(); 
  }

load_home();
*/
/*
var insertHtml = function (selector, argHtml) {
    $(document).ready(function(){
    
        $(selector).load(argHtml);
     
    });
    var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    
    var sliderHtml="./TestPage.html";//url of slider html
    insertHtml("#BBodyTwo",sliderHtml);
*/
/*
var GetBBody = document.querySelector("#BBody");
var GetUrl = document.querySelector("#URL-Load");

var URLGET = GetUrl.value;

loadHtml(GetBBody,URLGET);

function loadHtml(id, filename) {

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if ( file ) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if(this.readyState == 4) {
                if(this.status == 200) {element.innerHTML = this.responseText;}
                if(this.status == 404) {element.innerHTML = "<h1>Page not found 404</h1>";}
            }
        }

        xhttp.open("GET",   `BBody/${file}`, true);
        xhttp.send();
        return;
    }
}
*/