const getManager = state => state.manager;
const getSettings = state => state.settings;
const getClub = state => state.club;
const getEmblem = state => state.emblem;
const getNotifications = state => state.notifications;
const getTeam = state => state.team;
const getAchievements = state => state.achievements;
const getCompleteAchievements = state => state.achievements.filter(el => el.completed);
const getIncompleteAchievements = state => state.achievements.filter(el => !el.completed);

export default {
  getManager,
  getSettings,
  getClub,
  getEmblem,
  getNotifications,
  getTeam,
  getAchievements,
  getCompleteAchievements,
  getIncompleteAchievements
};