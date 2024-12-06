
function fn() {

    const constObj = { name: "Alice" };
    let varObj = { name: "Bob" };

    constObj.name = "Virginia";
    varObj.name = "David";

}

fn();

function createUser(name, city) {
    return { name, city };
}

console.log(createUser("Marcus Aurelius", "Roma"));
