function solve(arr) {
    let cats = [];
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${this.name}, age ${this.age} says Meow`);
            };
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(" ");
        let currentCat = new Cat(catData[0], catData[1]);
        cats.push(currentCat);
    }

    cats.forEach((c) => c.meow());
}

solve(["Mellow 2", "Tom 5"]);
