const listNumber = [];
const number = () => {
const num = prompt('Write the number');
if (Boolean(num) == false) {
    alert('Program Finished');
} else if (num == Number(num)) {
    listNumber.push(num)
    number();
} else {
    alert('Program Finished');
}
};
number();
alert(listNumber)
let sumImput = listNumber.reduce((acc, curr) => {
    return Number(acc) + Number(curr)
})

alert(sumImput)