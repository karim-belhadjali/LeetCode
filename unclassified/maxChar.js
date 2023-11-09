const maxChar = (string) => {
    let charsObject = {}
    let maxCount = 0;
    let maxChar;
    for (let index = 0; index < string.length; index++) {
        const char = string[index];
        if (char !== ' ') {
            if (charsObject[char]) {
                charsObject[char] = charsObject[char] + 1
            } else {
                charsObject[char] = 1
            }
        }
    }
    for (const char in charsObject) {
        if (charsObject[char] > maxCount) {
            maxCount = charsObject[char]
            maxChar = char
        }
    }
    return maxChar
}
