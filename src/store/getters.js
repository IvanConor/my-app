const getLanguage = state => state.language;
const getCash = state => state.cash;
const getCoins = state => state.coins;
const getClubName = state => state.clubName;
const getManagerName = state => state.managerName;
const getEmblem = state => state.emblem;
const getNotifications = state => state.notifications;
const getTeamChemistry = state => state.teamChemistry;
const getSlots = state => state.slots;
const getDivision = state => state.division;
const getCards = state => state.cards;
const getInTraining = state => state.inTraining;
const getTrainingSlots = state => state.trainingSlots;
const getTeamStrength = state => state.team.strength;
const getAchievements = state => state.achievements;
const getCompletedAchievements = state => state.achievements.filter(el => el.completed);
const getEmailAddress = state => state.emailAddress;

export default {
  getLanguage,
  getCash,
  getCoins,
  getClubName,
  getManagerName,
  getEmblem,
  getNotifications,
  getTeamChemistry,
  getSlots,
  getDivision,
  getCards,
  getInTraining,
  getTrainingSlots,
  getTeamStrength,
  getAchievements,
  getCompletedAchievements,
  getEmailAddress
};