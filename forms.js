const validateRegistration = () =>{
    const firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("Lastname").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var MobileNumber = document.getElementById("number").value;

     var errors=[] 
    if (!/^[a-zA-Z]{6,}$/.test(firstName)) {
        errors.push("First Name should contain alphabets and be at least 6 characters long");
    }
    if (password.length < 6) {
        errors.push("Password should be at least 6 characters long");
    }

    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        errors.push("Invalid Email address format");
    }

    if (!/^\d{10}$/.test(MobileNumber)) {
        errors.push("Mobile Number should contain exactly 10 digits");
    }

    if (lastName.trim() === "") {
        errors.push("Last Name should not be empty");
    }

    if (address.trim() === "") {
        errors.push("Address should not be empty");
    }
    if(errors.length>0){
        var errorContainer = document.getElementById("errors");
        errorContainer.innerHTML = errors.join("<br>");
        return false;
    }
    return true
}
var form = document.querySelector('form')
form.addEventListener('submit',(event)=>{
  event.preventDefault(); // Prevent the default form submission behavior
  if (validateRegistration()) {
      alert("Registration successful!"); // Just a placeholder
  }
})