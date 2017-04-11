import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import Header from './../UI/Header'

@inject('store')
@observer
class Home extends Component {
  render () {
    return (
      <div>
        <Header />
        <div className='container'>
          <h2>I'm Home</h2>
          <Link to='/about'>Go to /about</Link>
        </div>
      </div>
    )
  }
}

export default Home
