let arr = [5, 3, 8, 1]

function filterRange(data, a ,b) {
    return data.filter(numbers => (a <= numbers && numbers <= b))
} 

let filtered =filterRange(arr, 1 ,4)

console.log(filtered)
console.log(arr)