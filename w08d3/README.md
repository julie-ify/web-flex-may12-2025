## Client Side JavaScript & jQuery

### Lecture Outline

- [x] JavaScript in the Browser
- [x] Browser objects: `window`, `navigator`, `document`
- [x] The Document Object Model (DOM)
- [x] Events & The Event Object
- [x] Intro to jQuery
- [x] DOM manipulation with jQuery
- [x] Event handling with jQuery
- [x] Document ready

### What Does the Browser Do?

The browser is more than just a place to view websites, it’s a powerful environment with several built-in engines:

- It has a JavaScript Runtime Environment to run your scripts.
- It has an HTML rendering engine to build the visual structure of your page.
- It applies CSS styles to make things look good.
- It can make HTTP requests to load external data (e.g., from a server or API).

### The following features are exclusive to Node.js and cannot be used directly in the browser:

- `module.exports` – used for exporting modules in CommonJS
- `require` – used for importing modules in Node.js
- `process` – provides information about the current Node.js process

### Useful Browser Objects

#### `window` object

- Represents the browser tab.
- Has properties like:
  - `window.innerWidth`, `window.alert()`, `window.setTimeout()`
  - `window.document`, `window.navigator`

#### `navigator` object

- Gives information about the browser and device.
  - `navigator.userAgent`
  - `navigator.language`
  - `navigator.onLine`

#### `document` object

- Represents the DOM tree of the current page.
- Allows you to interact with HTML elements.
- Can be seen in the browser console by running `console.dir(document)`
  - `document.querySelector()`
  - `document.getElementById()`
  - `document.createElement()`

### The Document Object Model (DOM)

- HTML is parsed by the browser and turned into the DOM (Document Object Model) which is a tree-like structure in memory.
- Think of the DOM as a tree structure, where each element becomes a node
- The browser builds this tree behind the scenes — but JavaScript lets us read, modify, and create DOM nodes.
- eg. Given this HTML:

```html
<html>
	<head>
		<link rel="stylesheet" href="styles.css" />
		<title>My Page</title>
	</head>
	<body>
		<h1>Welcome to my page!</h1>
		<div class="content">
			<p>My Favourite Numbers</p>
			<ul id="main-list">
				<li>One</li>
				<li>Two</li>
				<li>Three</li>
			</ul>
		</div>
	</body>
</html>
```

The browser transforms this into a DOM tree like so:

![](https://github.com/julie-ify/web-flex-may12-2025/blob/main/dom-example.png?raw=true)

Green outline === HTML element; Red outline === text node

### Why the DOM is Powerful

- Read content from the page (like text inside a `<p>` tag)
- Update content (change a title, edit text, etc.)
- Change styles (make a box red, grow a font, etc.)
- Add elements (create buttons, cards, sections dynamically)
- Remove elements
- Respond to events (clicks, typing, scrolling, etc.)

### Events & The Event Object

- An event is a notification that some action has occurred (eg. a button is clicked, the mouse pointer is moved, a key is pressed)
- Browsers are event-driven, users interact by clicking, typing, scrolling.
- JS responds to events using event listeners (callbacks).

```js
// we can use anonymous functions...
document
	.querySelector('.btn-primary')
	.addEventListener('click', function (event) {
		console.log('Button clicked', event);
	});

// or named functions
const clickHandler = function (event) {
	console.log('Button clicked', event);
};
document.querySelector('.btn-primary').addEventListener('click', eventHandler);
```

- There are a lot of [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)
- Each event is represented by an `event` object which is passed as the argument to the callback function
- The `event` object contains useful information about the specific event that occurred

```js
// console.log the mouse x and y coordinates whenever the mouse is moved
const moveHandler = function (event) {
	console.log(event.clientX, event.clientY);
};
document.body.addEventListener('mousemove', moveHandler);

// we can also remove event handlers using a similar API
document.body.removeEventListener('move', moveHandler);
```

### Intro to jQuery

- jQuery is a JavaScript library that provides a simple API for DOM manipulation, animations, event handling, and AJAX requests
- It wraps native APIs with shorter, consistent syntax.
- It can be referenced with `jQuery` or the `$`
- Typically brought into a project using a **C**ontent **D**elivery **N**etwork or **CDN**
- **CDNs** is a distributed group of servers that caches content near end users.

##### Selecting Elements with Vanilla JS

```js
// Select the first <h1> element
document.querySelector('h1');

// Select all elements with the class "my-class"
document.querySelectorAll('.my-class');

// Select the element with the id "my-id"
document.getElementById('my-id');

// Select all <span> elements inside elements with class "my-class"
document.querySelectorAll('.my-class span');
```

##### Selecting Elements with jQuery

```js
// Select the first <h1> element (or all <h1>s)
$('h1');

// Select all elements with the class "my-class"
$('.my-class');

// Select the element with the id "my-id"
$('#my-id');

// Select all <span> elements inside elements with class "my-class"
$('.my-class span');
```

### Creating Elements with jQuery

- We can use the same `jQuery` interface to create DOM elements by passing in the opening tag of an HTML element

```js
const newDiv = $('<div>');
const newImg = $('<img>');

// Note:
$('<img>'); // creates a new image element in memory — it doesn't exist in the DOM yet.
$('img'); // selects all existing <img> elements in the DOM.
```

- We can add text, and even class to our created elements and then append to somewhere in the DOM

```js
const newButton = $('<button>').text('Click Me!').addClass('btn');

$('#button-container').append(newButton);
```

### Event Handling with jQuery

- We can also easily attach event listeners to DOM events using `jQuery`

```js
// using the .on method
$('button').on('click', clickHandler);
$('form').on('submit', submitHandler);

// using shorthand methods
$('button').click(clickHandler);
$('form').submit(submitHandler);
```

### Document Ready

- We usually want to wait for the document to finish being loaded before our JavaScript runs
- jQuery gives us a simple interface for wrapping our code
- Once the document has finished loading, our callback is called

```js
$(document).ready(() => {
	// this callback runs once the document is "ready"
	console.log('ready');
});

// or
$(() => {
	// passing a callback to jQuery is a shorthand for $(document).ready()
	console.log('ready');
});
```

### Step-by-Step: Open HTML in Browser from VS Code

---

### Option 1: The Easy Way – Use "Live Server" Extension

#### 1. Install Live Server Extension

- Open **VS Code**
- Go to the **Extensions** tab (left sidebar or press `Ctrl+Shift+X`)
- Search for **"Live Server"**
- Click **Install** (by Ritwick Dey)

#### 2. Open Your HTML File

- Open the folder containing the HTML file in VS Code
- Click on the HTML file (e.g., `index.html`) to open it

#### 3. Start Live Server

- Right-click anywhere inside the HTML file
- Select **"Open with Live Server"**

It will automatically launch your default browser with a live version of your HTML file, like: `http://127.0.0.1:5500/index.html`

- Any changes you make in VS Code will **auto-refresh in the browser**

---

### Option 2: Open the HTML File Manually (Without Extension)

#### 1. Open the Folder in VS Code

- Make sure your HTML file is saved in a folder (e.g., `w08d3/index.html`)

#### 2. Locate the HTML File in Your File Explorer

- Right-click on the file tab (in VS Code)
- Choose **"Reveal in File Explorer"** (Windows) or **"Reveal in Finder"** (Mac)

#### 3. Double-Click the HTML File

- It will open in your default browser directly via the `file://` protocol

---

### Useful Links

- [MDN: The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [MDN: Browser Events](https://developer.mozilla.org/en-US/docs/Web/Events)
- [What is the $ in DevTools?](https://thewebivore.com/exactly-wth-is-up-with-in-devtools/)
- [jQuery Docs](https://jquery.com/)
