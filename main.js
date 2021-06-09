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
    document.getElementById("result_object_name").innerHTML = results[0].label;
    
    searching();
  }
}

function searching(){
  var obj1= document.getElementById("t1").value;
  if((obj1!= null) && (result[0]==obj1)){ //take user input
    alertTone.play();
		document.getElementById("d1").innerHTML = "MATCH";

	  console.log("match");
	  save('capture1.png');
	}
  else{
    document.getElementById("d1").innerHTML = "Not found"
  }
}


