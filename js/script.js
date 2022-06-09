// Question 1

var outOfStock = true;
if (outOfStock === true) {
  console.log("Out of stock.");
} else {
  console.log("In stock.");
}

// Question 2

for (var i = 15; i <= 25; i++) {
  if (i === 17 || i === 20) {
    console.log(i);
  }
}

// Question 3

var games = [
  {
    title: "Grand Theft Auto",
    rating: 4.48,
  },
  {
    title: "Portal 2",
    rating: 3.5,
  },
  {
    title: "Team Fortress",
    rating: null,
  },
  {
    title: "The Witcher",
    rating: 3.0,
  },
  {
    title: "The Elder Scrolls",
    rating: 2.9,
  },
];

var titleAndRating = document.querySelector("ul");

for (var i = 0; i < games.length; i++) {
  if (games[i].rating < 3.5) {
    titleAndRating.innerHTML +=
      "<li>" + games[i].title + ": " + games[i].rating + "</li>";
  }
}

// Question 4

function whatIDontLike(thisFood) {
  if (typeof thisFood === "string") {
    console.log("I don't like", thisFood);
  } else {
    console.log("Please send a string");
  }
}

whatIDontLike("raw tomatoes");

// Question 5

var subtraction = document.querySelector("#subtraction");

function subtractNumbers(number1, number2) {
  if (typeof number1 || typeof number2 !== "number") {
    parseInt(number1, number2);
  }
  return number1 - number2;
}

var result = subtractNumbers(null, 123);

subtraction.innerHTML = result;
if (isNaN(result)) {
  subtraction.innerHTML = "Invalid argument(s).";
}

// Question 6
var title = document.querySelector("title");
var heading = document.querySelector("h1");
var pageButton = document.querySelector(".page");
var body = document.querySelector("body");
var ul = document.querySelector("ul");

function changePage() {
  title.innerHTML = "Updated title";
  heading.innerHTML = `<a href="#">Programming Foundations Course Assignment</a>`;
  heading.style.color = "green"; // Won't change color because of <a> specificity
  heading.style.fontFamily = "impact";
  body.style.backgroundColor = "yellow";
  ul.style.listStyle = "none";
  ul.style.padding = "0px";
}

pageButton.onclick = changePage;

// Question 7

var priceButton = document.querySelector(".price");
var total = document.querySelector("#total");

var toys = [
  {
    name: "Lego",
    price: 15.6,
  },
  {
    name: "Master of the Universe",
    price: "28.3",
  },
  {
    name: "Barbie",
    price: null,
  },
  {
    name: "Mr Potato Head",
    price: 89.99,
  },
];

function addPriceTotal() {
  var sum = 0;
  for (var i = 0; i < toys.length; i++) {
    if (toys[i].price === null) {
      toys[i].price = 0;
    }
    sum += parseFloat(toys[i].price);
  }
  total.innerHTML = sum;
}

priceButton.onclick = addPriceTotal;
