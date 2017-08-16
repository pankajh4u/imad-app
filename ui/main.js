//Counter code
console.log('Loaded!');

var element = document.getElementById('main-text' 
    );
element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('Madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = intInterval(moveRight, 100);
};