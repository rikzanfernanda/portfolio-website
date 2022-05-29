import React from "react";
import {
    Box
} from "@chakra-ui/react";
import bg_web from '../assets/images/bg-web.jpg';
import web from "../constants/web";
import PortfolioContainer from "../components/PortfolioContainer";
import PortfolioOverview from "../components/PortfolioOverview";

const Web = () => {
    return <>
        <Box bgImg={bg_web} bgRepeat={'no-repeat'} bgSize={'cover'} py={[10, 20]}>
            <PortfolioOverview text={web} />
        </Box>

        <Box bgColor={'gray.700'}>
            <PortfolioContainer />
        </Box>
    </>
}

export default Web;