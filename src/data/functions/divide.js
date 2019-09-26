// created a function that divides the players into 2, using math.floor.
// pushes them into an array of that length using splice.
export const divide = players => {
    let pairs = [];
    let matches = Math.floor(players.length / (players.length / 2));

    while (players.length) {
        pairs.push(players.splice(0, matches));
    }

    return pairs;
};