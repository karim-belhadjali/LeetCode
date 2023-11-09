const chunkArray = (array, number) => {
    if (array.length - 1 < number) return array
    let currentIndex = 0
    let returnedArray = []
    for (let index = 0; index < array.length; index+=number) {

        let chunkedArray=[]
        for (let i = 0; i < number; i++) {
            if (currentIndex >array.length -1) break;
            chunkedArray.push(array[currentIndex])
            currentIndex++
        }
        returnedArray.push(chunkedArray)
        chunkedArray=[]
        
    }

    return returnedArray
   
}

console.log(chunkArray([1,4,12,3,2,6,-9,0],3));