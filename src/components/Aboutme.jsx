import React from 'react'
import { Box, Divider, Heading, Text } from '@chakra-ui/react'
import FotoProfile from './FotoProfile'

const Aboutme = ({ about }) => {
    return (
        <Box
            bgColor={'white'}
            mt={'2'}
            borderRadius={['xl', 'xl']}
            p={4}
            boxShadow={'base'}
        >
            <FotoProfile profile={about.profile} />
            <Heading size={['sm', 'lg']} mb={[0, 2]} mt={[2]}>
                {about.name}
            </Heading>
            <Text fontSize={['.65rem', 'md']}>{about.note}</Text>
            <Divider my={2} />
            <Heading size={['xs', 'md']} mb={[0, 2]}>
                {about.title}
            </Heading>
            <Text fontSize={['xs', 'md']}>{about.summary}</Text>
        </Box>
    )
}

export default Aboutme
