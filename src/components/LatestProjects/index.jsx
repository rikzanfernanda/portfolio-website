import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import React from 'react'
import LATEST_PROJECTS from '../../constants/latest-projects'
import ProjectCard from './components/ProjectCard'

const LatestProject = () => {
    return (
        <Box
            py={{
                base: 20,
                md: 32
            }}
            px={{
                base: 3,
                md: '10rem'
            }}
            minH={'100vh'}
            background="linear-gradient(180deg, #16222a, #3a6073)"
        >
            <Heading
                size={{
                    base: 'lg',
                    md: 'xl',
                    lg: '2xl',
                    xl: '3xl'
                }}
                mb={{
                    base: 8,
                    md: '5rem',
                    lg: '6rem'
                }}
                color={'white'}
            >
                {LATEST_PROJECTS.title}
            </Heading>

            <Flex
                flexDirection={'column'}
                gap={{
                    base: 6,
                    lg: 12
                }}
            >
                {LATEST_PROJECTS.data.length > 0 &&
                    LATEST_PROJECTS.data.map((project, i) => {
                        return <ProjectCard key={i} project={project} />
                    })}
            </Flex>

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
                    p={{
                        base: 2
                    }}
                    px={{
                        base: 4
                    }}
                    borderRadius={'full'}
                >
                    More Projects
                </Link>
            </Box>
        </Box>
    )
}

export default LatestProject
