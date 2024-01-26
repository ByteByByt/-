const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const yuppBtn = document.querySelector(".yupp-btn"); // Add this line

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay, see yaa!! ";
    gif.src = "second.gif";

    // Hide buttons after clicking 'Yes'
    yesBtn.style.display = "none";
    noBtn.style.display = "none";

    // Show the "Yayy, see yaa!!" page immediately
    wrapper.style.display = "none";
    document.getElementById("yayPage").style.display = "block";
});


noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Add an event listener for the "Yupp" button
yuppBtn.addEventListener("click", () => {
    // Transition to the "Thank You!" page
    document.getElementById("yayPage").style.display = "none";
    document.getElementById("thankYouPage").style.display = "block";
});
// ...

// Add an event listener for the "No" button in the "Yay, see yaa!!" page
const noBtnYay = document.querySelector(".no-btn-yay");

noBtnYay.addEventListener("mouseover", () => {
    const noBtnRect = noBtnYay.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtnYay.style.left = randomX + "px";
    noBtnYay.style.top = randomY + "px";
});
