import React from 'react'
import { Card } from 'semantic-ui-react'

const ProfileCard = ({repos, className}) => {
    return (
        <Card className="ui link cards">
            <div class="image">
                <img src="/images/avatar2/large/matthew.png"/>
            </div>
            <Card.Content>
                <Card.Header>
                    Matt Giampietro
                </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                        </span>
                    </Card.Meta>
                <Card.Description>
                    Matthew is an interior designer living in New York.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <span class="right floated">
                    Joined in 2013
                </span>
                <span>
                    <i class="user icon"></i>
                        75 Friends
                </span>
            </Card.Content>
        </Card>
    )
}

export default ProfileCard