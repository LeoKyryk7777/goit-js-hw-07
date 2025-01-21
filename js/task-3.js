const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output")
textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value;
    const trimValue = inputValue.trim()
    if (trimValue === "" ){
        output.textContent = "Anonymous!";
    } else {
        output.textContent = trimValue;
        }
});