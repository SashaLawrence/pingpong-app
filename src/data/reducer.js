import { shuffle } from "./functions/shuffle";
import { divide } from "./functions/divide";

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

// deletePlayer reducer takes the delete player action and transforms our data based on actions type.
// uses spread operator to create a new object with same values + index. 
//splice() method returns the removed item in an array, uses the index number to target the correct name
const deletePlayer = (state, { index }) => {
    let players = [...state.players];
    players.splice(index, 1);

    return {
        ...state,
        players: players,
    };
};

const newMatch = state => {
    let newPlayers = [...state.players];
    
    return {
        ...state,
        matches: [
            ...divide(shuffle(newPlayers))
        ],
        players: state.players,
    };
};


// reducer gets given current state version of the state and the action that called it
const reducer = (state, action) => {    
    switch (action.type) {
        case "newPlayer": return newPlayer(state, action);
        case "deletePlayer": return deletePlayer(state, action);
        case "newMatch": return newMatch(state, action);
        default: return state;
    }
}

export default reducer;