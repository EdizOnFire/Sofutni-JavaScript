function solve(input) {
    let arr = input.split("\\");
    let file = arr[arr.length - 1].split(".");
    let fileExt = file.pop();
    let fileName = file.join(".");
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

solve("C:\\Internal\\training-internal\\Template.pptx");
