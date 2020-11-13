var sliderBackground = document.getElementById("featured");
var sliderLeftCtrl = document.getElementById("left");
var sliderRightCtrl = document.getElementById("right");

if (sliderLeftCtrl != null) {
    sliderLeftCtrl.addEventListener("click", function(e) { handleLeftClickCtrl(e); });
}

if (sliderRightCtrl != null) {
    sliderRightCtrl.addEventListener("click", function(e) { handleRightClickCtrl(e); });
}

function handleLeftClickCtrl(e) {
    sliderBackground.style.backgroundImage = "url(\"https://cdn.pixabay.com/photo/2014/05/02/23/46/bridge-336475_960_720.jpg\")";
}

function handleRightClickCtrl(e) {
    sliderBackground.style.backgroundImage = "url(\"https://cdn.pixabay.com/photo/2016/02/19/11/25/supreme-court-building-1209701_960_720.jpg\")";
}