// Write a function that takes an integer as input, and returns the number of bits that are equal to one
//  in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case




// need a array to hold the bit results
// we then need to make the index into a number
function countBits(n){
    let bitArr = (n).toString(2).split('');
    let bitResult = bitArr.reduce((sum, num) => sum + Number(num), 0);
    return bitResult;
}


// some other ones that I saw
function countBits(n){
    return n.toString(2).replace(/0/g,'').length;
}


function countBits(n){
    return n.toString(2).split('0').join("").length;
}