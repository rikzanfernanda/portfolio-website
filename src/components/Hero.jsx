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
import { AnimatePresence, motion } from 'framer-motion'

const LinkButton = ({ href, icon, children, duration, delay }) => {
    return (
        <AnimatePresence>
            <Box
                as={motion.div}
                initial={{
                    opacity: 0,
                    y: -50
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: duration,
                        delay: delay
                    }
                }}
            >
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
            </Box>
        </AnimatePresence>
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
                        <AnimatePresence>
                            <Box
                                as={motion.div}
                                initial={{
                                    opacity: 0,
                                    y: 60
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 2
                                    }
                                }}
                            >
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
                        </AnimatePresence>

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
                            <AnimatePresence>
                                <Box
                                    as={motion.div}
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        hidden: {
                                            opacity: 0,
                                            x: -500
                                        },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.75
                                            }
                                        }
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
                                </Box>
                            </AnimatePresence>
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

                        <AnimatePresence>
                            <Box
                                as={motion.div}
                                initial={{
                                    opacity: 0
                                }}
                                animate={{
                                    opacity: 1,
                                    transition: {
                                        duration: 2
                                    }
                                }}
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
                        </AnimatePresence>
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
                                delay={0}
                                duration={1}
                            >
                                LinkedIn
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.github}
                                icon={<FaGithub />}
                                delay={0.25}
                                duration={1}
                            >
                                Github
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.gitlab}
                                icon={<FaGitlab />}
                                delay={0.5}
                                duration={1}
                            >
                                Gitlab
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.shutterstock}
                                icon={<FaPaintBrush />}
                                delay={0.75}
                                duration={1}
                            >
                                Shutterstock
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.adobe_stock}
                                icon={<FaPaintBrush />}
                                delay={1}
                                duration={1}
                            >
                                Adobe Stock
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.behance}
                                icon={<FaBehance />}
                                delay={1.25}
                                duration={1}
                            >
                                Behance
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.upwork}
                                icon={<FaDollarSign />}
                                delay={1.5}
                                duration={1}
                            >
                                Upwork
                            </LinkButton>
                            <LinkButton
                                href={ABOUT.links.projects_co_id}
                                icon={<FaDollarSign />}
                                delay={1.75}
                                duration={1}
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
