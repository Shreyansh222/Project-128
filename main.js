Beyblade_Burst_Surge = "";
Beyblade_Burst_Turbo = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function setup()
{
canvas = createCanvas(400,350);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);

leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
}
}

function preload()
{
Beyblade_Burst_Surge = loadSound("Beyblade Burst Surge.mp3");
Beyblade_Burst_Turbo = loadSound("Beyblade Burst Turbo.mp3")
}

function draw()
{
image(video,0,0,500,479);
}

function play()
{
Beyblade_Burst_Surge.play();
}