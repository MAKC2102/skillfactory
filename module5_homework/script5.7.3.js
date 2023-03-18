let map = new Map([
    ["name", "Max"],
    ["age", "21"],
    ["city", "Perm"],
    ["street", "Stahanovskay"],
    ["house", "59A"]

]);

for (let elem of map) {
    console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}