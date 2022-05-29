import React from "react";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import portfolios from "../constants/portfolios";
import PortfoliosHome from "./PortfoliosHome";

const Porfolios = () => {
    return <Box bgColor={'gray.800'} py={[10, 40]} px={[4, 20]} color={'white'}>
        <Heading size={['md', '2xl']} textAlign={'center'} mb={[4, 20]}>
            Portfolio
        </Heading>
        <SimpleGrid columns={[1,2]} justify={'center'} gap={6}>
            <PortfoliosHome portfolio={portfolios.web} link={'/web'} />
            <PortfoliosHome portfolio={portfolios.editing} link={'/editing'} />
        </SimpleGrid>
    </Box>
}

export default Porfolios;