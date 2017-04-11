import React from 'react'
import BundleLoader from '../../Utils/Bundle/BundleLoader'
import loadAsync from 'bundle-loader?lazy&name=login!../../Components/Login/Login'

const LoginContainer = ({...props}) => (
  <BundleLoader load={loadAsync}>
    {(Login) => Login
    ? <Login {...props} />
    : <div>Loading...</div>
  }
  </BundleLoader>
)

export default LoginContainer
