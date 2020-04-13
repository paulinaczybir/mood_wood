import React, { Component } from "react";


class ParentLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: null
    }
  }


    logIn = () => {}

    render() {
        return (
          <div>
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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