function displayUserName () {
    const nameFromLocalStorage = localStorage.getItem("fname")
    userNameText.textContent = nameFromLocalStorage
  
}
  
displayUserName()