var result;
var alertTone= document.getElementById("A1");
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
	result=results[0].label;
  //add a code to display identified onject name 
    
    searching();
  }
}

function searching(){
 //Add code to serach and match the object
}


