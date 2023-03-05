import React from 'react'
import MoreAbout from '../components/MoreAbout'
import Porfolios from '../components/Porfolios'
import Hero from '../components/Hero'
import KampusMerdeka from '../components/KampusMerdeka'
import LatestProjects from '../components/LatestProjects'
import { Box, Text } from '@chakra-ui/react'
import ABOUT from '../constants/about'
import { MdContentCopy } from 'react-icons/md'
import Educations from '../components/Educations'

const Contact = () => {
    return (
        <Box
            position={'fixed'}
            bottom={{
                base: 4,
                lg: 6
            }}
            width={'100%'}
            display={'flex'}
            justifyContent={{
                base: 'center',
                lg: 'flex-end'
            }}
            alignItems={'center'}
            zIndex={99}
            px={{
                base: 3,
                lg: '2rem'
            }}
        >
            <Box
                background="linear-gradient(to left, #da4453, #89216b)"
                color={'white'}
                borderRadius={'full'}
                px={{
                    base: 4,
                    lg: 6
                }}
                py={{
                    base: 2,
                    lg: 3
                }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
                boxShadow={'0 2px 20px -5px rgba(0,0,0,0.75)'}
            >
                <Text
                    fontSize={{
                        base: '.85rem',
                        lg: '1rem'
                    }}
                >
                    {ABOUT.contact.email}
                </Text>
                <MdContentCopy />
            </Box>
        </Box>
    )
}

const Home = () => {
    return (
        <>
            <Contact />
            <Hero />
            <Educations />
            <KampusMerdeka />
            <LatestProjects />
            <MoreAbout />
            <Porfolios />
        </>
    )
}

export default Home
