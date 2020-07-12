
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    const vowels = s.split("").filter(char => char.match(/[a || e || i || o || u]/));
    const constants = s.split("").filter(char => !char.match(/[a || e || i || o || u]/));
    vowels.concat(constants).forEach(char => console.log(char));
}

