function fadeOutEffect() {
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