import { Box, Container, Flex, Heading, Image, Link, ListItem, SimpleGrid, Text, UnorderedList } from "@chakra-ui/react"
import LATEST_PROJECTS from "../../constants/latest-projects"
import { FiChevronRight } from 'react-icons/fi'

const Portfolio = () => {
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
                        base: 'center'
                    }}
                    mb={{
                        base: 6,
                        md: 12
                    }}
                >
                    {LATEST_PROJECTS.title}
                </Heading>

                <SimpleGrid
                    columns={{
                        base: 1,
                        md: 2
                    }}
                    spacing={{
                        base: 8,
                        md: 20
                    }}
                >
                    {LATEST_PROJECTS.data.map((project, i) => {
                        return (
                            <Box
                                key={i}
                                color={'white'}
                            >
                                <Image
                                    src={project.image}
                                    w={{
                                        base: 'auto'
                                    }}
                                    h={'auto'}
                                    objectFit={'contain'}
                                    bgColor={'gray.100'}
                                    borderRadius={'md'}
                                />
                                <Box
                                    py={{
                                        base: 2,
                                        lg: 5
                                    }}
                                >
                                    <Heading
                                        as={'h2'}
                                        fontSize={{
                                            base: '1rem',
                                            lg: '1.5rem'
                                        }}
                                        noOfLines={1}
                                    >
                                        {project.project_name}
                                    </Heading>

                                    <Text
                                        fontSize={{
                                            base: '.85rem',
                                            lg: '1rem'
                                        }}
                                        color={'gray.400'}
                                    >
                                        {project.duration}
                                    </Text>

                                    <Flex
                                        mt={{
                                            base: 2,
                                            md: 2
                                        }}
                                        mb={{
                                            base: 4,
                                            md: 4
                                        }}
                                    >
                                        <Link
                                            href={project.link}
                                            isExternal
                                            backgroundColor={'white'}
                                            py={{
                                                base: 1
                                            }}
                                            px={{
                                                base: 4
                                            }}
                                            color={'black'}
                                            borderRadius={'full'}
                                            fontSize={{
                                                base: 10,
                                                lg: '14'
                                            }}
                                            fontWeight={'600'}
                                            _hover={{
                                                boxShadow: '0 2px 20px -10px rgba(0,0,0,0.95)',
                                                color: '#da4453'
                                            }}
                                            display={'flex'}
                                            alignItems={'center'}
                                            gap={1}
                                        >
                                            Show Project
                                            <FiChevronRight />
                                        </Link>
                                    </Flex>

                                    <Text
                                        fontSize={{
                                            base: '.85rem',
                                            lg: '1rem'
                                        }}
                                        fontWeight={'500'}
                                    >
                                        {project.description}
                                    </Text>

                                    <UnorderedList
                                        fontSize={{
                                            base: '.85rem',
                                            lg: '1rem'
                                        }}
                                        color={'white'}
                                        fontWeight={'500'}
                                        pl={4}
                                    >
                                        {project.jobs.map(
                                            (job, i) => (
                                                <ListItem key={i}>
                                                    ✅ {job}
                                                </ListItem>
                                            )
                                        )}
                                    </UnorderedList>
                                </Box>
                            </Box>
                        )
                    })}
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default Portfolio