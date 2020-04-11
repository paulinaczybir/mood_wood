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
         componentDidMount() {
          this.getLog();
        }
      
        getLog = () => {
          fetch(`/users/log`)
            .then(response => response.json())
            .then(response => {
              this.setState({  logs : response });
            });
        };
      
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
              
            })
          })
            .then(res => res.json())
            .then(response => {
              if (response.message === "Error") {
                return console.error("error");
              }
              this.getLog();
            })
            .catch(error => {
              console.log(error);
            }); 
        };
      
        


  render() {
    return (
    <div className="container">
      <h2>Your Log</h2>
      <p>Open your heart, observe your thoughts and write down your feelings!</p>
        <div>
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
            <button type="button" className="btn btn-dark mt-2" onClick={e => this.newLog()} >Submit this Feeling</button>
          </div>
          <br/>
          <div>
            <li className="btn float-left pl-0">
            <Link to="/logs/history" className="btn btn-outline-secondary text-left pl-2"> See all your logs</Link>
            </li>
          </div>
          <div>
            <img src ="/images/moodmugscrop.png" alt="moodmugs" className="float-right" />
          </div> 
        </div>

      {/*<div>
          <div className="input-group mb-3">
          <div className="input-group-prepend">
          <label className="input-group-text" for="inputGroupSelect01">I'm feeling...</label>
        </div>
        <select className="custom-select" id="inputSelect" onChange={this.inputText} name="feeling">
        <option selected>Choose...</option>
        <option value="Angry">Angry</option>
        <option value="Confused">Confused</option>
        <option value="Good">Good </option>
        <option value="Happy">Happy </option>
        <option value="Proud">Proud  </option>
        <option value="Sad">Sad </option>
        <option value="Shy">Shy </option>
        <option value="Tired">Tired </option>
        </select>
        </div>
        <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">Because</span>
        </div>
          <textarea className="form-control" aria-label="With textarea" onChange={this.inputText} name="because"></textarea>
        </div>
        </div>
        <div>
          <button type="button" className="btn btn-dark mt-2" onClick={e => this.newLog()} >Submit this Feeling</button>
        </div>
        <br/>
        
        <div>
            <li className="btn float-left pl-0">
            <Link to="/logs/history" className="btn btn-outline-secondary text-left pl-2"> See all your logs</Link>
            </li>
        </div>
        <div>
          <img src ="/images/moodmugscrop.png" alt="moodmugs" className="float-right" />
        </div> */}
    </div>
    );
  }
}
export default Logs;