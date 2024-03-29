import React from 'react'
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link as RouteLink } from 'react-router-dom'

const PortfolioOverview = ({ text }) => {
    return (
        <Box
            w={['90%', '75%', '50%']}
            m={'auto'}
            bg={'white'}
            py={[2, 4]}
            px={[2, 4]}
            textAlign={'center'}
            borderRadius={['xl', '2xl']}
        >
            <Heading fontSize={['sm', '4xl']}>{text.name}</Heading>
            <Text fontSize={['.6rem', 'xs', 'sm']} mb={[1, 2]}>
                {text.note}
            </Text>
            <Text fontSize={['xs', 'md']} textAlign={'left'}>
                {text.summary}
            </Text>
            <Box textAlign={'left'} mt={[2, 4]}>
                <Link
                    href={text.links.linkedin}
                    isExternal
                    fontSize={['xs', 'md']}
                >
                    LinkedIn <ExternalLinkIcon mx="2px" />
                </Link>{' '}
                <br />
                <Link
                    href={text.links.github}
                    isExternal
                    fontSize={['xs', 'md']}
                >
                    Github <ExternalLinkIcon mx="2px" />
                </Link>
            </Box>
            <RouteLink to={'/'}>
                <Button
                    colorScheme="blue"
                    variant="link"
                    fontSize={['xs', 'md']}
                >
                    Home
                </Button>
            </RouteLink>
        </Box>
    )
}

export default PortfolioOverview
