const dislay = document.getElementById("display");

function appendToDiplay(input) {
  dislay.value += input;
}

function clearDisplay() {
  dislay.value = "";
}

function calculate() {
  try {
    dislay.value = eval(dislay.value);
  } catch (error) {
    dislay.value = "Error";
  }
}
