var box = document.getElementById('box');
var down = false;

function toggleContainer1() {
    if (down2) {
        box2.style.height = '0px';
        box2.style.opacity = 0;
        down2 = false;
    }

    if (down) {
        box.style.height = '0px';
        box.style.opacity = 0;
        down = false;
    } else {
        box.style.height = '200px';
        box.style.opacity = 1;
        down = true;
    }
}

var box2 = document.getElementById('box2');
var down2 = false;

function toggleContainer2() {
    if (down) {
        box.style.height = '0px';
        box.style.opacity = 0;
        down = false;
    }

    if (down2) {
        box2.style.height = '0px';
        box2.style.opacity = 0;
        down2 = false;
    } else {
        box2.style.height = '180px';
        box2.style.opacity = 1;
        down2 = true;
    }
}

