const db = require("../database/database");

const calculateLoginStreak = (user) => {
  const today = new Date();
  const lastLogged = new Date(user.lastlogged);
  const diff = today - lastLogged;
  const oneDay = 86400000; // milliseconds in one day

  if (diff < oneDay) {
    // Same day login
    return user.current_days;
  } else if (diff < 2 * oneDay && today.getDate() !== lastLogged.getDate()) {
    // Login is the next day
    return user.current_days + 1;
  } else {
    // More than one day apart
    return 1;
  }
};

const updateLoginAchievements = async (user) => {
  const achievements = await db.any(
    "SELECT * FROM achievements WHERE name = $1 ORDER BY requirement DESC",
    ["Daily Logins"]
  );
  try {
    for (const achievement of achievements) {
      if (user.current_days === achievement.requirement) {
        await db.none(
          "INSERT INTO user_achievements (achievement_id, user_id, created_at) VALUES ($1, $2, $3)",
          [achievement.achievement_id, user.user_id, new Date()]
        );
      }
    }
  } catch (error) {
    console.error("Error updating user achievements:", error);
    throw error;
  }
};

module.exports = {
  calculateLoginStreak,
  updateLoginAchievements,
};
