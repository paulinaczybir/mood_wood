import React, { Component } from "react";
import Popup from "reactjs-popup";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parents: [],
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      error: false,
      password: "",
      removeUsername: "",
      //id:"",
    };
  }

  componentDidMount() {
    this.getLog();
  }

  getLog = () => {
    fetch(`/users/parent`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ parents: response });
      });
  };

  inputText = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    event.preventDefault();
    this.setState({
      [name]: value,
    });
  };

  newUser = () => {
    fetch("/users/parent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        username: this.state.username,
        dateofbirth: this.state.dateofbirth,
        password: this.state.password,
        //id: this.state.id
      }),
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.code === "ER_DUP_ENTRY") {
        this.setState({ error: true });
      } else if (response.message === "Error") {
        return console.error("error");
      }
      this.getLog();
    })
    .catch((error) => {
      console.log(error);
    });
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      password: "",
    });
  };

  deleteUser = (username) => {
    fetch(`/users/parent/${username}`, {
      method: "DELETE",
    })
    .then((res) => res.json())
    .then((response) => {
      if (response.message === "Error") {
        return console.error("error");
      }
      this.getLog();
    })
    .catch((error) => {
      console.log(error);
    });
    this.setState({
      removeUsername: "",
    });
  };

  render() {
    return (
      <div className="container" id="inputgr">
        <h2>Sign up!</h2>
        <p>
          Join our community and get to know <strong>YOURSELF</strong> while
          understanding <strong>YOUR</strong> emotions!
        </p>
        <div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="">
                First and last name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              onChange={this.inputText}
              name="firstname"
              value={this.state.firstname}
            />
            <input
              type="text"
              className="form-control"
              onChange={this.inputText}
              name="lastname"
              value={this.state.lastname}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                your@email.com
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="email"
              aria-describedby="basic-addon1"
              onChange={this.inputText}
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                UserName
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.inputText}
              name="username"
              value={this.state.username}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Password
              </span>
            </div>
            <input
              type="password"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={this.inputText}
              name="password"
              value={this.state.password}
            />
          </div>

          {this.state.error && (
            <div className="text-danger">User name already exists!</div>
          )}

          <div>
            <button
              type="button"
              className="btn btn-dark"
              onClick={(e) => this.newUser()}
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <br></br>
          <br></br>
          <h5 className="font-weight-light">
            No longer want to share your feelings?
          </h5>
          <p className="h6 font-weight-lighter">
            We're sorry to see you go, but you can delete your account filling
            the form below.
          </p>
          <form>
            <div className="form-row align-items-center">
              <div className="col-sm-3 my-1">
                <label className="sr-only" htmlFor="inlineFormInputName">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inlineFormInputName"
                  name="removeUsername"
                  value={this.state.removeUsername}
                  onChange={this.inputText}
                  placeholder="Your username"
                />
              </div>
              <div className="col-auto my-1">
                <div className="form-check"></div>
              </div>
            </div>
          </form>
          <div>
            <button
              type="submit"
              className="btn btn-outline-danger mt-2"
              onClick={(e) => this.deleteUser(this.state.removeUsername)}
            >
              Delete account
            </button>
          </div>
        </div>
        <br />
        <img
          src="/images/faces3.png"
          alt="postit"
          className="mx-auto"
          id="imgsignup"
        />
      </div>
    );
  }
}

export default Register;
