function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

const array3 = [2, -2, 10, 99, 0];
const array4 = [12, -20];
const result1 = difference(array3, array4);
console.log(result1);

const array5 = ['Tokyo', 'Kiev'];
const array6 = ['Kiev', 'New York', 'Lviv'];
const result4 = difference(array5, array6);
console.log(result4);
