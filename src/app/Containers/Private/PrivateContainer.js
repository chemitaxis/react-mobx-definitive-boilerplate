import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { inject, observer } from 'mobx-react'

@inject('store')
@observer
export default class PrivateContainer extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
    this.isAuthenticated = this.store.authenticated
  }

  render () {
    const { component, ...rest } = this.props
    const canAccess = this.isAuthenticated

    if (canAccess) {
      return <Route {...rest} render={props => React.createElement(component, props)} />
    }

    return <Route {...rest} render={props => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  }
}
