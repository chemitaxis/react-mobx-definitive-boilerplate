import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Header from './../UI/Header'

@inject('store')
@observer
class Find extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <h2>I'm Find</h2>
          <Link to='/home'>Go to /home</Link>
        </div>
      </div>
    )
  }
}

export default Find
