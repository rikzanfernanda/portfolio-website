import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const PortfolioCardHeader = ({ title, date }) => {
    return (
        <Box
            borderBottom={'1px'}
            borderColor={'gray.400'}
            px={[2, 4]}
            py={[2, 3]}
        >
            <Heading fontSize={['xs', 'lg']}>{title}</Heading>
            <Text fontSize={['.5rem', 'xs']}>
                {date.start} - {date.end}
            </Text>
        </Box>
    )
}

export default PortfolioCardHeader
