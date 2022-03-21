document.body.classList.add('loading');

// previous code is here

function onOpenCvReady() {
    document.body.classList.remove('loading');
  }

  // previous code is here

let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');

// previous code is here

inputElement.onchange = function() {
    imgElement.src = URL.createObjectURL(event.target.files[0]);
  };