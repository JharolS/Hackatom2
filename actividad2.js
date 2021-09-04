let styles = ['Jazz', 'Blues'] //Arrays
// Add to last
styles.push('Rock-n-Roll');
console.log(styles)
// Code for number order of mid value
let midStyles = (data) => {
    let midNumber = (styles.length+1)/2-1;
    return midNumber;
}
let i = midStyles(styles);
styles[i]='Classics'
console.log(styles)
// Delete first array
styles.shift()
console.log(styles)
// Add array
styles.unshift('Rap','Reggae');
console.log(styles)