invalid = true;

document.getElementById("trackBtn").addEventListener("click", function () {
  document.getElementById("trackTxt").value = "";
  if (invalid) {
    document.getElementById("output-holder").innerHTML =
      '<div id="output">Invalid order number</div>';
    $("#output").fadeIn(1000);
    setTimeout(() => {
      $("#output").fadeOut(1000);
    }, 3000);
  }
});
