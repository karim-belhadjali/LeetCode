const fizzbuzz = (number) => {
    let responseArray = []
    
    for (let index = 1; index <= number; index++) {
        if (index % 3===0 && index%5===0) {
            responseArray[index-1]="fizzbuzz"
        } else if (index % 3===0) {
            responseArray[index-1]="fizz"
        } else if (index%5===0) {
            responseArray[index-1]="buzz"
        } else {
            responseArray[index-1]=index
        }
    }

    return responseArray
}

console.log(fizzbuzz(15));