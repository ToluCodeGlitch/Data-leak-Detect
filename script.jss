document.getElementById('scanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const input = document.getElementById('inputField').value.trim();
  const output = document.getElementById('output');
  const results = document.getElementById('results');

  if (!input) return;

  // Simulated breach database
  const breachedAccounts = [
    'john@example.com',
    'user123',
    'admin@site.com',
    'tolu007',
    'anonymous',
  ];

  let found = breachedAccounts.includes(input.toLowerCase());

  results.classList.remove('hidden');

  output.innerHTML = found
    ? `<strong style="color: #ff4d4d;">⚠️ Oh no! "${input}" was found in known data breaches.</strong>
       <br>We recommend changing your password and enabling 2FA immediately.`
    : `<strong style="color: #00ff99;">✅ Good news! "${input}" was not found in public breach records.</strong>
       <br>Still, always use strong, unique passwords!`;
});
