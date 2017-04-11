import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Header from './../UI/Header'

@inject('store')
@observer
class About extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <h2>I'm About</h2>
          <Link to='/find'>Go to /find</Link>
        </div>
      </div>
    )
  }
}

export default About
