import React from "react";
import BG_home from "../assets/images/bg-home.jpg";
import {Box} from "@chakra-ui/react";
import about from "../constants/about";
import Aboutme from "./Aboutme";

const HomeTop = () => {
    return <Box bgColor={'blackAlpha.50'} minH={['auto', '100vh']} p={[2, 20]} pb={[10, 40]} bgImg={['', BG_home]} bgPos={'50% 100%'} bgRepeat={'no-repeat'} bgSize={'cover'}>
        <Box ml={'auto'} maxW={'md'}>
            <Aboutme about={about} />
        </Box>
    </Box>
}

export default HomeTop;