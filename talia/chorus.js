const canvas_walk = document.getElementById('walk');
const ctx = canvas_walk.getContext('2d');

var rWidth = 640;
var rHeight = 360;
var pixelScale = window.devicePixelRatio; 

var walkV = document.getElementById("#walk");

if (walkV) {
  walkV.addEventListener('loadeddata', setup);


  function setup() {
    // set the display size
    canvas_walk.style.width = rWidth + 'px';
    canvas_walk.style.height = rHeight + 'px';

    // Set actual device pixels
    canvas_walk.width = rWidth * pixelScale;
    canvas_walk.height = rHeight * pixelScale;

    // console.log(pixelScale);

    // normalize the coordinate system
    ctx.scale(pixelScale, pixelScale);

    drawTwo();
  }

  function drawTwo() {
    var imgScale = 10;

    ctx.drawImage(walkV, 0, 0, 640 / (imgScale * pixelScale), 360 / (imgScale * pixelScale));


    var imageData = ctx.getImageData(0, 0, rWidth / imgScale, rHeight / imgScale);
    var data = imageData.data;

    ctx.clearRect(0, 0, rWidth, rHeight);

    for (var y = 0; y < imageData.height; y++) {
      for (var x = 0; x < imageData.width; x++) {
        var index = (x + y * imageData.width) * 4;

        var r = data[index + 0]; // red
        var g = data[index + 1]; // green
        var b = data[index + 2]; // blue
        var a = data[index + 3]; // alpha

        var gray = (r + g + b) / 3; // average pixel channels to create shade of gray
        ctx.fillStyle = 'rgb(' + gray + ',' + gray + ',' + gray + ')'; // apply gray as a fill color to subsequent shapes
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);
        ctx.save();
        ctx.translate(imgScale / 2, imgScale / 2);
        ctx.beginPath();
        ctx.fillStyle = 'rgba(' + red + ',' + green + ',' + blue + ',0.5)';
        ctx.arc(x * imgScale, y * imgScale, imgScale / 2 * gray / 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // ctx.putImageData(imageData, 0, 0);

    requestAnimationFrame(drawTwo);

  }

  window.addEventListener('load', setup);
};