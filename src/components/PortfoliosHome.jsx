import React from 'react'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PortfoliosHome = ({ portfolio, link }) => {
    return (
        <Box textAlign={'center'} px={[null, '20px', '100px']}>
            <Heading fontSize={['sm', 'xl']} mb={[1, 2]}>
                {portfolio.title}
            </Heading>
            <Text fontSize={['xs', 'md']} mb={[2, 4]}>
                {portfolio.description}
            </Text>
            <Link to={link} target="_blank">
                <Button
                    variant={'solid'}
                    colorScheme={'blue'}
                    size={['xs', 'md']}
                >
                    Show Project
                </Button>
            </Link>
        </Box>
    )
}

export default PortfoliosHome
