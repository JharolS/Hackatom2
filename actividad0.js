let john = {
    name: "John",
    surname: "Smith",
    id: 1
};
let pete = {
    name: "Pete",
    surname: "Hunt",
    id: 2
};
let mary = {
    name: "Mary",
    surname: "Key",
    id: 3
};
let users = [ john, pete, mary ];

const usersMapped = users.map((date) => {
    return {
        fullname: `${date.name} ${date.surname}`,
        id: date.id
    }
})

console.log(usersMapped)