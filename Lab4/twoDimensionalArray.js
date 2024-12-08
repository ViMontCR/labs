function max(matrix) {
    let maxElement = -Infinity;
    for (const row of matrix) {
        for (const element of row) {
            if (element > maxElement) {
                maxElement = element;
            }
        }
    }
    return maxElement;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
