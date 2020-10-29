document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("nose").style.backgroundColor = "#22A912";
document.getElementById("head").style.transform = "rotate(15deg)";
// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px black solid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border = "4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = "5px black solid";
//Tilt Douglas’s head to the other side.
document.getElementById("head").style.transform = "rotate(345deg)";
//Make Douglas’s nose round.
document.getElementById("nose").style.borderRadius = "100%"
    //Make Douglas’s right arm green.
document.getElementById("rightarm").style.backgroundColor = "green"
    //Make Douglas’s lips pink.
document.getElementById("mouth").style.backgroundColor = "#F758CE"



var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}

var leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}