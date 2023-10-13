// Get references to the HTML elements
const resultInput = document.getElementById("result");
const buttons = document.querySelectorAll("button");

// Initialize a variable to store the current calculation
let currentCalculation = "";

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    
    // Handle button clicks based on the button's text
    switch (buttonText) {
      case "C":
        // Clear the result input
        currentCalculation = "";
        resultInput.value = "";
        break;
      case "=":
        // Evaluate and display the result
        try {
          const result = eval(currentCalculation);
          resultInput.value = result;
        } catch (error) {
          resultInput.value = "Error";
        }
        break;
      default:
        // Append the button's text to the current calculation
        currentCalculation += buttonText;
        resultInput.value = currentCalculation;
    }
  });
});
