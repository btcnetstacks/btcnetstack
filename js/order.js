document.getElementById("copyButton").addEventListener("click", function () {
  let elem = document.getElementById("order-number");
  elem.select();
  elem.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(elem.value);
  document.getElementById("");
  $("#copy-confirm").fadeIn(1000);
  setTimeout(() => {
    $("#copy-confirm").fadeOut(1000);
  }, 2000);
});
