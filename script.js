document.addEventListener("DOMContentLoaded", function () {
  // Selecting the screen and buttons
  const screen = document.getElementById("screen");
  const buttons = document.querySelectorAll("button");

  let currentInput = ""; // To store the current input
  let currentOperator = null; // To store the current operator

  // Event listener for all buttons
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      handleButtonClick(button.textContent);
    });
  });

  // Function to handle button clicks
  function handleButtonClick(value) {
    if (value >= "0" && value <= "9") {
      // If the button is a number
      currentInput += value;
    } else if (value === ".") {
      // If the button is a decimal point
      if (!currentInput.includes(".")) {
        currentInput += value;
      }
    } else if (value === "DEL") {
      // If the button is the delete button
      currentInput = currentInput.slice(0, -1);
    } else if (value === "RESET") {
      // If the button is the reset button
      currentInput = "";
      currentOperator = null;
    } else if (value === "=") {
      // If the button is the equal button
      calculateResult();
    } else {
      // If the button is an operator
      handleOperator(value);
    }

    // Update the screen with the current input
    updateScreen();
  }

  // Function to handle operator clicks
  function handleOperator(operator) {
    if (currentOperator !== null) {
      // If an operator is already present, calculate the result first
      calculateResult();
    }
    currentOperator = operator;
    currentInput += " " + operator + " ";
  }
	// Event listener for keyboard input
	document.addEventListener("keydown", function (event) {
		handleKeyboardInput(event.key);
	});

	// Function to handle keyboard input
	function handleKeyboardInput(key) {
		// Mapping some keyboard keys to match the calculator buttons
		const keyMapping = {
			Enter: "=",
			Backspace: "DEL",
			c: "RESET",
			"+": "+",
			"-": "-",
			"*": "x",
			"/": "/",
			".": ".",
		};

		// Check if the pressed key is a number or matches a mapped key
		const inputValue = keyMapping[key] || (/[0-9]/.test(key) ? key : null);

		if (inputValue !== null) {
			handleButtonClick(inputValue);
			updateScreen();
		}
	}

  // Function to calculate the result
  function calculateResult() {
    const expression = currentInput.split(" ");
    const num1 = parseFloat(expression[0]);
    const num2 = parseFloat(expression[2]);
    if (!isNaN(num1) && !isNaN(num2)) {
      switch (currentOperator) {
        case "+":
          currentInput = (num1 + num2).toString();
          break;
        case "-":
          currentInput = (num1 - num2).toString();
          break;
        case "x":
          currentInput = (num1 * num2).toString();
          break;
        case "/":
          if (num2 !== 0) {
            currentInput = (num1 / num2).toString();
          } else {
            currentInput = "Error";
          }
          break;
        default:
          break;
      }
      currentOperator = null;
    }
  }

  // Function to update the screen
  function updateScreen() {
    screen.value = currentInput;
  }
});
