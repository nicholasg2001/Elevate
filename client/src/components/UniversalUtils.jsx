export const isAdminUser = (user) => {
  const adminUsers = import.meta.env.VITE_ADMIN_USERS;
  if (user && adminUsers) {
    const adminUserIds = adminUsers.split(',').map(id => parseInt(id.trim()));
    if (adminUserIds.includes(user.user_id)) {
      return true;
    }
  }

  return false;
};