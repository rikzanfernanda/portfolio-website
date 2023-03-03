import React from 'react'
import { ListIcon, ListItem } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'

const ActivityList = ({ activity }) => {
    return (
        <ListItem fontSize={['xs', 'sm', 'md']}>
            <ListIcon as={CheckCircleIcon} color="green.500" />
            {activity}
        </ListItem>
    )
}

export default ActivityList
