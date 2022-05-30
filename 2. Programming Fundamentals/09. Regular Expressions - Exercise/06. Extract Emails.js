function solve(input) {
    let regEx = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-][A-Za-z]+)+))(\b|(?=\s))/g
    let emails = input.match(regEx)
    emails.forEach(a => console.log(a))
}

solve("Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.")