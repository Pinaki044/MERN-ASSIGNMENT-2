document.addEventListener("DOMContentLoaded", function() {
    
    // Register User Form Submission
    const form = document.getElementById("userForm");
    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let contact = document.getElementById("contact").value;
            let address = document.getElementById("address").value;

            let users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ name, email, contact, address });

            localStorage.setItem("users", JSON.stringify(users));
            alert("User Registered Successfully!");

            form.reset();
        });
    }

    // Display Users in View Page
    const userList = document.getElementById("userList");
    if (userList) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userList.innerHTML += row;
        });
    }
});
