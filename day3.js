// Hackerrank
// https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen

function vowelsAndConsonants(s) {
    const vowels = s.split("").filter(char => char.match(/[a || e || i || o || u]/));
    const constants = s.split("").filter(char => !char.match(/[a || e || i || o || u]/));
    vowels.concat(constants).forEach(char => console.log(char));
}
vowelsAndConsonants("bavxasozx")