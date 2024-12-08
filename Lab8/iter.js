function iterate(object, call) {
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            call(key, object[key], object);
        }
    }
}

const obj = {a: 1, b: 2, c: 3};
iterate(obj, (key, value) => {
    console.log({key, value});
});
