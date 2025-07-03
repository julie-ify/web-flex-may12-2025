console.log('jquery example');

const myLi1 = jQuery('<div>'); // <div></div>
const myLi2 = $('<div>'); // <div></div>

// create a li element
// const myLi = $('<li>Four</li>') // <li>Four</li>
const myLi = $('<li>'); // <li></li>

// create a textnode
// append textnode to li
myLi.text('Four'); // <li>Four</li>

// find the ul with an id "main-list"
const mainList = $('#main-list');

// append the li to the ul
// mainList.append(myLi);
mainList.prepend(myLi);
// myLi.prependTo(mainList)

// add click event
const button = $('.btn-primary').on('click', function (event) {
	console.log(event);
});

// remove click event
button.off('click');

// create a bubble
const pointer = $('<div>');

// add class pointer
pointer.addClass('pointer');

const body = $('body');
body.prepend(pointer);

// add a mousemove event on the body
body.on('mousemove', function (event) {
	console.log(event.clientX, event.clientY);
	pointer.css('transform', `translate(${event.clientX}px, ${event.clientY}px)`);
});
