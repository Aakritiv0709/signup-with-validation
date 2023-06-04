function validateForm() {
  let full_name = document.getElementById("full_name").value;
  let user_name = document.getElementById("user_name").value;
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  const options = document.getElementsByName("gender");
  let selectedOption = false;

  if (full_name == "") {
    alert("Please enter your full name.");
    return false;
  }
  if (user_name == "") {
    alert("Please enter your user name.");
    return false;
  }

  if (email == "") {
    alert("Please enter your email address.");
    return false;
  }

  if (phone_number == "") {
    alert("Please enter your phone number.");
    return false;
  }

  if (password == "") {
    alert("Please enter a password.");
    return false;
  }

  if (confirm_password == "") {
    alert("Please confirm your password.");
    return false;
  }

  if (password != confirm_password) {
    alert("Passwords do not match.");
    return false;
  }

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = true;
      break;
    }
  }

  if (!selectedOption) {
    alert("Please select any gender.");
    return false;
  }

  //   After submitting on successful
  alert("Registration Successfully Completed!");

  return true;
}
