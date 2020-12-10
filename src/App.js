import "./App.css";
import Users from "./components/Users";
import UserForm from "./components/UserForm";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Welcome To User List Company Website
        </h1>
        <h4
          style={{
            color: "gray",
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          made by Awang Praja Anugerah
        </h4>
        <UserForm />
        <Users />
      </div>
    </Provider>
  );
}

export default App;
