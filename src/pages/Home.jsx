import React from 'react'
import Education from '../components/Education'
import MoreAbout from '../components/MoreAbout'
import Porfolios from '../components/Porfolios'
import Hero from '../components/Hero'
import KampusMerdeka from '../components/KampusMerdeka'
import LatestProjects from '../components/LatestProjects'
import { Box, Text } from '@chakra-ui/react'
import ABOUT from '../constants/about'
import { MdContentCopy } from "react-icons/md";

const Contact = () => {
    return (
        <Box
            position={'fixed'}
            bottom={{
                base: 3,
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
                background='linear-gradient(to left, #da4453, #89216b)'
                color={'white'}
                borderRadius={'full'}
                px={{
                    base: 3,
                    lg: 6
                }}
                py={{
                    base: 1,
                    lg: 3
                }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                gap={2}
            >
                <Text
                    fontSize={{
                        base: '.8rem',
                        lg: '1rem',
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
            <Education />
            <KampusMerdeka />
            <LatestProjects />
            <MoreAbout />
            <Porfolios />
        </>
    )
}

export default Home
