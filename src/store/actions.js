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

export default {
    addCash,
    addCoins,
    reduceCash,
    reduceCoins
};