// review data
const data = [
  {
    img: "./review-profile-img/naruto.png",
    name: "Naruto",
    role: "Vlogger",
    review:
      "The new restaurant in town exceeded my expectations! The atmosphere was cozy, the service was impeccable, and the food was absolutely delicious. I highly recommend trying their signature dish—it was a flavor explosion in every bite.",
  },
  {
    img: "./review-profile-img/sasuke.jpg",
    name: "Sasuke",
    role: "Writer",
    review:
      "This book had me hooked from the first page. The characters were well-developed, and the plot was full of twists and turns that kept me guessing until the very end. A must-read for anyone who loves a gripping mystery.",
  },
  {
    img: "./review-profile-img/kakashi.png",
    name: "Kakashi",
    role: "Software Engineer",
    review:
      "I recently purchased this laptop, and I couldn't be happier. It's lightning-fast, has excellent battery life, and the display is stunning. Whether I'm working or streaming movies, it delivers exceptional performance. Worth every penny.",
  },
  {
    img: "./review-profile-img/jiraiya.jpg",
    name: "Jiraiya",
    role: "Vlogger",
    review:
      "The concert was a night to remember! The band's energy was infectious, and they played all their hits, keeping the crowd on their feet. The venue was perfect for the atmosphere, and the sound quality was top-notch. Can't wait for their next tour!",
  },
];

// buttons selectors
const nextBtn = document.querySelector(".review .next-btn");
const prevbtn = document.querySelector(".review .prev-btn");

// profile image selector
const profileImg = document.querySelector(".review .profile-img");

// profile name selector
const profileName = document.querySelector(".review .profile-name");

// profile role selector
const profileRole = document.querySelector(".review .profile-role");

// profile review selector
const profileReview = document.querySelector(".review .profile-review");

let counter = 0;
let reviewDataSize = data.length;

console.log("counter : ", counter);
console.log("Review Data : ", reviewDataSize);

function handleCounterNext() {
  if (counter >= reviewDataSize - 1) {
    counter = -1;
  }
  showReview(++counter);
}
function handleCounterPrev() {
  if (counter <= 0) {
    counter = reviewDataSize;
  }
  showReview(--counter);
}

function showReview(counter) {
  console.log(counter);
  profileImg.src = data[counter].img;
  profileName.textContent = data[counter].name;
  profileRole.textContent = data[counter].role;
  profileReview.textContent = data[counter].review;
}

nextBtn.addEventListener("click", handleCounterNext);
prevbtn.addEventListener("click", handleCounterPrev);

window.addEventListener("DOMContentLoaded", showReview(counter));
