import React, { Component } from 'react';
import Question from './Question'
import axios from "axios"

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      title: '',
      questions: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:3001/quizzes', {})
      .then(response => this.setState({
        questions: response.data.quizzes[0].questions,
        title: response.data.quizzes[0].title
      }))
  }

  showQuestions() {
    let questions;
    if (this.state.questions) {
      questions = this.state.questions.map(el => {
        return (
          <Question
            title={el.title}
            id={el.id}
            answers={el.answers}/>
        )
      })
      return questions;
    }
   }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        {this.showQuestions()}
        <button className='submit-btn'>Submit</button>
      </div>
    );
  }
}
