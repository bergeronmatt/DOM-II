// Your code goes here

//Event Listener List
/*
//dblclick
//click
//mouseover
//mouseleave
//keydown
//contextmenu
//select
//mousemove
//wheel
//

drag/drop
load
focus
resize
scroll

*/


// click

var myTitle = document.getElementsByTagName('h1')[0]

myTitle.addEventListener('click', function(){
	myTitle.style.color = 'red';
})

//doubleclick

myTitle.addEventListener('dblclick', function(){
	myTitle.style.color = 'black';
})

//mouseover

document.querySelectorAll('.btn').forEach(el => {
	el.addEventListener('mouseover', function(){
		el.style.transform = 'scale(1.2)';
		el.style.transition = 'transform 1s';
	})
})

//mouseleave

document.querySelectorAll('.btn').forEach(el => {
	el.addEventListener('mouseleave', function(){
		el.style.transform = 'scale(1)';
	})
})

// keydown

const body = document.querySelector('body');

body.addEventListener('keydown', () => {
	body.style.backgroundColor = "yellow";
})

//contextmenu

const bus = document.querySelector('.sand-bus')

bus.addEventListener('contextmenu', e =>{
	e.preventDefault();
})

//select
function logSelection(event) {
	const log = document.getElementById('log');
	const selection = event.target.value.substring(event.target.selentionStart, event.target.selectionEnd);
	log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

//mousemove

let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById('myPics');
const context = myPics.getContext('2d');

const rect = myPics.getBoundingClientRect();

myPics.addEventListener('mousedown', e => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

//wheel

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

 
  scale = Math.min(Math.max(.125, scale), 4);

  
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector('.sand-bus');
el.onwheel = zoom;


//resize

const mapImage = document.querySelector('.map')

window.addEventListener('resize', () => {
	mapImage.src = "https://images.unsplash.com/photo-1520299607509-dcd935f9a839?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
})