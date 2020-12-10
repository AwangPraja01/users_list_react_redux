import React, { Component } from "react";
import { addNewUser } from "../actions/usersAction";
import { connect } from "react-redux";

export class UserForm extends Component {
  state = {
    name: "",
    companyName: "",
    companySlogan: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, companyName, companySlogan } = this.state;

    const userData = {
      name,
      company: {
        name: companyName,
        catchPhrase: companySlogan,
      },
    };

    this.props.addNewUser(userData);
  };

  render() {
    return (
      <div className="container-fluid mb-3">
        <form className="row" onSubmit={this.onSubmit}>
          <div className="col-12 form-group">
            <label htmlFor="inputName">Your Name</label>
            <input
              onChange={this.onChange}
              name="name"
              type="text"
              className="form-control"
              id="inputName"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
            />
          </div>
          <div className="col-12 form-group">
            <label htmlFor="inputCompanyName">Company Name</label>
            <input
              onChange={this.onChange}
              name="companyName"
              type="text"
              className="form-control"
              id="inputCompanyName"
              placeholder="Enter your company name"
            />
          </div>
          <div className="col-12 form-group">
            <label htmlFor="inputCompanySlogan">Company Slogan</label>
            <input
              onChange={this.onChange}
              name="companySlogan"
              type="text"
              className="form-control"
              id="inputCompanySlogan"
              placeholder="Enter your company slogan"
            />
          </div>
          <div className="col-12">
            <button type="submit" className="w-100 btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addNewUser })(UserForm);
