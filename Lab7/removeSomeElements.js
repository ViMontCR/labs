function removeSomeElements(array, ...items) {
    for (const item of items) {
        const index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
    }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeSomeElements(array1, 4, 1, 2);
console.log(array1);

const array2 = ['Kiev', 'London', 'Sumy', 'Lviv'];
removeSomeElements(array2, 'Lviv', 'Kiev');
console.log(array2);
