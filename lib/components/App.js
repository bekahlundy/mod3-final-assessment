import React, { Component } from 'react';
import Quiz from './Quiz'
import axios from "axios"

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      title: '',
      questions: [],
      scoreObj: {}
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/quizzes', {})
      .then((response) => this.setState({
        title: response.data.quizzes[0].title,
        questions: response.data.quizzes[0].questions
      }))
    // axios.post('http://localhost:3001/scores', {
    //   scoreObj: 1
    // })
    // .then((response) => {
    //   console.log(response.data.scoreObj)
    // })
  }

handleToggle(questionId, num) {
  let stateScore = this.state.scoreObj
  let newScore = {[questionId]: num}
  Object.assign(stateScore, newScore)
  this.setState({scoreObj: stateScore})
  // console.log(stateScore)
}

onClick() {
  let finalScore = this.state.scoreObj
  let keys = Object.keys(finalScore)
  keys.reduce((obj, id) => {
    console.log('id', obj + finalScore[id])
    return obj + finalScore[id]
  }, 0)
  console.log('state obj', finalScore)
}

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Quiz
          questions={this.state.questions}
          setScore={this.state.scoreObj}
          handleToggle={this.handleToggle.bind(this)}
        />
        <button className='submit-btn' onClick={this.onClick.bind(this)}>Submit</button>
      </div>
    );
  }
}
