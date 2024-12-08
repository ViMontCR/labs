const pipe = (...fns) => {
    if (!fns.every(fn => typeof fn === 'function')) {
        throw new Error('All arguments must be functions');
    }

    return (x) => fns.reduce((result, fn) => fn(result), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const func1 = pipe(inc, twice, cube);
console.log(func1(5));

const funk2 = pipe(inc, inc);
console.log(funk2(7));

try {
    const funk3 = pipe(inc, 7, cube);
} catch (e) {
    console.error(e.message);
}
