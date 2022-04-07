noseX=0;
noseY=0;
function preload() {
mustache=loadImage("https://i.postimg.cc/GhctPrnX/image-removebg-preview-1.png");
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
    image(mustache,noseX-30,noseY-30,80,80);
}
function take_picture() {
    save("mustash.png");
}
function modelLoaded() {
    console.log("success");

}
function gotResult( Result) {
    

   
        if (Result.length > 0) {
            noseX=Result[0].pose.nose.x;
            noseY=Result[0].pose.nose.y;
          console.log(noseX);
          console.log(noseY);

        }
    
}