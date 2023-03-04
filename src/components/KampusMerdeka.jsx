import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import KM from '../constants/kampus-merdeka'

const KmCard = ({ item }) => {
    return (
        <Box
            borderWidth={{
                base: '1px',
                md: '2px',
            }}
            borderColor={'gray.200'}
            borderRadius={'xl'}
            p={{
                base: 3,
                md: 6
            }}
            pb={{
                base: 6,
                md: 8
            }}
            w={{
                base: '100%',
                md: '30rem',
                lg: '38rem'
            }}
        >
            <Flex alignItems={'center'} justifyContent={'center'}
                bgColor={'gray.100'}
                borderRadius={'xl'}
                p={{
                    base: 3,
                    md: 6
                }}
                mb={{
                    base: 3,
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
                    size={{
                        base: 'sm',
                        md: 'lg',
                        lg: 'xl',
                    }}
                >
                    {item.title}
                </Heading>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'xl',
                        lg: '2xl',
                    }}
                >
                    {item.company}
                </Text>
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'xl',
                        lg: '2xl',
                    }}
                    color={'gray.500'}
                >
                    {item.duration}
                </Text>
                <Divider 
                    my={{
                        base: 3,
                    }}
                />
                <Text
                    fontSize={{
                        base: 'sm',
                        md: 'xl',
                        lg: '2xl',
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
            py={{
                base: 20,
                md: 32
            }}
            px={{
                base: 3,
            }}
            minH={'100vh'}
        >
            <Heading
                size={{
                    base: 'lg',
                    md: 'xl',
                    lg: '2xl',
                    xl: '3xl',
                }}
                textAlign={'center'}
                mb={{
                    base: 8,
                    md: '5rem',
                    lg: '6rem',
                }}
            >
                {KM.title}
            </Heading>

            <Flex
                justifyContent={'center'}
                flexWrap={'wrap'}
                gap={{
                    base: 4,
                    md: 8,
                    lg: 12,
                }}
                flexDirection={{
                    base: 'column',
                    md: 'row',
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