export const TODO_LOADING = "TODO_LOADING";
export const TODO_SUCCESS = "TODO_SUCCESS";
export const TODO_FAILUER = "TODO_FAILUER";
export const todoLoading = () => ({
  type: TODO_LOADING,
});
export const todosuccess = (payload) => ({
  type: TODO_SUCCESS,
  payload,
});

export const todoFailuer = () => ({
  type: TODO_FAILUER,
});

export const gettododata = () => (dispatch) => {
  dispatch(todoLoading);
  fetch("http://localhost:8080/Todos")
    .then((res) => res.json())
    .then((res) => dispatch(todosuccess(res)))
    .catch((er) => dispatch(todoFailuer()));
};
