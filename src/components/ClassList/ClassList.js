import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }

  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then((response) => {
        this.setState({
          students: response.data
        })
      })
  }

  render() {

    const displayStudents = this.state.students.map((val, i) => {
      return (
        <Link to={`/student/${val.id}`} key={i}>
          <h3>{val.first_name} {val.last_name}</h3>
        </Link>)
    })

    return (
      <div className="box">
        <Link to={'/'}>
          <button>Back</button>
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {displayStudents}
      </div>
    )
  }
}