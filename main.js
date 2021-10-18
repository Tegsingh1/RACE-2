canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.jpg";
car2_x = 10;
car2_y = 100;

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.on.load = uploadcar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.on.load = uploadcar2;
    car2_imgTag.src = car2_image;
    
    
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);



}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width,);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    consol.log(keyPressed)

    if(keyPressed == '38')
    {
        car1_up();
        consol.log("up arrow Key");
    }

    if(keyPressed == '40')
    {
        car1_down();
        consol.log("down arrow key");
    }

    if(keyPressed == '37')
    {
        car1_left();
        consol.log("left arrow key");
    }

    if(keyPressed == '39')
    {
        car1_up();
        consol.log("right arrow key");
    }

    if(keyPressed == '87')
    {
        car2_up();
        consol.log("w");
    }

    if(keyPressed == '65')
    {
        car2_up();
        consol.log("a");
    }

    if(keyPressed == '83')
    {
        car2_up();
        consol.log("s");
    }

    if(keyPressed == '68')
    {
        car2_up();
        consol.log("d");
    }
}

function car1_up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        consol.log("when up arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car1_down()
{
    if(car1_y >=500)
    {
        car1_y = car1_y - 10;
        consol.log("when down arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car1_left()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        consol.log("when left arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car1_right()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        consol.log("when right arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car2_up()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        consol.log("when up arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car2_down()
{
    if(car1_y >=500)
    {
        car1_y = car1_y - 10;
        consol.log("when down arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car2_left()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        consol.log("when left arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

function car2_right()
{
    if(car1_y >=0)
    {
        car1_y = car1_y - 10;
        consol.log("when right arrow is pressde, x = "+ car1_x + "| y = " +car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();

    }
}

if(car1_x > 700)
{
    consol.log("car1 Won");
    document.getElementById('Game Staus').innerHTML = "Car 1 Won!!";
}