function sequence1(arr) {
    let maxInd = 0, ind = 0;
    let maxLength = 1, length = 1;
    
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] === arr[i-1]) {
        ++length;}                
        else {
            if (length > maxLength) {
                maxInd = ind;
                maxLength = length;}
                ind = i;
                length = 1;}
        if (length > maxLength) {
            maxInd = ind;
            maxLength = length;}
}
return arr.slice(maxInd, maxInd + maxLength);
}

console.log(sequence1([0,1,2,3,4,4,4,4,5,6,7,7,7,7,8,8,8,4,4]));

