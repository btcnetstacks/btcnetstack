let currentOption = 1;
let options = document.querySelectorAll(".option");
let product = document.querySelector('meta[name="product"]').content;
let cardElement = document.getElementsByClassName("front")[0];
let color;
switchOption(1);

function switchOption(i) {
  currentOption = i;
  document.getElementById("priceholder").innerHTML = prices[i - 1];
  document.getElementById("balanceholder").innerHTML = balance[i - 1];
  document.getElementsByClassName("stock")[0].innerText = stocks[i - 1];
  if (stocks[i - 1] != "UNLIMITED") {
    color = stocks[i - 1] > 10 ? "stock green" : "stock red";
  } else {
    color = "stock purple";
  }
  document.getElementsByClassName("stock")[0].classList = color;
  for (let option of options) {
    option.classList.remove("active");
  }
  if (!options[i - 1].classList.contains("active")) {
    options[i - 1].classList += " active";
  }
  switch (product) {
    case "2":
      cardElement.classList = `front ${options[i - 1].id}`;
      document.querySelectorAll(".card-type div")[0].innerText = "visa";
      break;
    case "1":
      cardElement.classList = `front ${options[i - 1].id} white`;
      abbr(options[i - 1].id);
      document.querySelectorAll(".card-type div")[0].innerText = ab;
      break;
    case "3":
      cardElement.classList = `front ${options[i - 1].id}`;
      break;
    case "4":
      cardElement.classList = `front ${options[i - 1].id} paypal`;
      break;
    case "5":
      cardElement.classList = `front ${options[i - 1].id} wallet`;
      break;
    case "6":
      cardElement.classList = `front ${options[i - 1].id} software`;
      break;
  }
  document.getElementById("payment-link").href = `./order.php?id=${product}&m=${
    options[i - 1].id
  }`;
}

function abbr(s) {
  switch (s) {
    case "blue":
      ab = "b";
      break;
    case "green":
      ab = "gr";
      break;
    case "gold":
      ab = "gl";
      break;
    case "platinum":
      ab = "pl";
      break;
    case "premium":
      ab = "pr";
      break;
  }
}

document.getElementById("coupon").addEventListener("click", toggleCoupon);
document.getElementById("couponclose").addEventListener("click", toggleCoupon);

function toggleCoupon() {
  $(".coupon").toggleClass("active");
  $("body").toggleClass("unscrollable");
  document.getElementById("coupon-number").value = "";
}

let couponCodes = [""];

document.getElementById("couponapply").addEventListener("click", function () {
  let couponInput = document.getElementById("coupon-number").value;
  let coupon = false;
  for (let i = 0; i < couponCodes.length; i++) {
    if (couponInput == couponCodes[i]) {
      coupon = true;
    }
  }
  if (document.getElementById("coupon-number").value != "") {
    if (!couponCookie) {
      if (coupon) {
        document.cookie = "coupon=" + coupon + "; max-age=3600; path=/";
        document.getElementById("coupon-number").value = "COUPON CODE APPLIED";
        $("#output").fadeIn(1000);
        setTimeout(() => {
          $(".coupon").removeClass("active");
        }, 4000);
        couponCookie = true;
      } else {
        document.getElementById("coupon-number").value = "WRONG COUPON CODE";
      }
    } else {
      if (coupon) {
        document.getElementById("coupon-number").value = "ALREADY USED";
      }
    }
  }
});

document.getElementById("cardelem").addEventListener("click", toggleInfo);
document.getElementById("productinfo").addEventListener("click", toggleInfo);

function toggleInfo() {
  $(".info").toggleClass("active");
  $("body").toggleClass("unscrollable");
}

document.getElementById("coupon-number").addEventListener("focus", function () {
  switch (document.getElementById("coupon-number").value) {
    case "ALREADY USED":
    case "WRONG COUPON CODE":
    case "COUPON CODE APPLIED":
      document.getElementById("coupon-number").value = "";
      break;
  }
});
