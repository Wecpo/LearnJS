const debounceInput = document.querySelector("#debounceInput");
const deboncedValueSpan = document.querySelector("#debouncedValue");

let timeoutId;

const debounceFunc = (value, delay) => {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => (deboncedValueSpan.textContent = value), delay);
};

debounceInput.addEventListener("input", (event) =>
  debounceFunc(event.target.value, 1000)
);
