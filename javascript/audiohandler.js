// audio importer
const audioCtx = new AudioContext();
let source = undefined
let songLength;
let none = 1

const selectedfile = document.getElementById("selected-audio")

function createFile() {

    const url = URL.createObjectURL(selectedfile.files[0])

    source = new AudioBufferSourceNode(audioCtx);
      request = new XMLHttpRequest();

      request.open("GET", url, true);

      request.responseType = "arraybuffer";

      request.onload = () => {
        let audioData = request.response;

        audioCtx.decodeAudioData(
          audioData,
          (buffer) => {
            source.playbackRate.value = semitones.value
            source.buffer = buffer
            source.connect(audioCtx.destination)
          },
          (e) => {
            `Error with decoding audio data ${e.error}`;
          }
        );
      };

      request.send();
      source.start()
      audioCtx.suspend()

  console.log("Loaded ".concat(selectedfile.value))
}

// stops audio when new audio is loaded
selectedfile.addEventListener("change", function(){
  if (none < 1) {
    audioCtx.suspend()
    source.stop()
    console.log("stopped")
} else {
  none = 0
}
})

// loads file
selectedfile.addEventListener("change", createFile)

semitones = document.getElementById("pitch-slider")

function changePitch() {
    if (source != undefined) {
        source.playbackRate.value = semitones.value
    }
}
