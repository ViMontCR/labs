
const contacts = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Julius Caesar", phone: "+380445553322" },
    { name: "Seneca", phone: "+380445552211" },
];

function findPhoneByName(name) {
    for (const contact of contacts) {
        if (contact.name === name) {
            return contact.phone;
        }
    }
    return "User isn't found"
}

console.log(findPhoneByName("Seneca"));
