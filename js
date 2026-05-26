console.log("Landing page loaded successfully!");

// Example alert
document.querySelectorAll(".card a").forEach(button => {
  button.addEventListener("click", () => {
    console.log("Affiliate link clicked");
  });
});