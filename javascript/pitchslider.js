setInterval(function() {
    let slider = document.getElementById("pitch-slider");
    let ptext = document.getElementById("pitch-text");

    // i just learned javascript give me a break ok?
    let formattedstring = slider.value/10

    if (formattedstring > 0) {
        formattedstring = "+".concat(formattedstring.toString())
    } else {
        formattedstring.toString()
    }

    ptext.innerHTML = "Semitones: ".concat(formattedstring);
}, 0);