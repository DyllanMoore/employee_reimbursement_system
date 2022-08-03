//Login Button Consts
const createSubmitButton = document.getElementById("create-submit-button");
const haveAccountButton = document.getElementById("have-account-button");

//Login Functions
createSubmitButton.addEventListener("click", function(){
    const newUserAddedDiv = document.getElementById("new-user-added-div");
    const errorDiv = document.getElementById("error-div");

    if(document.getElementById("create-password").value === document.getElementById("confirm-create-password").value) {

        fetch("http://localhost:3000/newuser", {
            method: 'POST',
            body: JSON.stringify({
                "first_name": document.getElementById("create-first-name").value,
                "last_name": document.getElementById("create-last-name").value,
                "username": document.getElementById("create-username").value,
                "password": document.getElementById("create-password").value,
                "email": document.getElementById("create-email").value,
                "user_role_fk": document.getElementById("create-role").value
            })
        }) 
        .then(function(response) {
                if(response.status === 202) {
                    const newUserAdded = document.createElement("user-added-element").innerHTML =
                    `${document.getElementById("create-first-name").value} was added to the Monsters Inc Reimbursement Database.`;
                    newUserAddedDiv.append(newUserAdded);
                } else {
                    const newUserError = document.createElement("new-user-error").innerHTML =
                    `An error occurred. Please try again or contact support.`;
                    errorDiv.append(newUserError);
                }
        })
    } else {
        const newUserPasswordError = document.createElement("new-user-password-error").innerHTML =
        `Passwords do not match`;
        errorDiv.append(newUserPasswordError);
    }
});

haveAccountButton.addEventListener("clcik", function() {
    location.redirect("HTML/login.html");
})