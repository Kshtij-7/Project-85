var car_height = 75, car_width = 130, car1X = 10, car1Y = 10, car2X = 10, car2Y = 80;
ctx = document.getElementById("myCanvas").getContext("2d");

car1 = "car1.png"
car2 = "car2.png"
raceIMG = "racing.png"

function add() {
    BGimg = new Image();
    BGimg.onload = uploadBG;
    BGimg.src = raceIMG;

    rovrimg = new Image();
    rovrimg.onload = uploadcar;
    rovrimg.src = car1;

    rovrrimg = new Image();
    rovrrimg.onload = uploadcar2;
    rovrrimg.src = car2;
}

function uploadBG() {
    ctx.drawImage(BGimg, 0, 0, 1000, 600)
}

function uploadcar() {
    ctx.drawImage(rovrimg, car1X, car1Y, car_width, car_height);
}

function uploadcar2() {
    ctx.drawImage(rovrrimg, car2X, car2Y, car_width, car_height);
}

window.addEventListener("keydown", keypress)

function keypress(e) {
    var keypressed = e.keyCode
    if (keypressed == '37') {
        left();
        console.log(`left`);
    }
    if (keypressed == '38') {
        up();
        console.log(`up`);
    }
    if (keypressed == '39') {
        right();
        console.log(`right`);
    }
    if (keypressed == '40') {
        down();
        console.log(`down`);
    }
    if (keypressed == '65') {
        left1();
        console.log(`left`);
    }
    if (keypressed == '87') {
        up1();
        console.log(`up`);
    }
    if (keypressed == '68') {
        right1();
        console.log(`right`);
    }
    if (keypressed == '83') {
        down1();
        console.log(`down`);
    }
}

function up() {
    if (car1Y >= 0) {
        console.log(`When up arrow key is pressed x = ${car1X}, y = ${car1Y}`)
        car1Y = car1Y - 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("Y is 0 already!")
    }
}

function down() {
    if (car1Y <= 500) {
        console.log(`When down arrow key is pressed x = ${car1X}, y = ${car1Y}`)
        car1Y = car1Y + 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("Y is 500 already!")
    }
}

function left() {
    if (car1X >= 0) {
        console.log(`When left arrow key is pressed x = ${car1X}, y = ${car1Y}`)
        car1X = car1X - 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("X is 0 already!")
    }
}

function right() {
    console.log(`When right arrow key is pressed x = ${car1X}, y = ${car1Y}`)
    if (car1X <= 850) {
        car1X = car1X + 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("X is 850 already!")
        document.getElementById("game_status").innerHTML = "Car1 Wins!!";
        console.log("Car1 Wins!!")
    }
}
function up1() {
    if (car2Y >= 0) {
        console.log(`When W key is pressed x = ${car1X}, y = ${car1Y}`)
        car2Y = car2Y - 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("Y is 0 already!")
    }
}

function down1() {
    if (car2Y <= 500) {
        console.log(`When S key is pressed x = ${car1X}, y = ${car1Y}`)
        car2Y = car2Y + 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("Y is 500 already!")
    }
}

function left1() {
    if (car2X >= 0) {
        console.log(`When A key is pressed x = ${car1X}, y = ${car1Y}`)
        car2X = car2X - 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        console.log("X is 0 already!")
    }
}

function right1() {
    if (car2X <= 850) {
        console.log(`When D key is pressed x = ${car1X}, y = ${car1Y}`)
        car2X = car2X + 10
        uploadBG();
        uploadcar();
        uploadcar2();
    }
    else {
        document.getElementById("game_status").innerHTML = "Car2 Wins!!";
        console.log("X is 850 already!")
        console.log("Car2 wins!")
    }
}