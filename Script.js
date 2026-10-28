document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let regno = document.getElementById("regno").value;
    let email = document.getElementById("email").value;
    let department =
        document.getElementById("department").value;
    let selectedEvent =
        document.getElementById("event").value;

    if (name && regno && email && department && selectedEvent) {

        document.getElementById("message").innerHTML =
            "Registration Successful!<br>" +
            "Welcome, " + name + "!<br>" +
            "Event: " + selectedEvent;

        document.getElementById("registrationForm").reset();

    } else {
        document.getElementById("message").innerHTML =
            "Please fill in all the details.";
    }
});
