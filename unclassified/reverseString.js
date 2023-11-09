const reverse = (string) => {
    return Array.from(string).reverse().join("")
}

const reverseString = (string) => {
    if (string===""|| string.length <= 1) {
        return string
    }
    let reversedString = ""
    for (let index = string.length - 1; index > -1; index--) {
        const letter = string[index];
        reversedString += letter
    }
    return reversedString
}

console.log(reverseString("hello"))