import React from "react";
import {Box, Divider, Heading, Text} from "@chakra-ui/react";

const Aboutme = ({about}) => {
    return <Box bgColor={'white'} mt={'2'} borderRadius={['md', 'xl']} p={4} boxShadow={'base'}>
        <Heading size={['sm', 'lg']} mb={[0,2]}>
            {about.name}
        </Heading>
        <Text as={'em'} fontSize={['.65rem', 'md']}>
            {about.note}
        </Text>
        <Divider my={2}/>
        <Heading size={['xs', 'md']} mb={[0,2]}>
            {about.title}
        </Heading>
        <Text as={'em'} fontSize={['.7rem', 'md']}>
            {about.summary}
        </Text>
    </Box>
}

export default Aboutme;