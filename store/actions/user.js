import axios from "../../utils/axios";

export const getUserById = (id) => {
  return {
    type: "GET_USER_BY_ID",
    payload: axios.get(`user/profile/${id}`),
  };
};
export const updateUser = (id, form) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch(`user/profile/${id}`, form),
  };
};
export const logout = (refreshToken) => {
  return {
    type: "LOGOUT",
    payload: axios.post("auth/logout", refreshToken),
  };
};
