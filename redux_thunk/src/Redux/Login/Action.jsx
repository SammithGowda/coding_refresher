export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILUER = "LOGIN_FAILUER";

export const LoginLoading = () => ({
  type: LOGIN_LOADING,
});
export const Loginfsuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const LoginFailuer = () => ({
  type: LOGIN_FAILUER,
});
