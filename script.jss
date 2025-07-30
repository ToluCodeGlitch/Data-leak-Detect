const form = document.getElementById('checkForm');
const input = document.getElementById('emailInput');
const resultPanel = document.getElementById('result');
const resultTitle = document.getElementById('resultTitle');
const resultMessage = document.getElementById('resultMessage');
const tips = document.getElementById('tips');

// Simulated breach database
const fakeBreaches = ['user@example.com', 'test@leaked.com', 'hello@world.com'];

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = input.value.trim().toLowerCase();

  // Simulate breach check
  const breached = fakeBreaches.includes(email);

  resultPanel.classList.remove('hidden');
  if (breached) {
    resultTitle.textContent = '⚠️ Data Found in Breach';
    resultMessage.textContent = `${email} has been found in known breaches.`;
    tips.classList.remove('hidden');
  } else {
    resultTitle.textContent = '✅ No Breach Detected';
    resultMessage.textContent = `${email} appears to be safe — no known breaches.`;
    tips.classList.add('hidden');
  }

  // Save to localStorage
  localStorage.setItem('lastChecked', email);
  localStorage.setItem('wasBreached', breached);
});
