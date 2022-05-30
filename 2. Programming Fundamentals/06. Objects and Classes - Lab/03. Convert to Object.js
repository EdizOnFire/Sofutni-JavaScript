function convert(jsonStr) {
    let person = JSON.parse(jsonStr);
    let personKeys = Object.keys(person);

    for (let key of personKeys) {
        console.log(`${key}: ${person[key]}`);
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')