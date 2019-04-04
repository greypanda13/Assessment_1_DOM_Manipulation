document.addEventListener("DOMContentLoaded", function() {

  var displayText = document.getElementById("number-holder");
  var textBox = document.getElementById("numberToAddSub");
  var buttons = document.querySelectorAll("button");

  var plusButton = document.getElementById("plus");
  var minusButton = document.getElementById("minus");
  plusButton.addEventListener("click", plusButtonEvents);
  minusButton.addEventListener("click", minusButtonEvents);

  function plusButtonEvents() {
    displayText.textContent = Number(displayText.textContent) + Number(textBox.value);
  }
  function minusButtonEvents() {
    displayText.textContent = Number(displayText.textContent) - Number(textBox.value);
  }

});
