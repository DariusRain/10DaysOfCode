let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  let num = parseInt(btn.innerText);
  btn.innerText = num + 1;
});