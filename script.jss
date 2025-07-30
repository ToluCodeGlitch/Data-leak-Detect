function scan() {
  const input = document.getElementById("userInput").value.trim();
  const resultBox = document.getElementById("result");
  const historyBox = document.getElementById("history");
  const lastCheck = document.getElementById("lastCheck");

  if (!input) {
    resultBox.innerHTML = "⚠️ Please enter an email or username.";
    resultBox.className = "result-box warning";
    resultBox.classList.remove("hidden");
    return;
  }

  // Simulate a scan
  resultBox.innerHTML = "🔍 Scanning for breaches...";
  resultBox.className = "result-box";
  resultBox.classList.remove("hidden");

  setTimeout(() => {
    const found = Math.random() < 0.5; // Fake result

    if (found) {
      resultBox.innerHTML = `❌ Oh no! <strong>${input}</strong> was found in multiple data breaches. <br><br>👉 Change your password and enable 2FA.`;
      resultBox.className = "result-box warning";
    } else {
      resultBox.innerHTML = `✅ Great news! <strong>${input}</strong> was not found in any major breaches.`;
      resultBox.className = "result-box success";
    }

    // Save to history
    localStorage.setItem("lastCheckedUser", input);
    localStorage.setItem("lastCheckedResult", resultBox.innerHTML);

    lastCheck.innerHTML = resultBox.innerHTML;
    historyBox.classList.remove("hidden");
  }, 2000);
}

// Load history
window.onload = () => {
  const last = localStorage.getItem("lastCheckedResult");
  if (last) {
    document.getElementById("lastCheck").innerHTML = last;
    document.getElementById("history").classList.remove("hidden");
  }
};
