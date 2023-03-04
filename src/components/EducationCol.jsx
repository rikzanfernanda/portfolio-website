import React from 'react'
import { Box, Divider, Heading, List, Text } from '@chakra-ui/react'
import ActivityList from './ActivityList'

const EducationCol = ({ item }) => {
    return (
        <Box
            bgColor={'white'}
            color={'black'}
            borderRadius={['xl']}
            p={[2, 4]}
            w={{
                base: '100%',
                sm: '20rem',
                md: '30rem',
                lg: '34rem',
                xl: '40rem',
            }}
        >
            <Heading
                fontSize={{
                    base: 'md',
                    md: '1.6rem',
                    lg: '2rem',
                }}
                color={'blue.500'}
                mb={[0, 2]}
            >
                {item.nama}
            </Heading>
            <Text
                fontSize={{
                    base: 'sm',
                    md: '1.2rem',
                    lg: '1.6rem',
                }}
                fontWeight={'bold'}
            >
                {item.study}
            </Text>
            <Text
                fontSize={['.8rem', '1rem', '1.2rem']}
                mb={[1, 2]}
            >
                {item.date.start} - {item.date.end}
            </Text>
            <Divider mb={[1, 2]} />
            <Text
                fontSize={{
                    base: 'sm',
                    md: '1.2rem',
                    lg: '1.6rem',
                }}
            >
                {item.description}
            </Text>
            <Text fontSize={['sm', 'sm', 'md', 'lg', 'xl']}>Activities:</Text>
            <List>
                {item.activities.map((activity, index) => {
                    return <ActivityList activity={activity} key={index} />
                })}
            </List>
        </Box>
    )
}

export default EducationCol
