import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Logs extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          logs: [],
          emotion: null,
          because: ""
           }
         }

         /*componentDidMount() {
          this.getLog();
        }
      
        getLog = () => {
          fetch(`/users/log`)
            .then(response => response.json())
            .then(response => {
              this.setState({  logs : response });
            });
        }; */
      
        inputText = event => {
          const value = event.target.value;
          const name = event.target.name;
      
          event.preventDefault();
          this.setState({
            [name]: value
          });
        };

        newLog = () => {
          fetch("/users/log", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              MoodId: parseInt(this.state.emotion, 10),
              Text: this.state.because,
              Parent_Id: this.props.currentUserId
            })
          })
            .then(res => res.json())
            .then(response => {
              if (response.message === "Error") {
                return console.error("error");
              }
              //this.getLog();
            })
            .catch(error => {
              console.log(error);
            }); 
        };
      
        


  render() {
    return (
    <div className="container">
      <h2>Your Log</h2>
      <p className="mb-6">Open your heart, observe your thoughts and write down your feelings!</p>
        <div className="row col-10">
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="1" />
            <img src="/angry.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="2" />
            <img src="/confused.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="3" />
            <img src="/good.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="4" />
            <img src="/happy.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="5" />
            <img src="/proud.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="6" />
            <img src="/sad.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="7" />
            <img src="/silly.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="8" />
            <img src="/shy.png" />
          </label>
          <label>
            <input onChange={this.inputText} type="radio" name="emotion" value="9" />
            <img src="/tired.png" />
          </label>

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Because</span>
            </div>
            <textarea className="form-control" aria-label="With textarea" onChange={this.inputText} name="because"></textarea>
          </div>

          <div>
            <button type="button" className="btn btn-dark mr-4 mt-4" onClick={e => this.newLog()} >Submit this Feeling</button>
          </div>
          <br/>
          <div>
            <li className="btn float-left pl-0 ml-4 mt-3">
            <Link to="/logs/history" className="btn btn-outline-secondary text-left pl-2"> See all your logs</Link>
            </li>
          </div>
        </div>
    </div>
    );
  }
}
export default Logs;