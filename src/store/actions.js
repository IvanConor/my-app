const updateCash = (context, payload) => {
    context.commit('updateCash', payload);
};
const updateCoins = (context, payload) => {
    context.commit('updateCash', payload);
};
const changeClubName = (context, payload) => {
    context.commit('changeClubName', payload);
};
const changeEmblem = (context, payload) => {
    context.commit('changeEmblem', payload);
};
const toggleNotifications = (context, payload) => {
    context.commit('toggleNotifications', payload);
};
const updateTeamChemistry = (context, payload) => {
    context.commit('updateTeamChemistry', payload);
};
const updateSlots = context => {
    context.commit('updateSlots');
};
const changeManagerName = (context, payload) => {
    context.commit('changeManagerName', payload);
};
const changeEmailAddress = (context, payload) => {
    context.commit('changeEmailAddress', payload);
};
const changeLanguage = (context, payload) => {
    context.commit('changeLanguage', payload);
};

export default {
    updateCash,
    updateCoins,
    changeClubName,
    changeEmblem,
    toggleNotifications,
    updateTeamChemistry,
    updateSlots,
    changeManagerName,
    changeEmailAddress,
    changeLanguage
};