function loops(input) {
   for (let i = 1; i <= 10; i++) {
      console.log(`${i} * ${input[0]} = ${(i * input)}`);
   }
}
loops(["5"])