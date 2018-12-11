import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Student extends Component {
  constructor() {
    super()

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response)
        this.setState({
          studentInfo: response.data
        })
      })
  }

  render() {

    const { first_name, last_name, grade, email } = this.state.studentInfo;

    return (
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}>
          <button>Back</button>
        </Link>
        <h1>Student</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>{grade}</h3>
        <h3>{email}</h3>
        {/* <Switch >
          <Route path={`/classlist/${this.props.class}`} component={this.props.component}/>
        </Switch> */}
      </div>
    )
  }
}