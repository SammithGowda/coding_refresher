import { TODO_LOADING, TODO_SUCCESS, TODO_FAILUER } from "./Action";

const initstae = {
  loading: false,
  error: false,
  todos: [],
};

export const totreducer = (Store = initstae, { type, payload }) => {
  switch (type) {
    case TODO_LOADING:
      return { ...Store, loading: true };
    case TODO_SUCCESS:
      return { ...Store, loading: false, todos: [...payload], error: false };
    case TODO_FAILUER:
      return { ...Store, loading: false, error: true, todos: [] };

    default:
      return Store;
  }
};
