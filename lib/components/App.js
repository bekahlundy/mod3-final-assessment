import React, { Component } from 'react';
import Question from './Question'

export default class App extends Component{
  constructor() {
    super()
    this.state = {
      title: '',
      questions: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3001/quizzes')
      .then((response) => response.json())
      .then((data) => data.quizzes.map((quiz => {
        this.setState({ title: quiz.title, questions: quiz.questions})
      })))
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
