const addCash = (context, payload) => {
    context.commit('addCash', payload);
};
const addCoins = (context, payload) => {
    context.commit('addCoins', payload);
};
const reduceCash = (context, payload) => {
    context.commit('reduceCash', payload);
};
const reduceCoins = (context, payload) => {
    context.commit('reduceCoins', payload);
};
const changeClubName = (context, payload) => {
    context.commit('changeClubName', payload);
};
const changeEmblem = (context, payload) => {
    context.commit('changeEmblem', payload);
};

export default {
    addCash,
    addCoins,
    reduceCash,
    reduceCoins,
    changeClubName,
    changeEmblem
};