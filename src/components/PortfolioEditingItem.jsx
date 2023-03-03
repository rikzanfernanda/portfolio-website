import React from 'react'
import { Box, HStack, Image, Text } from '@chakra-ui/react'
import PortfolioToolItem from './PortfolioToolItem'

const PortfolioEditingItem = ({ item }) => {
    return (
        <>
            <Box>
                <Image
                    src={item.image}
                    alt={'portfolio'}
                    rounded={'xl'}
                    w={'full'}
                    h={['130px', '180px']}
                    objectFit={'cover'}
                />
                <Box pt={[1]} pb={[2]}>
                    <Text fontSize={['.6rem', 'sm']}>{item.description}</Text>
                    <HStack spacing={[1, 2]} mt={[2, 4]}>
                        {item.tools.map((tool, idx) => {
                            return <PortfolioToolItem tool={tool} key={idx} />
                        })}
                    </HStack>
                </Box>
            </Box>
        </>
    )
}

export default PortfolioEditingItem
