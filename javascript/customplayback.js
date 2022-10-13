    let buttonplay =  document.getElementById("Play/Pause")
    let audiotimestamp = document.getElementById("source-timestamp")
    let onoff = "off"
    let laststopped = ["1oo", "filler"]
    var timeinterval
    /*
    // custom playback when source is loaded
    selectedfile.addEventListener("change", function(){
        // set slider to source duration
        setTimeout(function hi() {audiotimestamp.setAttribute("max", source.duration)}, 100)
        
        // automatically move slider with loaded source
        timeinterval = setInterval(function() {audiotimestamp.value = source.currentTime}, 1)
        
        // set source to slider clicked
        audiotimestamp.onclick = function() {
            source.currentTime = audiotimestamp.value
        }
    
        setInterval(function(){
            if (audiotimestamp.matches(":hover")) {
                clearInterval(timeinterval)
            } else if (!audiotimestamp.matches(":hover")) {
                // timeinterval = setInterval(function() {audiotimestamp.value = source.currentTime}, 1)
                // console.log("out of hover")
            }
        }, 1)
    
        source.addEventListener("ended", function(){
            onoff = "off"
            buttonplay.innerHTML = "Play"
        })
    }) */

    // ignore the random unused pieces of code thanks :)
    function playpause() {
        if (source != undefined && selectedfile.value) {
            if (onoff == "off") {
                buttonplay.innerHTML = "Loading..."
                buttonplay.setAttribute('activated', false)

                onoff = "on"
                buttonplay.innerHTML = "Pause"
                buttonplay.setAttribute('activated', true)
                
                audioCtx.resume()
            } else {
                onoff = "off"
                buttonplay.innerHTML = "Play"
                audioCtx.suspend()
            }
        }
    }

    selectedfile.addEventListener("change", function(){
        if (buttonplay.innerHTML == "Pause") {
            onoff = "off"
            buttonplay.innerHTML = "Play"
        }
    })