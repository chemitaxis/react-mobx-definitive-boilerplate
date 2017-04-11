import React from 'react'
import BundleLoader from '../../Utils/Bundle/BundleLoader'
import loadAsync from 'bundle-loader?lazy&name=find!../../Components/Find/Find'

const FindContainer = ({...props}) => (
  <BundleLoader load={loadAsync}>
    {(Find) => Find
      ? <Find {...props} />
    : <div>Loading...</div>
  }
  </BundleLoader>
)

export default FindContainer
