import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import education from '../../constants/education'
import EducationCard from './components/EducationCard'

const Educations = () => {
    return (
        <Box
            pt={{
                base: 20,
                md: 32
            }}
            px={{
                base: 3,
                md: '10rem'
            }}
        >
            <Heading
                size={{
                    base: 'lg',
                    md: 'xl',
                    lg: '2xl',
                    xl: '3xl'
                }}
                textAlign={'center'}
                mb={{
                    base: 8,
                    md: '5rem',
                    lg: '6rem'
                }}
            >
                {education.title}
            </Heading>

            <Flex
                justifyContent={'center'}
                alignItems={'center'}
                direction={{
                    base: 'column'
                }}
            >
                {education.data.map((item, i) => {
                    return <EducationCard key={i} item={item} />
                })}
            </Flex>
        </Box>
    )
}

export default Educations
