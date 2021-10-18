var height = window.innerHeight;
var $mask = $('<div id="screenshot_mask"></div>').css("border-width", "0 0 " + height + "px 0");
$("body").append($mask);


var CaptureBtn = document.querySelector("#recordVideo");
CaptureBtn.addEventListener("click", function (e) {
  document.querySelector("body").classList.add("edit_cursor");
  selectArea(e);
});

function selectArea() {

  //window.onload
}