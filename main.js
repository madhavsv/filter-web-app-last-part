function preload() {
    mustache=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}
noseY=0;
noseX=0;
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);

    
}
function draw() {
    Image(video,0, 0, 300, 300);
    Fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
    Image(mustache, noseX, noseY, 30, 30);
    
}
function take_Snapshot() {
    save('myFilterImge.png')
    
}
function modelLoaded(params) {
    console.log('poseNet is intialized')
    
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x=" + results[0].pose.nose.x -5)
        console.log("nose y=" + results[0].pose.nose.y -5)
    }
}