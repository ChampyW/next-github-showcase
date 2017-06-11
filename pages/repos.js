import React from 'react'
import withPage from '../hocs/withPage'
import DescriptionContainer from '../components/ecosystems/DescriptionContainer'

class Repos extends React.Component {

  render(){
    return(
      <div>
        <DescriptionContainer />
      </div>
    )
  }
}

export default withPage('Repos')(Repos)
