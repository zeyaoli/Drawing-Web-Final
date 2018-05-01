var video = document.getElementById("flower");

function walkVideo() {
  document.getElementById("walking").innerHTML = '<video src="media/walk.mp4" width="1280" height="720" type="video/mp4" autoplay loop muted></video>'
}

function walkVideoChangeWidth() {
  document.getElementById("walking").style.width = "720px";
}

function background_one() {
  document.getElementById("bg-one").innerHTML = '<video src="media/talia_bg.mp4" type="video/mp4"autoplay loop muted></video>'
}

function background_black() {
  document.getElementById("bg-one").innerHTML = '<img src="media/black.png"></img>'
}

function flower_one() {
  video.innerHTML = '<video src="media/flower.mp4" width="320" height="180" type="video/mp4" autoplay loop muted></video>';
  // video.style.display = "inline";
}

function flower_two() {
  document.getElementById("flowerTwo").innerHTML = '<video src="media/white-flower.mp4" width="320" height="180" type="video/mp4" autoplay loop muted></video>';
}

function mud_video() {
  document.getElementById("mud").innerHTML = '<video src="media/mud.mp4" width="320" height="180" type="video/mp4" autoplay loop muted></video>';
}

function mud_two_video() {
  document.getElementById("mud-two").innerHTML = '<video src="media/mud.mp4" width="320" height="180" type="video/mp4" autoplay loop muted></video>';
}


function stand_one_video() {
  document.getElementById("stand-one").innerHTML = '<video src="media/stand-one.mp4" width="640" height="360" type="video/mp4" autoplay loop muted></video>';
}

function stand_two_video() {
  document.getElementById("stand-two").innerHTML = '<video src="media/stand-two.mp4" width="640" height="360" type="video/mp4" autoplay loop muted></video>';
}

function floor() {
  document.getElementById("floor").innerHTML = '<video src="media/floor.mp4" width="640" height="360" type="video/mp4" autoplay loop muted></video>';
}

function stand_three_video() {
  document.getElementById("stand-three").innerHTML = '<video src="media/stand-three.mp4" width="640" height="360" type="video/mp4" autoplay loop muted></video>';
}

function chorus_flower_video() {
  document.getElementById("chorus_flower").innerHTML = '<video src="media/chorus-flower.mp4" width="640" height="360" type="video/mp4" autoplay loop muted></video>';
}

function changeFlower() {
  document.getElementById("chorus_flower").style.top = "5%";
  document.getElementById("chorus_flower").style.left = "5%";
}

function changeFlowerTwo() {
  document.getElementById("chorus_flower").style.top = "5%";
  document.getElementById("chorus_flower").style.left = "50%";
}

function bedVideo() {
  document.getElementById("bed").innerHTML = '<video src="media/bed1.mp4" width="960" height="540" type="video/mp4" autoplay loop muted></video>';
}

function lipVideo() {
  document.getElementById("lip").innerHTML = '<video src="media/lip.mp4" width="960" height="540" type="video/mp4" autoplay loop muted></video>';
}

function disappearFirstScene() {
  video.innerHTML = '';
  document.getElementById("mud").innerHTML = '';
  document.getElementById("mud-two").innerHTML = '';
  document.getElementById("flowerTwo").innerHTML = '';
}

function disappearStandOne() {
  document.getElementById("stand-one").innerHTML = '';
}

function disappearStandTwo() {
  document.getElementById("stand-two").innerHTML = '';
}

function disappearFloor() {
  document.getElementById("floor").innerHTML = '';
}

function disappearStandThree() {
  document.getElementById("stand-three").innerHTML = '';
}

function disappearWalk() {
  document.getElementById("walking").innerHTML = '';
}

function disappearFlower() {
  document.getElementById("chorus_flower").innerHTML = '';
}

function disappearLip() {
  document.getElementById("lip").innerHTML = '';
}

function disappearBed() {
  document.getElementById("bed").innerHTML = '';
}


setTimeout(background_one, 1);
setTimeout(background_black, 75000);
setTimeout(flower_one, 2500);
setTimeout(flower_two, 3500);
setTimeout(mud_video, 8000);
setTimeout(mud_two_video, 8000);
setTimeout(stand_one_video, 21000);
setTimeout(disappearStandOne, 35999);
setTimeout(stand_two_video, 26000);
setTimeout(disappearStandTwo, 32999);
setTimeout(floor, 33000);
setTimeout(disappearFloor, 37999);
setTimeout(stand_three_video, 38000);
setTimeout(disappearStandThree, 45000);
setTimeout(disappearFirstScene, 36000);
setTimeout(walkVideo, 47000);
setTimeout(walkVideoChangeWidth, 50000);
setTimeout(disappearWalk, 53000);
setTimeout(chorus_flower_video, 52500);
setTimeout(changeFlower, 58000);
setTimeout(changeFlowerTwo, 61000);
setTimeout(disappearFlower, 63000);
setTimeout(bedVideo, 62500);
setTimeout(lipVideo, 66000);
setTimeout(disappearLip, 72000);
setTimeout(disappearBed, 75000);