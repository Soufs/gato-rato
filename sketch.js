var backgroundimg;
var gatoimg, gatomation, gato3;
var ratoimg, ratomation, rato3;


function preload() {
    backgroundimg = loadImage("images/garden.png"); 
    gatoimg = loadImage("images/cat1.png");
    gatomation = loadAnimation("images/cat2.png","images/cat3.png");
    gato3 = loadImage("images/cat4.png");
    ratoimg = loadImage("images/mouse1.png");
    ratomation = loadAnimation("images/mouse2.png","images/mouse3.png");
    rato3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    //gato
    gato = createSprite(870,600);
    gato.addImage("gatosentado", gatoimg);
    gato.scale = (0.2);

    //rato
    rato = createSprite(200,600);
    rato.addImage("imagemdorato", ratoimg);
    rato.scale = (0.15);

}

function draw() {

    background(backgroundimg);
    if(gato.x - rato.x < gato.width/2 - rato.width/2){
        gato.velocityX = 0;
        gato.x = 300;
        gato.addImage("gatopegou", gato3);
        gato.changeAnimation("gatopegou");
        gato.scale = (0.2);
        rato.addImage("ratoali", rato3);
        rato.changeAnimation("ratoali");
        rato.scale = (0.15);
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
    rato.addAnimation("ratoprovocando", ratomation);
    rato.frameDelay = 25;
    rato.changeAnimation("ratoprovocando");

    gato.velocityX = -5;
    gato.addAnimation("gatoirritado", gatomation);
    gato.changeAnimation("gatoirritado");
}


}
