song1 = "";
song2 = "";
LX = 0;
LY = 0;
RX = 0;
RY = 0;
function setup(){
canvas = createCanvas(500,400);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotposes);
}
function draw(){
    image(video, 0, 0, 500, 400);
}

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function modelLoaded(){
    console.log("modelLoaded");
}

function gotposes(results){
    console.log(results);
    LX = results[0].pose.leftWrist.x;
    LY = results[0].pose.leftWrist.y;
    RX = results[0].pose.rightWrist.x;
    RY = results[0].pose.rightWrist.y;
    console.log("leftWristx="+LX+"leftWristy="+LY+"rightWristx="+RX+"rightWristy="+RY);

}