//handle button event function
function costMeasure(product, price) {
  const productCost = document.getElementById(product + "-cost");
  const productCostNo = productCost.innerText;
  productCost.innerText = price;
  calculateTotal();
}
//get input value
function getInputValue(product) {
  const memoryInput = document.getElementById(product + "-cost");
  const number = parseInt(memoryInput.innerText);
  return number;
}
//total calculation
function calculateTotal() {
  const memoryTotal = getInputValue("memory");
  const storageTotal = getInputValue("storage");
  const deliveryTotal = getInputValue("delivery");
  const total = 1299 + memoryTotal + storageTotal + deliveryTotal;
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = total;
  const finalTotal = document.getElementById("final-total");
  finalTotal.innerText = total;

  applyPromoCode();
}

//promo code apply
function applyPromoCode() {
  document
    .getElementById("apply-button")
    .addEventListener("click", function () {
      const promoCode = document.getElementById("promo-code");
      promoCodeInput = promoCode.value.toLowerCase();
      promoCode.value = "";
      const code = "stevekaku";
      if (promoCodeInput == code) {
        const finalTotal = document.getElementById("final-total");
        const previousTotal = parseInt(finalTotal.innerText);
        finalTotal.innerText = (previousTotal * 8) / 10;
      }
    });
}
applyPromoCode();
