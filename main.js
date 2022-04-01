song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("believer.mp3");
    song2 = loadSound("happier.mp3");
}

function setup()
{
    canvas = createCanvas(640, 525);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 640, 525);
}