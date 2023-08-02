var slider = document.getElementById("budgetSlider");
var budgetValue = document.getElementById("budgetValue");

slider.oninput = function () {
  budgetValue.innerHTML = this.value;
  this.style.background = `linear-gradient(to right, gold 0%, gold ${this.value}%, #fff ${this.value}%, white 100%)`;
};
