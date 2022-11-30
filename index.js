// Write your code here!

const getHeader = document.querySelector("#main");
getHeader.remove();

const bdy = document.getElementsByTagName("body");
bdy.innerHTML= `<h1 id="victory"> </h1>`;
const newHeader = document.querySelector('h1#victory');

document.getElementById('victory').textContent= "Isaac Tonyloi is the champion";