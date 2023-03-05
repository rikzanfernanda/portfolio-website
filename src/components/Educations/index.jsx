import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import education from '../../constants/education'
import EducationCard from './components/EducationCard'

const Educations = () => {
    return (
        <Box
            pt={{
                base: 4,
                md: 16,
                lg: 24
            }}
            px={{
                base: 3,
                md: '10rem'
            }}
        >
            <Heading
                fontSize={{
                    base: '.85rem',
                    md: '1.4rem',
                    lg: '1.8rem',
                    xl: '2.5rem'
                }}
                textAlign={{
                    base: 'left',
                    md: 'center'
                }}
                mb={{
                    base: 3,
                    md: '2rem',
                    lg: '3rem'
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
