function validatepassword(formObj) {
    let password = formObj.check-password.value;
    let finalAlert = "";
    let containsUpper = 0;
    let containsLower = 0;
    let containsNumber = 0;
    let containsSpecial = 0;

    // Check password length
    if (password.length < 12) {
        finalAlert += "Password length must be greater than 12 characters.\n"
    }

    // Loop through each character in the password
    for (let i = 0; i < password.length; i++) {

        // Check if the current character is lowercase
        if ((password[i] === password[i].toLowerCase()) && (password[i] !== password[i].toUpperCase())) {
            containsLower = 1;
        }


        // Check if the current character is uppercase
        else if ((password[i] === password[i].toUpperCase()) && (password[i] !== password[i].toLowerCase())) {
            containsUpper = 1;
        }

        // Check if the current character is a number
        else if (!isNaN(password[i] * 1)) {
            containsNumber = 1;
        }

        // If the character is not a letter or a number, it counts as a special character
        else {
            containsSpecial = 1;
        }
    }
    
    if (containsLower == 0) {
        finalAlert += "Password must contain at least one lowercase character.\n";
    }

    if (containsUpper == 0) {
        finalAlert += "Password must contain at least one uppercase character.\n";
    }

    if (containsNumber == 0) {
        finalAlert += "Password must contain at least one number.\n";
    }

    if (containsSpecial == 0) {
        finalAlert += "Password must contain at least one special character. (Not a letter or number)\n"
    }

    // Alert the final error message
    if (finalAlert === "") {
        alert("The password is valid.");
        return true;
    } 
    else {
        alert(finalAlert);
        return false;
    }


}