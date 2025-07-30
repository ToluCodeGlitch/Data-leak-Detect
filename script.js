document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("leakForm");
  const input = document.getElementById("inputField");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = input.value.trim();

    if (query === "") {
      result.innerHTML = "⚠️ Please enter an email or username.";
      return;
    }

    result.innerHTML = "🔍 Scanning for breaches...";

    // Simulated breach check (replace with API call if needed)
    setTimeout(() => {
      const isBreached = Math.random() > 0.5;

      result.innerHTML = isBreached
        ? `⚠️ <strong>${query}</strong> was found in known breaches. Please update your credentials.`
        : `✅ <strong>${query}</strong> was not found in known breaches. Stay safe.`;
    }, 2000);
  });
});
