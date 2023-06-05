import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
    return (
        <Box
            display={'flex'}
            gap={{
                base: 2,
                lg: 4
            }}
            background="linear-gradient(to right, #c9d6ff, #e2e2e2)"
            p={{
                base: 2,
                lg: 4,
                xl: 6
            }}
            borderRadius={{
                base: 'xl',
                lg: '3xl'
            }}
            position={'relative'}
        >
            <Image
                src={project.image}
                w={{
                    base: '6rem',
                    lg: '20rem',
                    xl: '26rem'
                }}
                h={'100%'}
            />

            <Box
                flexGrow={1}
                pb={{
                    base: 5
                }}
            >
                <Heading
                    fontSize={{
                        base: '.8rem',
                        lg: '1.5rem',
                        xl: '1.5rem'
                    }}
                    mb={{
                        base: 1,
                        lg: 2
                    }}
                >
                    {project.project_name}
                </Heading>
                <Text
                    fontSize={{
                        base: '.75rem',
                        lg: '1rem',
                        xl: '1rem',
                        '2xl': '1.2rem'
                    }}
                >
                    {project.description}
                </Text>
            </Box>
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Link
                    href={project.link}
                    isExternal
                    backgroundColor={'white'}
                    p={{
                        base: 1
                    }}
                    borderRadius="100%"
                    fontSize={{
                        base: '.8rem',
                        lg: '1.8rem'
                    }}
                    _hover={{
                        boxShadow: '0 2px 20px -10px rgba(0,0,0,0.75)'
                    }}
                >
                    <FiChevronRight />
                </Link>
            </Flex>

            <Box
                position={'absolute'}
                bottom={'-0.5rem'}
                right={0}
                mr={{
                    base: 8,
                    lg: 16,
                    xl: 24
                }}
                background="linear-gradient(to left, #da4453, #89216b)"
                px={{
                    base: 4,
                    lg: 8
                }}
                py={{
                    base: 2,
                    lg: 4
                }}
                borderRadius={{
                    base: 'full'
                }}
                color={'white'}
                boxShadow={'0 2px 30px -5px rgba(0,0,0,0.75)'}
            >
                <Text
                    fontSize={{
                        base: '.5rem',
                        lg: '.8rem',
                        xl: '1rem'
                    }}
                    fontWeight={'bold'}
                >
                    {project.duration}
                </Text>
            </Box>
        </Box>
    )
}

export default ProjectCard
