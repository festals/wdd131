const countDisplay = document.querySelector("#count");

let numComment = Number(window.localStorage.getItem("numComment-ls")) || 0;

if (numComment == 0) {
	countDisplay.textContent = `This is your first comment. 🥳 Welcome!`;
    numComment = 1;
} else {
  countDisplay.innerHTML = numComment;
}

numComment++;

localStorage.setItem("numComment-ls", numComment);




const userName = document.querySelector("#fname").value
userNameText.textContent = userName
localStorage.setItem("fname", userName)

function displayUserName () {
  const nameFromLocalStorage = localStorage.getItem("fname")
  userNameText.textContent = nameFromLocalStorage

}

displayUserName()


