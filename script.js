// exercise one
function isValidPassword(password, username) {
    if (password.length >= 8 && password.search(' ') === -1 && password.includes(username) === false) {
        return true;     
    } 
    else {
        return false;
    }
}

//exercise two
function findAvg(arr) {
    let total = 0; 
    for (let i = 0 ; i < arr.length ; i++  ) {
       total += arr[i]
    }
    return total / arr.length;
}

//exercise three
function isPangram () {
    let pangram = 'The quick brown fox jumps over the lazy dog.'
    for (i = 0; i > pangram.length ; i++) {
        // if ( pangram.charAt(i) === test.includes(pangram.charAt(i))) {
            console.log(pangram.charAt(i))
        }

}
//i want my pangram to compare with test and determine if it contains all characters
//
