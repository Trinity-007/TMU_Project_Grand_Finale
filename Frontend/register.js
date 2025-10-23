document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Placeholder until backend is ready
  alert(`Registered!\nName: ${name}\nEmail: ${email}`);
  window.location.href = "login.html";

  // 🔗 Later: replace alert with fetch() to backend API
});
