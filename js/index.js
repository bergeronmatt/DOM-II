// Your code goes here

//Event Listener List
/*
mouseover
keydown
wheel
drag/drop
load
focus
resize
scroll
select
//dblclick
//click
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



