import React, { Component } from "react";


class ParentLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
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

    logIn = () => {}

    render() {
        return (
          <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={this.inputText} name="email" value={this.state.email} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.inputText} name="password" value={this.state.password} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="button" className="btn btn-dark" onClick={e => this.logIn()}>Log in</button>

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