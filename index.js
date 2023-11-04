function validatepassword(formObj) {
    var password = formObj.check-password.value;
    var finalAlert = "";
    var containsUpper = 0;
    var containsLower = 0;
    var containsNumber = 0;
    var containsSpecial = 0;
    if (password.length < 12) {
        finalAlert += "Password length must be greater than 12 characters.\n"
    }

    for (let i = 0; i < password.length; i++) {
        if ((password[i] === password[i].toLowerCase()) && (password[i] !== password[i].toUpperCase())) {
            containsLower = 1;
        }
        else if ((password[i] === password[i].toUpperCase()) && (password[i] !== password[i].toLowerCase())) {
            containsUpper = 1;
        }
        else if (!isNaN(password[i] * 1)) {
            containsNumber = 1;
        }
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

    if (finalAlert === "") {
        alert("The password is valid.");
        return true;
    } 
    else {
        alert(finalAlert);
        return false;
    }


}