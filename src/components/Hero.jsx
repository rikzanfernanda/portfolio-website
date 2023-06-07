import { Box, Container, Image, Text } from '@chakra-ui/react'
import React from 'react'
import ABOUT from '../constants/about'
import HeroGif from '../assets/images/hero-gif.gif'

const Hero = () => {
    return (
        <Box
            bgColor={'blackAlpha.50'}
            h={'100vh'}
            bgImg={HeroGif}
            bgPos={'center'}
            bgAttachment={'fixed'}
            bgRepeat={'no-repeat'}
            bgSize={'cover'}
            display={'flex'}
            justifyContent={'center'}
            color={'white'}
            flexDirection={'column'}
        >
            <Container maxW={'container.xl'}>
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
                        {ABOUT.note}
                    </Text>
                </Box>
                <Box textAlign={{
                    base: 'center',
                    md: 'left'
                }}>
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
            </Container>
        </Box>
    )
}

export default Hero
