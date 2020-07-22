const addCash = (state, payload) => {
    state.club.cash = state.club.cash + payload
};
const addCoins = (state, payload) => {
    state.club.coins = state.club.coins + payload
};
const reduceCash = (state, payload) => {
    state.club.cash = state.club.cash - payload
};
const reduceCoins = (state, payload) => {
    state.club.coins = state.club.coins - payload
};
const changeClubName = (state, payload) => {
    state.club.name = payload
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
    state.club.slots = state.club.slots + 5
};
const changeManagerName = (state, payload) => {
    state.manager.name = payload
};
const changeEmailAddress = (state, payload) => {
    state.settings.email = payload
};
const changeLanguage = (state, payload) => {
    state.settings.language = payload
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