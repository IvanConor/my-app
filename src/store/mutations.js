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
const showNotifications = state => {
    state.notifications = true
};
const hideNotifications = state => {
    state.notifications = false
};
const increaseTeamChemistry = (state, payload) => {
    state.teamChemistry = state.teamChemistry + payload
};
const decreaseTeamChemistry = (state, payload) => {
    state.teamChemistry = state.teamChemistry - payload
};
const increaseSlots = state => {
    state.slots = state.slots + 5
};
const changeManagerName = (state, payload) => {
    state.managerName = payload
};
const changeEmailAddress = (state, payload) => {
    state.emailAddress = payload
};
const changeLanguage = (state, payload) => {
    state.language = payload
};
  
export default {
    addCash,
    addCoins,
    reduceCash,
    reduceCoins,
    changeClubName,
    changeEmblem,
    showNotifications,
    hideNotifications,
    increaseTeamChemistry,
    decreaseTeamChemistry,
    increaseSlots,
    changeManagerName,
    changeEmailAddress,
    changeLanguage
};