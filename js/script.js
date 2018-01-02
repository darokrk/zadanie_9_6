// value declaration

var list = document.getElementById('list'),
	add = document.getElementById('addElem');


// listener added to button

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var elementNumber = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + elementNumber.length;
	list.appendChild(element);
});