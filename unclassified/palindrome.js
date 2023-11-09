const isPalindrome = (string) => {
    if (string===""|| string.length <= 1) {
        return false
    }

    let reversedString = Array.from(string).reverse().join("")
    if (reversedString=== string) {
        return true
    } else {
        return false
    }
}

console.log(isPalindrome("abbsa"));