/*let video = document.getElementById('videoInput');
let src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
let dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
let cap = new cv.VideoCapture(video);

const FPS = 30;
function processVideo() {
    try {
        if (!streaming) {
            // clean and stop.
            src.delete();
            dst.delete();
            return;
        }
        let begin = Date.now();
        // start processing.
        cap.read(src);
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
        cv.imshow('canvasOutput', dst);
        // schedule the next one.
        let delay = 1000/FPS - (Date.now() - begin);
        setTimeout(processVideo, delay);
    } catch (err) {
        utils.printError(err);
    }
};

// schedule the first one.
setTimeout(processVideo, 0);

*/

var video = document.getElementById("videoElement");

function start() {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });

    let canvasFrame = document.getElementById("canvasInput"); // canvasFrame is the id of <canvas>
let context = canvasFrame.getContext("2d");
let src = new cv.Mat(height, width, cv.CV_8UC4);
let dst = new cv.Mat(height, width, cv.CV_8UC1);
const FPS = 30;
function processVideo() {
    let begin = Date.now();
    context.drawImage(video, 0, 0, width, height);
    src.data.set(context.getImageData(0, 0, width, height).data);
    cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
    cv.imshow("canvasOutput", dst); // canvasOutput is the id of another <canvas>;
    // schedule next one.
    let delay = 1000/FPS - (Date.now() - begin);
    setTimeout(processVideo, delay);
}
// schedule first one.
setTimeout(processVideo, 0);
}

function stop() {
    var stream = video.srcObject;
    var tracks = stream.getTracks();
  
    for (var i = 0; i < tracks.length; i++) {
      var track = tracks[i];
      track.stop();
    }
  
    video.srcObject = null;
  }



