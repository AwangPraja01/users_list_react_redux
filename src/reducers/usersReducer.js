import * as type from "../actions/type";

const initialState = {
  users: [],
  user: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case type.ADD_USERS:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
