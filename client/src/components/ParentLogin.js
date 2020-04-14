import React, { Component } from "react";


class ParentLogin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      error: false
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
        this.props.getUserId(data[0].id)
      })
      .catch(error => {
        console.log(error);
        this.setState({error: true});
      }); 
    };


    render() {
        return (
          <div>
            <div className="container">
                <h3>Sign In</h3>

                <div className="input-group mb-3 input-group-prepend">
                    <span className="input-group-text">Username</span>
                    <input onChange={this.inputText} name="username" value={this.state.username} type="email" className="form-control" placeholder="Enter username" />
                </div>

                <div className="input-group mb-3 input-group-prepend">
                    <span className="input-group-text">Password</span>
                    <input onChange={this.inputText} name="password" value={this.state.password} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <button type="button" className="btn btn-dark" onClick={e => this.logIn(this.state.username, this.state.password)}>Log in</button>

                <div>
                <img src ="/images/moodmugscrop.png" alt="moodmugs" className="float-right" />
               </div> 
            </div>

            {this.state.error && <div className="text-danger">User does not exist!</div>}
          </div>
        );
    }
}

export default ParentLogin;