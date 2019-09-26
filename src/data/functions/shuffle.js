export const shuffle = players => {
//shuffle players using fisher-yates

    let i, j, temp;
    for (i = players.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = players[i];
        players[i] = players[j];
        players[j] = temp;
    }
    return players;
};