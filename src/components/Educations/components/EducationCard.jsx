import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import BgEducation from '../../../assets/images/bg-education.jpg'
import IconEducation from '../../../assets/images/education.gif'

const EducationCard = ({ item }) => {
    return (
        <Box
            backgroundImage={BgEducation}
            w={{
                base: '100%'
            }}
            bgSize={'cover'}
            color={'white'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            px={{
                base: 4,
                md: 8,
                lg: 16
            }}
            py={{
                base: 8,
                md: 12,
                lg: 20
            }}
            borderRadius={{
                base: '1.25rem',
                md: '2rem',
                lg: '3rem'
            }}
            gap={{
                base: 4
            }}
        >
            <Box>
                <Heading
                    fontSize={{
                        base: '1rem',
                        md: '1.25rem',
                        lg: '2.25rem'
                    }}
                    mb={{
                        base: 1
                    }}
                >
                    {item.nama}
                </Heading>
                <Text
                    fontSize={{
                        base: '.75rem',
                        md: '.9rem',
                        lg: '1.25rem'
                    }}
                >
                    {item.study}
                </Text>
                <Box
                    background={'linear-gradient(to right, #fe8c00, #f83600)'}
                    display={'inline-block'}
                    px={{
                        base: 3
                    }}
                    py={{
                        base: 1
                    }}
                    borderRadius={'full'}
                    mt={{
                        base: 6,
                        md: 10
                    }}
                >
                    <Text
                        fontSize={{
                            base: '.6rem',
                            md: '.75rem',
                            lg: '1rem'
                        }}
                        fontWeight={'bold'}
                    >
                        {item.date.start} - {item.date.end}
                    </Text>
                </Box>
            </Box>
            <Box
                w={{
                    base: '8rem',
                    md: '12rem',
                    lg: '16rem'
                }}
                h={{
                    base: '8rem',
                    md: '12rem',
                    lg: '16rem'
                }}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={{
                    base: '1.25rem',
                    md: '2rem',
                    lg: '3rem'
                }}
                background={'gray.100'}
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
        </Box>
    )
}

export default EducationCard
