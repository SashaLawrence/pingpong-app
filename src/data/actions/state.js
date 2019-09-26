export const newPlayer = values => {    
    return {
        type: "newPlayer",
        ...values
    };
};