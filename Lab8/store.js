function store(value) {
    return function () {
        return value;
    };
}

const bla = store(5);
const value = bla();
console.log(value);
