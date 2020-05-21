window.addEventListener("load", changeColorRGB);

function changeColorRGB() {
  let rangeRed = document.getElementById("colorRangeRed").value;
  let rangeGreen = document.getElementById("colorRangeGreen").value;
  let rangeBlue = document.getElementById("colorRangeBlue").value;
  let windowColor = document.getElementById("windowColor");
  let rgbValue = "RGB(" + rangeRed + "," + rangeGreen + "," + rangeBlue + ")";
  windowColor.style.backgroundColor = rgbValue;

  document.getElementById("valueColorRed").value = rangeRed;
  document.getElementById("valueColorGreen").value = rangeGreen;
  document.getElementById("valueColorBlue").value = rangeBlue;
  document.getElementById("rgbColor").innerHTML = rgbValue;
}

document
  .getElementById("colorRangeRed")
  .addEventListener("input", changeColorRGB);
document
  .getElementById("colorRangeGreen")
  .addEventListener("input", changeColorRGB);
document
  .getElementById("colorRangeBlue")
  .addEventListener("input", changeColorRGB);
