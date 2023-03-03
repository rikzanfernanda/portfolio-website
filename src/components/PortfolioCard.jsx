import React from 'react'
import { Box } from '@chakra-ui/react'
import PortfolioCardHeader from './PortfolioCardHeader'
import PortfolioCardBody from './PortfolioCardBody'

const PortfolioCard = ({ item }) => {
    return (
        <Box bgColor={'white'} borderRadius={['xl']} boxShadow={'md'}>
            <PortfolioCardHeader title={item.title} date={item.date} />
            <PortfolioCardBody
                description={item.description}
                link={item.link}
                sourceCode={item.sourceCode}
                tasks={item.tasks}
                tools={item.tools}
            />
        </Box>
    )
}

export default PortfolioCard
