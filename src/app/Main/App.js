import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider, observer } from 'mobx-react'
// import DevTools from 'mobx-react-devtools'

import NotMatchContainer from '../Containers/NotMatch/NotMatchContainer'
import AboutContainer from '../Containers/About/AboutContainer'
import LoginContainer from '../Containers/Login/LoginContainer'
import HomeContainer from '../Containers/Home/HomeContainer'
import FindContainer from '../Containers/Find/FindContainer'
import UnauthorizedContainer from '../Containers/Unauthorized/UnauthorizedContainer'
import Loader from '../Components/Loader/Loader'

import PrivateContainer from '../Containers/Private/PrivateContainer'

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
@observer
export default class App extends Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  render () {
    return (
      <Provider store={this.store}>
        <Router>
          <div>            
            <Loader />
            <Switch>
              <Route exact path='/' component={LoginContainer} />
              <Route exact path='/login' component={LoginContainer} />
              <PrivateContainer exact isAdmin path='/home' component={HomeContainer} />
              <PrivateContainer exact isSuperAdmin path='/about' component={AboutContainer} />
              <PrivateContainer exact isAdmin path='/find' component={FindContainer} />
              <Route path='/401' component={UnauthorizedContainer} />
              <Route component={NotMatchContainer} />
            </Switch>
          </div>

        </Router>
      </Provider>
    )
  }
}
