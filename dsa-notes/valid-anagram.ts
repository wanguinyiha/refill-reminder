function validAnagram(s: string, t : string): boolean { //define function
    if(s.length !== t.length) return false;
    const map = new Map<string, number>(); //Key-character rep by string, Value-number of times  it appears rep by number
    for(let i = 0; i < s.length; i++){
        const char = s[i]; //current character
        map.set(char, (map.get(char) || 0) + 1);  
        //set stores the updated count of each character in the map. 
        //The || operator is used to provide a default value of 0 if the key does not exist in the map. 
        //get retrieves the current count of a character.
    }
    for(let i = 0; i < t.length; i++){
        const char = t[i];
        if(!map.has(char)) return false;
        map.set(char, map.get(char)! - 1);
        if(map.get(char) === 0) map.delete(char); //delete removes the character from the map if its count reaches 0, indicating that all occurrences of that character have been matched.
    }
    return true;
}

console.log(validAnagram("anagram", "nagaram")); 


//Your validAnagram() function checks whether two strings contain the same characters with the same frequencies, even if the characters appear in a different order.
//A map stores information as key-value pairs