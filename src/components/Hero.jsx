import {
    Box,
    Button,
    Container,
    Grid,
    GridItem,
    Image,
    Link,
    SimpleGrid,
    Text
} from '@chakra-ui/react'
import React from 'react'
import ABOUT from '../constants/about'
import {
    FaLinkedin,
    FaGithub,
    FaGitlab,
    FaPaintBrush,
    FaBehance,
    FaDollarSign
} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const LinkButton = ({ href, icon, children }) => {
    return (
        <Link
            href={href}
            isExternal
            width={{
                base: 'auto',
                md: '100%'
            }}
        >
            <Button
                variant={'solid'}
                colorScheme="gray"
                color={'black'}
                leftIcon={icon}
                width={'100%'}
            >
                {children}
            </Button>
        </Link>
    )
}

const Hero = () => {
    return (
        <Box
            bgColor={'blackAlpha.50'}
            minH={'100vh'}
            background="linear-gradient(360deg, #16222a, #3a6073)"
            bgPos={'center'}
            bgAttachment={'fixed'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            display={'flex'}
            justifyContent={{
                base: 'center',
                md: 'flex-end'
            }}
            color={'white'}
            flexDirection={'column'}
        >
            <Container maxW={'container.xl'}>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(4, 1fr)'
                    }}
                    gap={{
                        base: 8,
                        md: 20
                    }}
                    py={10}
                    pb={{
                        base: 20
                    }}
                >
                    <GridItem
                        colSpan={{
                            base: 1,
                            md: 3
                        }}
                    >
                        <Box>
                            <Image
                                src={ABOUT.profile}
                                alt={'profile'}
                                borderRadius={'full'}
                                boxSize={{
                                    base: 100,
                                    md: 150,
                                    lg: 200
                                }}
                                mb={{
                                    base: 4
                                }}
                                bgSize={'cover'}
                                objectFit={'cover'}
                                mx={{
                                    base: 'auto',
                                    md: '0'
                                }}
                            />
                        </Box>
                        <Box
                            textAlign={{
                                base: 'center',
                                md: 'left'
                            }}
                            mb={{
                                base: 8,
                                md: 12,
                                lg: 14
                            }}
                        >
                            <Text
                                fontSize={{
                                    base: '3xl',
                                    md: '6xl',
                                    lg: '7xl'
                                }}
                                fontWeight={'bold'}
                            >
                                {ABOUT.name}
                            </Text>
                            <Text
                                fontSize={{
                                    base: 'md',
                                    md: '1rem',
                                    lg: '1rem',
                                    xl: '1.25rem'
                                }}
                            >
                                {ABOUT.skills[0]} |{' '}
                                <TypeAnimation
                                    sequence={[
                                        ABOUT.skills[1],
                                        1000,
                                        ABOUT.skills[2],
                                        1000,
                                        ABOUT.skills[3],
                                        1000,
                                        ABOUT.skills[4],
                                        1000
                                    ]}
                                    repeat={Infinity}
                                />
                            </Text>
                        </Box>
                        <Box
                            textAlign={{
                                base: 'center',
                                md: 'left'
                            }}
                        >
                            <Text
                                fontSize={{
                                    base: 'md',
                                    md: '1rem',
                                    lg: '1rem',
                                    xl: '1.25rem'
                                }}
                                fontWeight={'500'}
                            >
                                {ABOUT.summary}
                            </Text>
                        </Box>
                    </GridItem>

                    <GridItem
                        colSpan={1}
                        display={{
                            md: 'flex'
                        }}
                        alignItems={'center'}
                        px={{
                            base: 10,
                            md: 0
                        }}
                    >
                        <SimpleGrid columns={1} gap={3} width={'100%'}>
                            <LinkButton
                                href={ABOUT.links.linkedin}
                                icon={<FaLinkedin />}
                            >
                                LinkedIn
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.github}
                                icon={<FaGithub />}
                            >
                                Github
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.gitlab}
                                icon={<FaGitlab />}
                            >
                                Gitlab
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.shutterstock}
                                icon={<FaPaintBrush />}
                            >
                                Shutterstock
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.adobe_stock}
                                icon={<FaPaintBrush />}
                            >
                                Adobe Stock
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.behance}
                                icon={<FaBehance />}
                            >
                                Behance
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.upwork}
                                icon={<FaDollarSign />}
                            >
                                Upwork
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.projects_co_id}
                                icon={<FaDollarSign />}
                            >
                                Projects.co.id
                            </LinkButton>
                        </SimpleGrid>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}

export default Hero
