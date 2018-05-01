const canvas = document.getElementById('chetto');
const context = canvas.getContext('2d');

var referenceWidth = 1280;
var referenceHeight = 720;
var pixelScale = window.devicePixelRatio;

var video = document.querySelector('video');
video.addEventListener('loadeddata', setup);

function setup() {
  //display size
  canvas.style.width = referenceWidth + 'px';
  canvas.style.height = referenceHeight + 'px';

  // Set actual device pixels
  canvas.width = referenceWidth * pixelScale;
  canvas.height = referenceHeight * pixelScale;

  // normalize the coordinate system
  context.scale(pixelScale, pixelScale);

  draw();
}

function draw() {
  var imgScale = 7;

  context.drawImage(video, 0, 0, 1280 / (imgScale * pixelScale), 720 / (imgScale * pixelScale));

  var imageData = context.getImageData(0, 0, referenceWidth / imgScale, referenceHeight / imgScale);
  var data = imageData.data;
  console.log(data.length)

  context.clearRect(0, 0, referenceWidth, referenceHeight);

  for (var y = 0; y < imageData.height; y++) {
    for (var x = 0; x < imageData.width; x++) {
      var index = (x + y * imageData.width) * 4; // index position of every pixel

      var r = data[index + 0]; // red
      var g = data[index + 1]; // green
      var b = data[index + 2]; // blue
      var a = data[index + 3]; // alpha

      var gray = (r + g + b) / 3; // average pixel channels to create shade of gray
      context.fillStyle = 'rgb(' + gray + ',' + gray + ',' + gray + ')'; // apply gray as a fill color to subsequent shapes


      if (gray <= "35") {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        context.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',0.5)';
      }
      // var red = Math.round(Math.random() * 255);
      // var green = Math.round(Math.random() * 255);
      // var blue = Math.round(Math.random() * 255);

      context.save(); // optional
      context.translate(imgScale / 2, imgScale / 2); // optional
      context.beginPath();
      // context.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',0.5)';
      context.arc(x * imgScale, y * imgScale, imgScale / 2, 0, Math.PI * 2);
      context.fill()
      context.restore();
    }
  }

  // context.putImageData(imageData, 0, 0);

  requestAnimationFrame(draw);
}