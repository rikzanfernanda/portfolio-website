import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
    return (
        <Box color={'white'}>
            <Image
                src={project.image}
                w={{
                    base: 'auto'
                }}
                h={'auto'}
                objectFit={'contain'}
            />

            <Box
                px={{
                    base: 2,
                    md: 4
                }}
                display={'flex'}
                flexDirection={'column'}
                gap={{
                    base: 1,
                    md: 1.4
                }}
            >
                <Heading
                    as={'h3'}
                    fontSize={{
                        base: 14,
                        md: 18
                    }}
                    noOfLines={1}
                >
                    {project.project_name}
                </Heading>
                <Text
                    fontSize={{
                        base: 12,
                        md: 16
                    }}
                    color={'gray.400'}
                >
                    {project.duration}
                </Text>
                <Text
                    fontSize={{
                        base: 12,
                        md: 16
                    }}
                    noOfLines={5}
                >
                    {project.description}
                </Text>

                <Flex
                    mt={{
                        base: 4,
                        md: 6
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
                        See Project
                        <FiChevronRight />
                    </Link>
                </Flex>
            </Box>
        </Box>
    )
}

export default ProjectCard
