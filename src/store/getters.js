const getManager = state => state.manager;
const getSettings = state => state.settings;
const getClub = state => state.club;
const getNotifications = state => state.notifications;
const getTeam = state => state.team;
const getCards = state => state.cards;
const getTrainingCards = state => state.cards.filter(card => card.type === 'training');
const getUpgradeCards = state => state.cards.filter(card => card.type === 'upgrade');
const getAchievements = state => state.achievements;
const getCompleteAchievements = state => state.achievements.filter(achievement => achievement.completed);
const getIncompleteAchievements = state => state.achievements.filter(achievement => !achievement.completed && !achievement.hidden);

export default {
  getManager,
  getSettings,
  getClub,
  getNotifications,
  getTeam,
  getCards,
  getTrainingCards,
  getUpgradeCards,
  getAchievements,
  getCompleteAchievements,
  getIncompleteAchievements
};