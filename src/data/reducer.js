const newPlayer = (state, { name }) => {
    return {
        ...state,
        players: [
            ...state.players,
            {
                "name": name,
            }
        ],
    };
};

const reducer = (state, action) => {    
    switch (action.type) {
        case "newPlayer": return newPlayer(state, action);
        default: return state;
    }
}

export default reducer;