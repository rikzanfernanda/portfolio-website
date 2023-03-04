import React from 'react'
import bg_education from '../assets/images/bg-education.jpg'
import { Box, Flex, Heading, SimpleGrid } from '@chakra-ui/react'
import education from '../constants/education'
import EducationCol from './EducationCol'

const Education = () => {
    return (
        <Box
            bgColor={'blue.700'}
            py={[20, 40]}
            px={[3, 20]}
            color={'white'}
            bgImg={bg_education}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            minH={'100vh'}
        >
            <Heading
                size={{
                    base: 'lg',
                    md: 'xl',
                    lg: '2xl',
                    xl: '3xl',
                }}
                textAlign={'center'}
                mb={{
                    base: 8,
                    md: '5rem',
                    lg: '6rem',
                }}
            >
                {education.title}
            </Heading>

            <Flex
                justifyContent={'center'}
                flexWrap={'wrap'}
                gap={[2, 6]}
            >
                {education.data.map((item, i) => {
                    return <EducationCol item={item} key={i} />
                })}
            </Flex>
        </Box>
    )
}

export default Education
