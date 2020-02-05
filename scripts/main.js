var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

  var Accordion_nextEl = (function () {
    function Accordion_nextEl(el) {
        this.el = el;
    }
    Accordion_nextEl.prototype.showHide = function () {
        for (var i = 0; i < this.el.length; i++) {
            this.el[i].addEventListener('click', function () {
            this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("active");            
            });
        }
    };
    return Accordion_nextEl;
}());
var text = document.getElementsByClassName("sample");
new Accordion_nextEl(text).showHide();