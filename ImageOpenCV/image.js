let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');
inputElement.addEventListener('change', (e) => {
  imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

document.getElementById('circlesButton').onclick = function() {
  this.disabled = true;
  document.body.classList.add('loading');

  // circle detection code
  // circle detection code
let srcMat = cv.imread('imageCanvas');
let displayMat = srcMat.clone();
let circlesMat = new cv.Mat();
cv.cvtColor(srcMat, srcMat, cv.COLOR_RGBA2GRAY);
  this.disabled = false;
  document.body.classList.remove('loading');
  cv.HoughCircles(srcMat, circlesMat, cv.HOUGH_GRADIENT, 1, 45, 75, 40, 0, 0);
};


for (let i = 0; i < circlesMat.cols; ++i) {
  let x = circlesMat.data32F[i * 3];
  let y = circlesMat.data32F[i * 3 + 1];
  let radius = circlesMat.data32F[i * 3 + 2];
  let center = new cv.Point(x, y);

  // draw circles
  cv.circle(displayMat, center, radius, [0, 0, 0, 255], 3);
}

imgElement.onload = function() {
  let mat = cv.imread(imgElement);
  
  cv.imshow('canvasOutput', mat);
  

  mat.delete();
};
function onOpenCvReady() {
  document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}