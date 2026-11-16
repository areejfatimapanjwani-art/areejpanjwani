// This is a safe classroom demo. It never sends or stores form details.
const form = document.getElementById("demoForm");
const notice = document.getElementById("notice");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  notice.textContent = "Demo only: no login was attempted and no information was sent or saved.";
});

document.getElementById("forgot").addEventListener("click", function (event) {
  event.preventDefault();
  notice.textContent = "Password recovery is not available in this front-end demonstration.";
});

document.getElementById("create").addEventListener("click", function () {
  notice.textContent = "Account creation is not available in this front-end demonstration.";
});
