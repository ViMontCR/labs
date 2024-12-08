function ages(people) {
    const result = {};
    for (const name in people) {
        const {born, died} = people[name];
        result[name] = died - born;
    }
    return result;
}

const people = {
    Vitya: {born: 2007, died: 2024},
    Oleksii: {born: 2008, died: 2025},
    Roma: {born: 2010, died: 2020},
    Andriy: {born: 1999, died: 2000},
};
console.log(ages(people));
