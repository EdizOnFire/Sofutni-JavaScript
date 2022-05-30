function architect(input) {
  let architect = input[0];
  let projects = Number(input[1]);
  let projectHours = 3 * projects;
  console.log(
    `The architect ${architect} will need ${projectHours} hours to complete ${projects} project/s.`
  );
}
architect(["George", "4"]);
