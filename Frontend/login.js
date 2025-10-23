document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Placeholder until backend is ready
  alert(`Logged in!\nEmail: ${email}`);
  localStorage.setItem("token", "dummy_token");
  window.location.href = "dashboard.html";

  // 🔗 Later: replace alert with fetch() to backend API
});
