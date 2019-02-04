/*function fadeOutEffect() {
    var fadeTarget = document.getElementById("main");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.80;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

document.getElementById("main").addEventListener('click', fadeOutEffect);
*/
function email() {
    var input = document.getElementById('userInput').value;
}

var slideIndex = 1;
showDivs(slideIndex)

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementById('main');
    if(n < x.length) {
        slideIndex  = 1
    };
    if (n < 1) {
        slideIndex = x.length
    };

    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
    }

