Webcam.set({

width:350,
height:300,
image_format:"png",
png_quality:90,
});

camera=document.getElementById("camera");

Webcam.attach ( '#camera' );

function take_snapshot()
{Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML="<img id='image_result' src='"+data_uri+"'>";
})

}
console.log("ml5_version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tVtyvFb2-/model.json", modelLoaded);

function modelLoaded()
{
    console.log(" Model Loaded ");
}
function check()
{
img_classifier=document.getElementById("image_result");
classifier.classify(img_classifier, gotResult);
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_result").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}
