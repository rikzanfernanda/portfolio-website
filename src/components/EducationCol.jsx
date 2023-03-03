import React from 'react'
import { Box, Divider, Heading, List, Text } from '@chakra-ui/react'
import ActivityList from './ActivityList'

const EducationCol = ({ item }) => {
    return (
        <Box bgColor={'white'} color={'black'} borderRadius={['xl']} p={[2, 4]}>
            <Heading
                fontSize={['xs', 'md', 'xl']}
                color={'blue.500'}
                mb={[0, 2]}
            >
                {item.nama}
            </Heading>
            <Text fontSize={['.6rem', 'sm']} fontWeight={'bold'}>
                {item.study}
            </Text>
            <Text fontSize={['.6rem', 'xs']} mb={[1, 2]}>
                {item.date.start} - {item.date.end}
            </Text>
            <Divider mb={[1, 2]} />
            <Text fontSize={['xs', 'sm', 'md']}>{item.description}</Text>
            <Text fontSize={['xs', 'sm', 'md']}>Activities:</Text>
            <List>
                {item.activities.map((activity, index) => {
                    return <ActivityList activity={activity} key={index} />
                })}
            </List>
        </Box>
    )
}

export default EducationCol
