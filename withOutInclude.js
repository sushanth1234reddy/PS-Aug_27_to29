let input = "112";
let uniques = [];
let duplicates = [];

for (let i = 0; i < input.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniques.length; j++) {
        if (uniques[j] === input[i]) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        let x = false;
        for (let k = 0; k < duplicates.length; k++) {
            if (duplicates[k] === input[i]) {
                x = true;
                break;
            }
        }
        if (!x) {
            duplicates.push(input[i]);
        }
    } else {
        uniques.push(input[i]);
    }
}
console.log("Uniques:", uniques.join(''));
console.log("Duplicates:", duplicates.join(''));