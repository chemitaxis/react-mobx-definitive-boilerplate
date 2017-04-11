import React from 'react'
import BundleLoader from '../../Utils/Bundle/BundleLoader'
import loadAsync from 'bundle-loader?lazy&name=home!../../Components/Home/Home'

const HomeContainer = ({...props}) => (
  <BundleLoader load={loadAsync}>
    {(Home) => Home
      ? <Home {...props} />
    : <div>Loading...</div>
  }
  </BundleLoader>
)

export default HomeContainer
