increment = document.querySelector("#increment");
decrement = document.querySelector("#decrement");
counterValue = document.querySelector("#counterValue");

counter = 0;

increment.addEventListener("click", () => {
  counter++;
  counterValue.innerText = counter;
});
decrement.addEventListener("click", () => {
  counter--;
  counterValue.innerText = counter;
});
