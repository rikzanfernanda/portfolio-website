import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import portfolios from '../constants/portfolios'
import PortfoliosHome from './PortfoliosHome'

const Porfolios = () => {
    return (
        <Box bgColor={'gray.800'} py={[20, 40]} px={[3, 20]} color={'white'}>
            <Heading size={['md', '2xl']} textAlign={'center'} mb={[4, 20]}>
                Portfolios
            </Heading>
            <SimpleGrid columns={[1, 2]} justify={'center'} gap={6}>
                <PortfoliosHome portfolio={portfolios.web} link={'/projects'} />
                <PortfoliosHome
                    portfolio={portfolios.editing}
                    link={'/editing'}
                />
            </SimpleGrid>
        </Box>
    )
}

export default Porfolios
