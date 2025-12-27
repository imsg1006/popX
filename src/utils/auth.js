export const saveUser = (data) => {
  localStorage.setItem("popx_user", JSON.stringify(data));
};

export const getUser = () => {
  const user = localStorage.getItem("popx_user");
  return user ? JSON.parse(user) : null;
};

export const clearUser = () => {
  localStorage.removeItem("popx_user");
};
