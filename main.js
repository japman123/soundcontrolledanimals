function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Qal-e21Oi/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResult);
}

function gotResult(error, results) {
    if(error){console.error(error)}
    else{
        console.log(results);
        randomRed = Math.floor(Math.random()*255) +1;
        randomGreen = Math.floor(Math.random()*255) +1;
        randomBlue = Math.floor(Math.random()*255) +1;

        document.getElementById("id1").innerHTML = "detected dog-" + dog + " detected cat-" + cat + " detected cow-" + cow + " detected lion-" + lion;
        document.getElementById("id2").innerHTML = "detected voice is of-" + results[0].label;
        document.getElementById("id1").style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
        document.getElementById("id2").style.color = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
        
        img = document.getElementById("img1");
        if(results[0].label == "bark") {
            img.src="dog.png";
            dog = dog+1;
        }
        else if(results[0].label == "meow") {
            img.src="cat.png";
            cat = cat+1;
        }
        else if(results[0].label == "moo") {
            img.src="cow.png";
            cow = cow+1;
        }
        else if(results[0].label == "roar") {
            img.src="lion.png";
            lion = lion+1;
        }

        
    }
}

lion = 0 
cow = 0
dog = 0
cat = 0
