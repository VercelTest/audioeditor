let ptext = document.getElementById("pitch-text");

setInterval(function() {
    let slider = document.getElementById("pitch-slider");
    

    // i just learned javascript give me a break ok?
        ptext.innerHTML = "Speed: x".concat(slider.value);
}, 0);









