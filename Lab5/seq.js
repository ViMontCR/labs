function seq(...args) {
    const functions = [...args];

    const blabla = (...newArgs) => {
        if (typeof newArgs[0] === 'function') {
            functions.push(...newArgs);
            return blabla;
        } else {
            return functions.reduce((result, fn) => fn(result), newArgs[0]);
        }
    };

    return blabla;
}

console.log(
    seq(x => x + 7)
    (x => x * 2)(5)
);

console.log(
    seq(x => x * 2)
    (x => x + 7)(5)
);

console.log(
    seq(x => x + 1)
    (x => x * 2)
    (x => x / 3)
    (x => x - 4)(7)
);
