function preload() {

}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    canvas.background("red");
    video = createCapture(VIDEO);
    video.hide();
    video.size(300, 300);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResult);
}
function draw() {
    image(video, 0, 0, 300, 300)
}
function take_picture() {
    save("mustash.png");
}
function modelLoaded() {
    console.log("success");

}
function gotResult(error, Result) {
    if (error) {
        console.log(error)
    }

    else {
        if (Result.length > 0) {
            // console.log(Result)
            console.log("upperlips x= " + Result[0].pose.upperlips.x);
            console.log("upperlips y= " + Result[0].pose.upperlips.y);
        }


    }
}