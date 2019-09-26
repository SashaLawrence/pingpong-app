// dispatch a newPlayer action - runs the reducer function
export const newPlayer = values => {    
    return {
        type: "newPlayer",
        ...values
    };
};
// dispatch a deletePlayer action - runs the reducer function
export const deletePlayer = (values, index) => {
    return {
        type: "deletePlayer",
        ...values,
        index
    };
};

export const newMatch = values => {
    return {
        type: "newMatch",
        ...values,
    };
};
