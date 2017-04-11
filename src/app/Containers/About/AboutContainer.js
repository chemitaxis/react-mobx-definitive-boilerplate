import React from 'react'
import BundleLoader from '../../Utils/Bundle/BundleLoader'
import loadAsync from 'bundle-loader?lazy&name=about!../../Components/About/About'

const AboutContainer = ({...props}) => (
  <BundleLoader load={loadAsync}>
    {(About) => About
    ? <About {...props} />
    : <div>Loading...</div>
  }
  </BundleLoader>
)

export default AboutContainer
