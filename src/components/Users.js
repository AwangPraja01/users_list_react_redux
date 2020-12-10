import React, { Component } from "react";
import { usersFetch } from "../actions/usersAction";
import { connect } from "react-redux";

class Users extends Component {
  componentWillMount() {
    this.props.usersFetch();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newUser) {
      this.props.users.unshift(nextProps.newUser);
    }
  }

  render() {
    const usersList = this.props.users.map((user) => (
      <div className="row" key={user.id}>
        <div className="col-12">
          <div className="card text-white bg-dark mb-3">
            <div className="card-header">Company From {user.name}</div>
            <div className="card-body">
              <h5 className="card-title">{user.company.name}</h5>
              <p className="card-text">{user.company.catchPhrase}</p>
            </div>
          </div>
        </div>
      </div>
    ));
    return <div className="container-fluid">{usersList}</div>;
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
  newUser: state.users.user,
});

export default connect(mapStateToProps, { usersFetch })(Users);
