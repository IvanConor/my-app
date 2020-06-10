const addCash = (state, payload) => {
    state.cash = state.cash + payload
};
const addCoins = (state, payload) => {
    state.coins = state.coins + payload
};
const reduceCash = (state, payload) => {
    state.cash = state.cash - payload
};
const reduceCoins = (state, payload) => {
    state.coins = state.coins - payload
};
const changeClubName = (state, payload) => {
    state.clubName = payload
};
const changeEmblem = (state, payload) => {
    state.emblem = payload
};
  
export default {
    addCash,
    addCoins,
    reduceCash,
    reduceCoins,
    changeClubName,
    changeEmblem
};