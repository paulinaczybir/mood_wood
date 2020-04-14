import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Logs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      emotion: null,
      because: "",
    };
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

  inputText = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    event.preventDefault();
    this.setState({
      [name]: value,
    });
  };

  newLog = () => {
    fetch("/users/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        MoodId: parseInt(this.state.emotion, 10),
        Text: this.state.because,
        Parent_Id: this.props.currentUserId,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.message === "Error") {
          return console.error("error");
        }
        //this.getLog();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container">
        <h2>Your Log</h2>
        <p className="mb-6">
          Open your heart, observe your thoughts and write down your feelings!
        </p>
        <div className="row col-10">
          <EmotionInput handleInput={this.inputText} emotionId="1" img="/angry.png" />
          <EmotionInput handleInput={this.inputText} emotionId="2" img="/confused.png" />
          <EmotionInput handleInput={this.inputText} emotionId="3" img="/good.png" />
          <EmotionInput handleInput={this.inputText} emotionId="4" img="/happy.png" />
          <EmotionInput handleInput={this.inputText} emotionId="5" img="/proud.png" />
          <EmotionInput handleInput={this.inputText} emotionId="6" img="/sad.png" />
          <EmotionInput handleInput={this.inputText} emotionId="7" img="/silly.png" />
          <EmotionInput handleInput={this.inputText} emotionId="8" img="/shy.png" />
          <EmotionInput handleInput={this.inputText} emotionId="9" img="/tired.png" />

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">Because</span>
            </div>
            <textarea
              className="form-control"
              aria-label="With textarea"
              onChange={this.inputText}
              name="because"
            ></textarea>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-dark mr-4 mt-4"
              onClick={(e) => this.newLog()}
            >
              Submit this Feeling
            </button>
          </div>
          <br />
          <div>
            <li className="btn float-left pl-0 ml-4 mt-3">
              <Link
                to="/logs/history"
                className="btn btn-outline-secondary text-left pl-2"
              >
                {" "}
                See all your logs
              </Link>
            </li>
          </div>
        </div>
      </div>
    );
  }
}

function EmotionInput(props) {
  return (
    <label>
      <input
        onChange={props.handleInput}
        type="radio"
        name="emotion"
        value={props.emotionId}
      />
      <img src={props.img} />
    </label>
  );
}

export default Logs;
