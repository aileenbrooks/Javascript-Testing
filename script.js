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
    let arrayLength = arr.length;
    for (let i = 0 ; i < arr.length ; i++  ) {
       total += arr[i]
    }
    return total / arr.length;
}

