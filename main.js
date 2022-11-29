difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    canvas = createCanvas(550,500);
    canvas.position(560,80);
    
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
    }
    function modelLoaded() {
        console.log('PoseNet is Initialized!')
    }

    function gotPoses(results)
{
    if(results.length > 0)
{
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);   
}
}
 function draw()
 {
    background("red")
    textSize(difference)
    fill("blue")
    text('Ayan',50,300)
 }