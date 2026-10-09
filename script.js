function welcomeMessage() {
    alert("Welcome to Nipuni Abeysinghe's website!");
}


function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Thank you for contacting me!");
    return true;
}