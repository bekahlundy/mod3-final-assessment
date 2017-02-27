import React, { Component } from 'react';
import Quiz from './Quiz'
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
      .then((response) => this.setState({
        title: response.data.quizzes[0].title,
        questions: response.data.quizzes[0].questions
      }))
  }


  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Quiz questions={this.state.questions} />
        <button className='submit-btn'>Submit</button>
      </div>
    );
  }
}
