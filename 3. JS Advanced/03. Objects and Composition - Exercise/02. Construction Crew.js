function solve(worker) {

    if (worker['dizziness'] == true) {
        worker['levelOfHydrated'] += Number(0.1 * worker['weight']);
    }
    worker['dizziness'] = false;

    return worker;
}

solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})