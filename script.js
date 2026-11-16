
const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");

const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

function setPeriod(period) {

    // Change all prices
    prices.forEach(function(price) {
        price.textContent = price.dataset[period];
    });

    // Change billing labels
    units.forEach(function(unit) {
        unit.textContent =
            period === "monthly" ? "per month" : "per year";
    });

    // Update active button
    monthlyButton.classList.toggle("active", period === "monthly");
    yearlyButton.classList.toggle("active", period === "yearly");

    // Update accessibility status
    monthlyButton.setAttribute(
        "aria-pressed",
        String(period === "monthly")
    );

    yearlyButton.setAttribute(
        "aria-pressed",
        String(period === "yearly")
    );
}

// Monthly button
monthlyButton.addEventListener("click", function() {
    setPeriod("monthly");
});

// Yearly button
yearlyButton.addEventListener("click", function() {
    setPeriod("yearly");
});

// Default billing period
setPeriod("monthly");

// Plan selection buttons
const planButtons = document.querySelectorAll(".plan-button");

planButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const selectedPlan = button.textContent.trim();

        alert("Thank you for choosing " + selectedPlan + "!");
    });
});
