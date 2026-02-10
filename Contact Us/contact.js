function emailConfirmation(event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const confirmEmail = document.getElementById('confirmEmail').value.trim();

    if (email === "" || confirmEmail === "") {
        alert("Both email fields are required.");
        return;
    }

    if (email !== confirmEmail) {
        alert("The email addresses do not match. Please try again.");
        return;
    }

    alert("Thank you! Your email has been confirmed.");
    document.getElementById("contactForm").reset();
}
