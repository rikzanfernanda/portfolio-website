import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import FOOTER from '../constants/footer'

const Footer = () => {
    return (
        <Box
            py={4}
            px={{
                base: 4,
                md: 12,
                lg: 16
            }}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'flex-start'}
        >
            <Text
                fontSize={{
                    base: '.5rem',
                    sm: '.8rem',
                    md: 'md'
                }}
            >
                {FOOTER.copyright}
            </Text>
            <Text
                fontSize={{
                    base: '.5rem',
                    sm: '.8rem',
                    md: 'md'
                }}
            >
                {FOOTER.last_update}
            </Text>
        </Box>
    )
}

export default Footer
