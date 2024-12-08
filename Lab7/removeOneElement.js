function removeOneElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeOneElement(array1, 5);
console.log(array1);

const array2 = ['Kiev', 'London', 'Sumy', 'Lviv'];
removeOneElement(array2, 'London');
console.log(array2);
