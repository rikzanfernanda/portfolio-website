import { Box, Container, Divider, Flex, Heading, Link, SimpleGrid, useBreakpointValue } from '@chakra-ui/react'
import LATEST_PROJECTS from '../../constants/latest-projects'
import ProjectCard from './components/ProjectCard'

const LatestProject = () => {
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <Box
            py={{
                base: 8,
                md: 16
            }}
            background="linear-gradient(150deg, #16222a, #3a6073)"
        >
            <Container maxW={'container.xl'}>
                <Heading
                    fontSize={{
                        base: '1.25rem',
                        md: '2rem'
                    }}
                    color={'white'}
                    textAlign={{
                        base: 'left'
                    }}
                    mb={{
                        base: 3,
                        md: 10
                    }}
                >
                    {LATEST_PROJECTS.title}
                </Heading>

                {isMobile && (
                    <Flex
                        gap={0}
                        overflowX={'auto'}
                        sx={{
                            '&::-webkit-scrollbar': {
                                display: 'none'
                            }
                        }}
                    >
                        {LATEST_PROJECTS.data.length > 0 &&
                            LATEST_PROJECTS.data.map((project, i) => {
                                return (
                                    <Box key={i} minW={'80%'}>
                                        <ProjectCard project={project} />
                                    </Box>
                                )
                            })}
                    </Flex>
                )}

                {!isMobile && (
                    <>
                        <SimpleGrid columns={{
                            base: 2,
                            lg: 4
                        }}
                            columnGap={2}
                            rowGap={8}
                        >
                            {LATEST_PROJECTS.data.length > 0 &&
                                LATEST_PROJECTS.data.map((project, i) => {
                                    return <ProjectCard key={i} project={project} />
                                })}
                        </SimpleGrid>
                    </>
                )}

                <Divider mt={{
                    base: 4,
                    md: 10
                }} />

                <Box
                    textAlign={'center'}
                    mt={{
                        base: 10,
                        lg: 16
                    }}
                >
                    <Link
                        href={
                            'https://www.linkedin.com/in/rikzan-fernanda-9097831ab/details/projects/'
                        }
                        isExternal
                        backgroundColor={'white'}
                        color={'#da4453'}
                        _hover={{
                            boxShadow: '0 2px 20px -10px rgba(0,0,0,0.95)',
                            color: 'black'
                        }}
                        py={{
                            base: 2,
                            md: 3
                        }}
                        px={{
                            base: 4,
                            md: 10
                        }}
                        fontWeight={'600'}
                        borderRadius={'full'}
                        fontSize={{
                            base: 18,
                            md: 24
                        }}
                    >
                        See All Projects
                    </Link>
                </Box>
            </Container>
        </Box>
    )
}

export default LatestProject
