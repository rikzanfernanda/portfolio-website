import React from 'react'
import { StackDivider, VStack } from '@chakra-ui/react'
import PortfolioEditingData from './PortfolioEditingData'

const PortfolioEditingRow = ({ item }) => {
    return (
        <>
            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
            >
                {item.map((portfolio, i) => {
                    return <PortfolioEditingData data={portfolio} key={i} />
                })}
            </VStack>
        </>
    )
}

export default PortfolioEditingRow
