import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import KM from '../constants/kampus-merdeka'

const KmCard = ({ item }) => {
    return (
        <Box
            pb={{
                base: 6,
                md: 8
            }}
            w={{
                base: '100%',
                md: '30rem',
                lg: '34rem'
            }}
        >
            <Flex
                alignItems={'center'}
                justifyContent={'center'}
                bgColor={'gray.100'}
                borderRadius={{
                    base: '1.25rem'
                }}
                p={{
                    base: 3,
                    md: 6
                }}
                mb={{
                    base: 3
                }}
            >
                <Image
                    src={item.image}
                    h={{
                        base: '8rem',
                        md: '14rem',
                        lg: '20rem'
                    }}
                    w={'auto'}
                />
            </Flex>
            <Box>
                <Heading
                    fontSize={{
                        base: 'sm',
                        md: 'lg',
                        lg: '1.5rem'
                    }}
                >
                    {item.title}
                </Heading>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'lg',
                        lg: '1.2rem'
                    }}
                >
                    {item.company}
                </Text>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'lg',
                        lg: '1.2rem'
                    }}
                    color={'gray.500'}
                >
                    {item.duration}
                </Text>
                <Divider
                    my={{
                        base: 3
                    }}
                />
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'lg',
                        lg: '1.2rem'
                    }}
                >
                    {item.description}
                </Text>
            </Box>
        </Box>
    )
}

const kampusMerdeka = () => {
    return (
        <Box
            pt={{
                base: 4,
                md: 24
            }}
            px={{
                base: 3,
                md: '2rem',
                lg: '8rem'
            }}
            pb={{
                base: 0
            }}
            minH={'100vh'}
        >
            <Heading
                fontSize={{
                    base: '.85rem',
                    md: '1.4rem',
                    lg: '1.8rem',
                    xl: '2.5rem'
                }}
                textAlign={{
                    base: 'left',
                    md: 'center'
                }}
                mb={{
                    base: 3,
                    md: '2rem',
                    lg: '3rem'
                }}
            >
                {KM.title}
            </Heading>

            <Flex
                justifyContent={'center'}
                gap={{
                    base: 4,
                    md: 10,
                    lg: 24
                }}
                flexDirection={{
                    base: 'column',
                    md: 'row'
                }}
            >
                {KM.data.map((item, i) => {
                    return <KmCard item={item} key={i} />
                })}
            </Flex>
        </Box>
    )
}

export default kampusMerdeka
