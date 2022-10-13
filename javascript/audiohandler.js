// audio importer
const audioCtx = new AudioContext();
let source = undefined
let songLength;

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
            if (source.buffer != NaN) {source.buffer = buffer}
            source.connect(audioCtx.destination);
          },
          (e) => {
            `Error with decoding audio data ${e.error}`;
          }
        );
      };

      request.send();
}
// URL.revokeObjectURL(selectedfile.files[0])

selectedfile.addEventListener("change", createFile)

semitones = document.getElementById("pitch-slider")

function changePitch() {
    if (source != undefined) {
        source.playbackRate.value = semitones.value
    }
}
