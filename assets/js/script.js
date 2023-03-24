const cardForm = document.getElementById("card-form");
const cardRating = document.getElementById("rating-card");
const cardThank = document.getElementById("thank-card");
const selectOption = document.getElementById("option-input");

try {
  cardForm.addEventListener("submit", (e) => {
    let hasError = false;
    if (!document.querySelector("input[name='select']:checked")) {
      alert("select one of the options");
    } else {
      cardRating.classList.add("hidden");
      cardThank.classList.remove("hidden");
      const {
        select: { value },
      } = cardForm;
      selectOption.textContent = `You selected ${value} out of 5`;
      hasError = true;
    }

    if (hasError) {
      e.preventDefault();
    }
  });
} catch (error) {
  error;
}
