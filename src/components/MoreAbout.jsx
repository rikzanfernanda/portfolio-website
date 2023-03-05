import React from 'react'
import { Box, Heading, Icon, Link, List, ListItem } from '@chakra-ui/react'
import about from '../constants/about'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { BsLinkedin, BsGithub, BsGit } from 'react-icons/bs'

const MoreAbout = () => {
    return (
        <Box py={[20, 40]} px={[3, 20]}>
            <Heading
                size={{
                    base: 'xl'
                }}
                mb={[6, 10]}
                textAlign={'center'}
            >
                More About Me
            </Heading>

            <Box
                display={'flex'}
                justifyContent={'center'}
                alignItems={'flex-start'}
                gap={[4, 10]}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={{
                        base: 2
                    }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={'gray.100'}
                    p={{
                        base: 4,
                        md: 8
                    }}
                    borderRadius={'xl'}
                >
                    <Icon as={BsLinkedin}
                        boxSize={{
                            base: 10,
                            md: '8rem',
                            lg: '12rem'
                        }}
                    />
                    <Link
                        href={about.links.linkedin}
                        isExternal
                        fontSize={{
                            base: 'md',
                            md: '2.5rem',
                            lg: '4rem'
                        }}
                    >
                        LinkedIn
                    </Link>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={{
                        base: 2
                    }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={'gray.100'}
                    p={{
                        base: 4,
                        md: 8
                    }}
                    borderRadius={'xl'}
                >
                    <Icon as={BsGithub}
                        boxSize={{
                            base: 10,
                            md: '8rem',
                            lg: '12rem'
                        }}
                    />
                    <Link
                        href={about.links.github}
                        isExternal
                        fontSize={{
                            base: 'md',
                            md: '2.5rem',
                            lg: '4rem'
                        }}
                    >
                        Github
                    </Link>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    gap={{
                        base: 2
                    }}
                    justifyContent={'center'}
                    alignItems={'center'}
                    backgroundColor={'gray.100'}
                    p={{
                        base: 4,
                        md: 8
                    }}
                    borderRadius={'xl'}
                >
                    <Icon as={BsGit}
                        boxSize={{
                            base: 10,
                            md: '8rem',
                            lg: '12rem'
                        }}
                    />
                    <Link
                        href={about.links.gitlab}
                        isExternal
                        fontSize={{
                            base: 'md',
                            md: '2.5rem',
                            lg: '4rem'
                        }}
                    >
                        Gitlab
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default MoreAbout
