import React from 'react'
import { ListIcon, ListItem } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const ActivityList = ({ activity }) => {
    return (
        <ListItem
            fontSize={{
                base: 'sm',
                md: '1.2rem',
                lg: '1.6rem'
            }}
        >
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {activity}
        </ListItem>
    )
}

export default ActivityList
