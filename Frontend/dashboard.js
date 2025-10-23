document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const nameElem = document.getElementById("studentName");
  const emailElem = document.getElementById("studentEmail");

  if (nameElem) nameElem.textContent = user.name;
  if (emailElem) emailElem.textContent = user.email;

  // Optional: Logout button
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.clear();
      window.location.href = "login.html";
    });
  }
});
