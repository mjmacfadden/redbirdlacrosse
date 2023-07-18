document
  .getElementById("password-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var passwordInput = document.getElementById("password-input").value;

    // Replace "password" with your desired password
    if (passwordInput === "gobirds") {
      document.getElementById("overlay").style.display = "none";
      document.getElementById("content").style.display = "block";
    } else {
      alert("Incorrect password");
    }
  });
