import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('store')
@observer
class Header extends Component {
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href='#'>
              React + Mobx + React Router 4
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
