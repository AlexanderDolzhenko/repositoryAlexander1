export const withEmptyValueCheck = (value) =>  {
    return value 
        ? value
        : {
            error: 'Not Empty!'
        };
}

export const withEmailValueCheck = (value) => {
    if(value?.error) {
        return value;
    }

    return value.match(/[a-z0-9]+@[a-z]+\.\w{2,4}/)
        ? value
        : {
            error: 'Wrong email format!'
        };
}

export const withPasswordLengthCheck = (value) => {
    if(value?.error) {
        return value;
    }

    return value.length > 5
        ? value
        : {
            error: 'Password to short!'
        };
}