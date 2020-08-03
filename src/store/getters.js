const getManager = state => state.manager;
const getSettings = state => state.settings;
const getClub = state => state.club;
const getNotifications = state => state.notifications;
const getTeam = state => state.team;
const getAchievements = state => state.achievements;
const getCompleteAchievements = state => state.achievements.filter(el => el.completed);
const getIncompleteAchievements = state => state.achievements.filter(el => !el.completed && !el.hidden);

export default {
  getManager,
  getSettings,
  getClub,
  getNotifications,
  getTeam,
  getAchievements,
  getCompleteAchievements,
  getIncompleteAchievements
};