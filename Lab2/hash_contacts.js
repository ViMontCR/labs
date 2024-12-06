
const contactHash = {
    "Marcus Aurelius": "+380445554433",
    "Julius Caesar": "+380445553322",
    "Seneca": "+380445552211",
};

function findPhoneByNameHash(name) {
    return contactHash[name] || "User isn't found";
}

console.log(findPhoneByNameHash("Marcus Aurelius"));
