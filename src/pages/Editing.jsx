import React from 'react'
import bg_jumbotron from '../assets/images/bg-jumbotron.jpg'
import { Box, Heading } from '@chakra-ui/react'
import PortfolioOverview from '../components/PortfolioOverview'
import editing from '../constants/editing'
import editing_portfolios from '../constants/editing-portfolios'
import PortfolioEditingRow from '../components/PortfolioEditingRow'

const Editing = () => {
    return (
        <>
            <Box
                bgImg={bg_jumbotron}
                bgRepeat={'no-repeat'}
                bgSize={'cover'}
                py={[10, 20]}
            >
                <PortfolioOverview text={editing} />
            </Box>

            <Box py={[10, 40]} px={[1, 10, 40]}>
                <Heading fontSize={['md', '4xl']} mb={[4, 10]}>
                    Portfolio
                </Heading>
                <PortfolioEditingRow item={editing_portfolios} />
            </Box>
        </>
    )
}

export default Editing
