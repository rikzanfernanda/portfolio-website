import { Box, Container, Heading, Image, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import education from '../../constants/education'
import BgEducation from '../../assets/images/bg-education.jpg'
import IconEducation from '../../assets/images/education.gif'

const Educations = () => {
    return (
        <Box
            py={{
                base: 12,
                md: 16,
                lg: 24
            }}
            backgroundColor={'gray.100'}
            backgroundImage={BgEducation}
            bgSize={'cover'}
            bgPosition={'center'}
            bgAttachment={'fixed'}
        >
            <Container maxW={'container.xl'}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <Box>
                        <Heading
                            fontSize={{
                                base: '1.25rem',
                                md: '2rem'
                            }}
                            textAlign={{
                                base: 'center'
                            }}
                            mb={{
                                base: 6,
                                md: 12
                            }}
                            color={'white'}
                        >
                            {education.title}
                        </Heading>
                        {education.data.map((item, i) => {
                            return (
                                <Box key={i}>
                                    <Box
                                        mb={6}
                                        color={'white'}
                                    >
                                        <Heading
                                            fontSize={{
                                                base: '1rem',
                                                lg: '1.5rem'
                                            }}
                                            mb={{
                                                base: 1
                                            }}
                                        >
                                            {item.nama}
                                        </Heading>
                                        <Text
                                            fontSize={{
                                                base: '.85rem',
                                                lg: '1rem'
                                            }}
                                        >
                                            {item.study} | {item.date.start} - {item.date.end}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <UnorderedList
                                            fontSize={{
                                                base: '.85rem',
                                                lg: '1rem'
                                            }}
                                            color={'white'}
                                            fontWeight={'500'}
                                        >
                                            {item.activities.map((activity, i) => (
                                                <ListItem key={i}>{activity}</ListItem>
                                            ))}
                                        </UnorderedList>
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>

                    <Box
                        w={{
                            base: 'auto',
                        }}
                        h={{
                            base: 350
                        }}
                        display={{
                            base: 'none',
                            md: 'flex'
                        }}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Image
                            src={IconEducation}
                            w={{
                                base: '100%'
                            }}
                            h={'100%'}
                            objectFit={'contain'}
                        />
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}

export default Educations
