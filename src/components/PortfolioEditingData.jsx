import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import PortfolioEditingItem from './PortfolioEditingItem'

const PortfolioEditingData = ({ data }) => {
    return (
        <>
            <Box>
                <Box>
                    <Heading
                        fontSize={['xs', 'lg']}
                        mb={[2, 4]}
                        color={'green.500'}
                    >
                        {data.title}
                    </Heading>
                </Box>
                <Box>
                    <SimpleGrid columns={[2, 3, 4]} spacing={[1, 5]}>
                        {data.data.map((item, i) => {
                            return <PortfolioEditingItem item={item} key={i} />
                        })}
                    </SimpleGrid>
                </Box>
            </Box>
        </>
    )
}

export default PortfolioEditingData
