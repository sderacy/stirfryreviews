var bars =
  ["Earl's Kitchen and Bar",
    "The Drake Pub",
    "Al's Airport Inn",
    "Firkin Tavern",
    "Landmark Americana",
    "Stout NYC",]

var barPages =
  ["earlkitchen_bar.html",
    "drakepub.html",
    "alsairportinn.html",
    "firkintavern.html",
    "landmarkamericana.html",
    "stout.html",]

var pizzerias =
  ["Mamma Flora's Trattoria",
    "King's Pizzarama",
    "Ruben's Pizza",
    "Sottocasa",
    "Made in NYC Pizza",
    "Artichoke Basille's Pizza",]

var pizzeriaPages =
  ["mamafloras.html",
    "kingspizzarama.html",
    "rubens.html",
    "sottocasa.html",
    "madeinnycpizza.html",
    "artichokebasille.html",]

var restaurants =
  ["Melbas",
    "Ichiran Ramen",
    "Hard Rock Cafe",
    "Zanmi",
    "Shogun Legends",
    "Red Rooster",]

var restaurantPages =
  ["melbas.html",
    "ichiranramen.html",
    "hardrockcafe.html",
    "zanmi.html",
    "shogunlegends.html",
    "redrooster.html",]

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMobileMenu() {
  var x = document.getElementById("myTopNav");
  if (x.className === "nav-link topnav") {
    x.className += " responsive";
  } else {
    x.className = "nav-link topnav";
  }
}

function getReview(isNext) {
  let rawPageName = document.getElementById("docTitle").innerText;
  let pageName = rawPageName.split(" - ");
  let barIndex = bars.indexOf(pageName[1]);
  let pizzaIndex = pizzerias.indexOf(pageName[1]);
  let restaurantIndex = restaurants.indexOf(pageName[1]);

  console.log(pageName[1] + "-" + barIndex);
  if (barIndex != -1) {
    if (isNext) {
      nextReview(barPages, barIndex);
    } else {
      prevReview(barPages, barIndex);
    }
  } else if (pizzaIndex != -1) {
    if (isNext) {
      nextReview(pizzeriaPages, pizzaIndex);
    } else {
      prevReview(pizzeriaPages, pizzaIndex);
    }
  } else if (restaurantIndex != -1) {
    if (isNext) {
      nextReview(restaurantPages, restaurantIndex);
    } else {
      prevReview(restaurantPages, restaurantIndex);
    }
  }
}

function nextReview(reviewSet, index) {
  if (index + 1 < reviewSet.length) {
    window.location.href = "./" + reviewSet[index + 1];
  } else {
    window.location.href = "./" + reviewSet[0];
  }

}

function prevReview(reviewSet, index) {
  if (index - 1 > -1) {
    window.location.href = "./" + reviewSet[index - 1];
  } else {
    window.location.href = "./" + reviewSet[reviewSet.length - 1];
  }
}

let submitButton = document.getElementById("submitButton");

function checkEnableButton() {
  let fullName = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");

  if (
    fullName.value &&
    email.value &&
    subject.value
  ) {
    submitButton.classList.remove("disabled")
  } else {
    if (!submitButton.classList.contains("disabled")) {
      submitButton.classList.add("disabled");
    }
  }
}

if (document.URL.includes("index.html")) {
  submitButton.addEventListener('click', function () {
    if (!submitButton.classList.contains("disabled")) {
      alert("Email sent successfully! Redirecting...")
      submitButton.classList.add("disabled");
    }
  }
  )
}
