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
  
