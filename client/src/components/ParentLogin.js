import React, { Component } from "react";


class ParentLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      testData: []
    }
  }

    inputText = event => {
      const value = event.target.value;
      const name = event.target.name;

      event.preventDefault();
      this.setState({
        [name]: value
      });
    };

    logIn = (username, password) => {
      fetch(`/users/parent/${username}/${password}`)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ testData : data});
      });
    };

    render() {
        return (
          <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input onChange={this.inputText} name="username" value={this.state.username} type="email" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.inputText} name="password" value={this.state.password} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="button" className="btn btn-dark" onClick={e => this.logIn(this.state.username, this.state.password)}>Log in</button>


                {/* <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                   </div> */}

                {/*<button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                  </p> */}
            </form>
          </div>
        );
    }
}

export default ParentLogin;