var sliderBackground = document.getElementById("featured");
var sliderLeftCtrl = document.getElementById("left");
var sliderRightCtrl = document.getElementById("right");
var sliderData = sliderBackground.firstElementChild.getElementsByClassName("d-none");
var selection = 0;

function slide() {
    if (sliderData != null && selection < sliderData.length && sliderBackground != null) {
        sliderBackground.style.backgroundImage = "url(" + sliderData[selection].firstElementChild.getAttribute("src") + ")";
        sliderBackground.firstElementChild.lastElementChild.firstElementChild.innerHTML = sliderData[selection].children[1].innerHTML;
        sliderBackground.firstElementChild.lastElementChild.lastElementChild.innerHTML = sliderData[selection].children[2].innerHTML;
    }
}

slide();

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