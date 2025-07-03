// console.log('external javaScript running!')

// create a new li element
const myLi = document.createElement('li'); // <li></li>

// create a text "Four"
const textNode = document.createTextNode('Four'); // Four

// add Four to the li element
myLi.append(textNode); // <li>Four</li>

// select the ul with an id "main-list"
const mainList = document.getElementById('main-list');

// append the li to the ul
mainList.append(myLi);
// mainList.prepend(myLi);

// find the button with the class of "btn-primary"
const button = document.querySelector('.btn-primary');

// click handler
const clickHandler = function (event) {
	console.log(event, 'I just got clicked');
};

// add click event to it
button.addEventListener('click', clickHandler);

// remove the click event
window.setTimeout(() => {
	button.removeEventListener('click', clickHandler);
}, 2000);
