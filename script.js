document.getElementById("breachForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("identifier").value.trim();
  const resultBox = document.getElementById("result");

  if (input === "") {
    resultBox.innerHTML = "<p>Please enter a valid email or username.</p>";
    return;
  }

  // Simulated logic (real API can be added later)
  resultBox.innerHTML = "<p>🔍 Scanning for breaches...</p>";

  setTimeout(() => {
    const simulatedBreaches = ["breach1.com", "leakdata.net", "compromised.org"];
    const found = Math.random() < 0.5;

    if (found) {
      resultBox.innerHTML = `
        <p><strong>⚠️ Breach Detected!</strong></p>
        <ul>
          ${simulatedBreaches.map(site => `<li>🔓 ${site}</li>`).join('')}
        </ul>
        <p>Please consider updating your passwords and using a password manager.</p>
      `;
    } else {
      resultBox.innerHTML = "<p><strong>✅ No breaches found for this identifier.</strong></p>";
    }
  }, 1800);
});
