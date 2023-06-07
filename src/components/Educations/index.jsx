import { Box, Container, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import education from '../../constants/education'
import EducationCard from './components/EducationCard'

const Educations = () => {
    return (
        <Box
            py={{
                base: 8,
                md: 16,
                lg: 24
            }}
            backgroundColor={'gray.100'}
        >
            <Container maxW={'container.xl'}>
                <Heading
                    fontSize={{
                        base: '1rem',
                        md: '2rem'
                    }}
                    textAlign={{
                        base: 'center'
                    }}
                    mb={{
                        base: 3,
                        md: '1.25rem'
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
            </Container>
        </Box>
    )
}

export default Educations
