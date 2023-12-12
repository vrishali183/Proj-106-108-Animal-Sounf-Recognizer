function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true, video:false});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;


    document.getElementById("").innerHTML = 'Detected voice is of  - '+ results[0].label;//add result_label
    document.getElementById("").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat;//result_count
    document.getElementById("").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";// add result_label
    document.getElementById("").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";//result_count
   //add id animal_image
    img = document.getElementById('');

    if (results[0].label == "Barking") {
      img.src = 'bark.gif';
      dog = dog+1;
    } else if (results[0].label == "Meowing") {
      img.src = 'meow.gif';
      cat = cat + 1;
    } else{
      img.src = 'listen.gif';
    }
  }
}
