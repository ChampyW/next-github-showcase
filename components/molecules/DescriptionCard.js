import React from 'react'
import { Card } from 'semantic-ui-react'

const DescriptionCard = ({className}) => {
    return (
        <Card className={className}>
            <Card.Content>
                <Card.Header>
                    Description
                </Card.Header>
                <Card.Description>
                    lorem ipsum
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default DescriptionCard