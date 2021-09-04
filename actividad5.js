let arr = [ 'HTML' , 'JavaScript', 'CSS'];

let copySorted = (data) => {
    copySorted = [...data];
    return copySorted.sort();
}
let sorted = copySorted(arr);

console.log(sorted)
console.log(arr)