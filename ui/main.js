//Counter code
console.log('Loaded!');

var element = document.getElementById('main-text' 
    );
element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('Madi');
img.onclick = function () {
    img.style.marginleft = '200px';
};