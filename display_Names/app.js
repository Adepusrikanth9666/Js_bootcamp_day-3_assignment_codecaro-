const names = [
  "Aarav",
  "Sanya",
  "Vikram",
  "Neha",
  "Rohan",
  "Priya",
  "Amit",
  "Meera",
  "Rajiv",
  "Ananya",
];

let currentIndex = 0;

const userName = document.getElementById("user-name");
userName.innerText = names[currentIndex];

function previousBtnClick() {
  currentIndex -= 1;
  if (currentIndex === -1) {
    currentIndex = names.length - 1;
  }
  userName.innerText = names[currentIndex];
}

function nextBtnClick() {
  currentIndex += 1;
  if (currentIndex === names.length) {
    currentIndex = 0;
  }
  userName.innerText = names[currentIndex];
}
