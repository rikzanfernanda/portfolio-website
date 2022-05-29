import React from "react";
import {Box, Heading, VStack} from "@chakra-ui/react";
import webPortfolios from "../constants/web-portfolios";
import PortfolioCard from "./PortfolioCard";

const PortfolioContainer = () => {
    return <Box w={['full', 'full', '60%']} ml={[null, null, '5%']} py={[10, 40]} px={[3, 0]}>
        <Heading fontSize={['md', '4xl']} mb={[4, 10]} color={'white'}>
            Portfolio
        </Heading>
        <VStack align={'stretch'} spacing={[2, 4]}>
            {
                webPortfolios.map((item, i) => {
                    return <PortfolioCard item={item} key={i} />
                })
            }
        </VStack>
    </Box>
}

export default PortfolioContainer;