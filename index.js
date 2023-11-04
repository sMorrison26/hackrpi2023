function resetWarningBlocks(){
    let blocks = $("#check-section>div");
    for (let i=0; i<blocks.length; i++){
        if (!$(blocks[i]).hasClass("hidden")){
            $(blocks[i]).addClass("hidden");
        }
    }
}



function validatePassword(formObj) {
    let password = formObj.password.value;
    let finalAlert = "";
    let isShort = 0;             //string longer than 12 characters?
    let containsUpper = 0;      //string contains upper case character?
    let containsLower = 0;      //string contains loewer case character?
    let containsNumber = 0;     //string contains number character?
    let containsSpecial = 0;    //string contains special character?
    let foundProblem = 0;

    resetWarningBlocks();

    // Check password length
    if (password.length < 12) {
        isShort = 1;
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

    if (isShort == 1){
        // finalAlert += "Password must be at least 12 characters long.\n";
        if ($("#valid-length").hasClass("hidden")){
            $("#valid-length").removeClass("hidden");
        }
        foundProblem = 1;
    }
    if (containsLower == 0) {
        // finalAlert += "Password must contain at least one lowercase character.\n";
        if ($("#contains-lower").hasClass("hidden")){
            $("#contains-lower").removeClass("hidden");
        }
        foundProblem = 1;
    }

    if (containsUpper == 0) {
        // finalAlert += "Password must contain at least one uppercase character.\n";
        if ($("#contains-upper").hasClass("hidden")){
            $("#contains-upper").removeClass("hidden");
        }
        foundProblem = 1;
    }

    if (containsNumber == 0) {
        // finalAlert += "Password must contain at least one number.\n";
        if ($("#contains-number").hasClass("hidden")){
            $("#contains-number").removeClass("hidden");
        }
        foundProblem = 1;
    }

    if (containsSpecial == 0) {
        // finalAlert += "Password must contain at least one special character. (Not a letter or number)\n"
        if ($("#contains-special").hasClass("hidden")){
            $("#contains-special").removeClass("hidden");
        }
        foundProblem = 1;
    }
    if (foundProblem == 0) {
        // finalAlert += "Password must contain at least one special character. (Not a letter or number)\n"
        if ($("#success").hasClass("hidden")){
            $("#success").removeClass("hidden");
        }
        foundProblem = 1;
    }

    if (checkIfWordExists(password)) {
        if ($("#warning-box").hasClass("hidden")){
            console.log('heelo');
            $("#warning-box").removeClass("hidden");
        }
    }
    
}

async function fetchWordList() {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-1000000.txt"
      );
  
      if (response.ok) {
        const text = await response.text();
          const wordList = text.split("\n");
        return wordList;
      } else {
        throw new Error("Failed to fetch word list.");
      }
    } catch (error) {
      console.error("Error fetching the word list:", error);
      return [];
    }
}
async function checkIfWordExists(wordToCheck) {
    const wordList = await fetchWordList();
  
    if (wordList.length === 0) {
      console.log("Word list is empty or couldn't be fetched.");
      return false;
    }
  
    if (wordList.includes(wordToCheck)) {
        return true;
    } else {
        return false;
    }
  }
  
