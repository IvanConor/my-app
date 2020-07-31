const updateCash = (state, payload) => {
    state.club.cash = state.club.cash + payload
};
const updateCoins = (state, payload) => {
    state.club.coins = state.club.coins + payload
};
const changeClubName = (state, payload) => {
    state.club.name = payload
};
const changeEmblem = (state, payload) => {
    state.club.emblem = payload
};
const toggleNotifications = (state, payload) => {
    state.notifications = payload
};
const updateTeamChemistry = (state, payload) => {
    state.team.chemistry = state.team.chemistry + payload
};
const updateSlots = state => {
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