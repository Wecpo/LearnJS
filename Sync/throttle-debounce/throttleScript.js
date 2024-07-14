const throttleInput = document.querySelector("#throttleInput");
const throttledValueSpan = document.querySelector("#throttledValue");

let isThrottle;

const throttleFunc = (value, delay) => {
  if (isThrottle) return;

  isThrottle = true;

  setTimeout(() => {
    throttledValueSpan.textContent = value;
    isThrottle = false;
  }, delay);
};

throttleInput.addEventListener("input", (event) =>
  throttleFunc(event.target.value, 1000)
);
