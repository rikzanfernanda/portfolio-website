import React from "react";
import bg_education from "../assets/images/bg-education.jpg";
import {Box, Heading, SimpleGrid} from "@chakra-ui/react";
import education from "../constants/education";
import EducationCol from "./EducationCol";

const Education = () => {
    return <Box bgColor={'blue.700'} py={[10, 40]} px={[3, 20]} color={'white'} bgImg={['', bg_education]} bgRepeat={'no-repeat'} bgSize={'cover'}>
        <Heading size={['md', '2xl']} textAlign={'center'} mb={[4, 10]}>
            {education.title}
        </Heading>
        <SimpleGrid columns={[1,3]} spacing={[2, 6]}>
            {
                education.data.map((item, i) => {
                    return <EducationCol item={item} key={i} />
                })
            }
        </SimpleGrid>
    </Box>
}

export default Education;