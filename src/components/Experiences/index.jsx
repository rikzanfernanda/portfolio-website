import React from 'react'
import {
    Box,
    chakra,
    Container,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Heading
} from '@chakra-ui/react'
import experiences from '../../constants/experiences'
import ExperienceCard from './components/ExperienceCard'

const Experiences = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })
    const isDesktop = useBreakpointValue({ base: false, md: true })

    return (
        <Box
            py={{
                base: 8,
                md: 16
            }}
        >
            <Container maxW={'container.xl'}>
                <Heading
                    fontSize={{
                        base: '1.25rem',
                        md: '2rem'
                    }}
                    textAlign={{
                        base: 'center'
                    }}
                    mb={{
                        base: 3,
                        md: 10
                    }}
                >
                    Career Timeline
                </Heading>

                <Box>
                    {experiences.map((experience, i) => {
                        return (
                            <Flex key={i} mb={'10px'}>
                                {/* Desktop view(left card) */}
                                {isDesktop && i % 2 !== 0 && (
                                    <>
                                        <EmptyCard />
                                        <LineWithDot />
                                        <ExperienceCard
                                            experience={experience}
                                        />
                                    </>
                                )}

                                {/* Mobile view */}
                                {isMobile && (
                                    <>
                                        <LineWithDot />
                                        <ExperienceCard
                                            experience={experience}
                                        />
                                    </>
                                )}

                                {/* Desktop view(right card) */}
                                {isDesktop && i % 2 === 0 && (
                                    <>
                                        <ExperienceCard
                                            experience={experience}
                                        />
                                        <LineWithDot />
                                        <EmptyCard />
                                    </>
                                )}
                            </Flex>
                        )
                    })}
                </Box>
            </Container>
        </Box>
    )
}

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '20px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg={useColorModeValue('gray.600', 'gray.200')}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    )
}

const EmptyCard = () => {
    return (
        <Box
            flex={{ base: 0, md: 1 }}
            p={{ base: 0, md: 6 }}
            bg="transparent"
        ></Box>
    )
}

export default Experiences
