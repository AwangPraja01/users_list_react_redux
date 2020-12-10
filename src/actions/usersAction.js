import * as type from "./type";

export const usersFetch = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) =>
      dispatch({
        type: type.FETCH_USERS,
        payload: users,
      })
    );
};

export const addNewUser = (userData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then((user) =>
      dispatch({
        type: type.ADD_USERS,
        payload: user,
      })
    );
};
