import React from 'react'
import {Grid} from 'semantic-ui-react'
import ProfileCard from '../molecules/ProfileCard'
import DescriptionCard from '../molecules/DescriptionCard'

const Profile = () => {
    const renderListByData = () => {
        return (
            <Grid.Row>
                <Grid.Column width={6}>
                    <ProfileCard 
                        className="animated fadeIn"
                    />
                </Grid.Column>
                <Grid.Column width={10}>
                    <DescriptionCard
                        className="animated fadeIn"
                        minWidth="500px"
                    />
                </Grid.Column>
            </Grid.Row>
        )
    }

    return (
        <Grid padded>
      {renderListByData()}
    </Grid>
    )
}

export default Profile