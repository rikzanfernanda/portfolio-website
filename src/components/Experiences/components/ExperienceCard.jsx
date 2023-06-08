import {
    Box,
    HStack,
    Heading,
    ListItem,
    Text,
    UnorderedList,
    VStack,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'

const ExperienceCard = ({ experience }) => {
    const isEvenId = experience.id % 2 !== 0
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px'
    let leftValue = isEvenId ? '-15px' : 'unset'
    let rightValue = isEvenId ? 'unset' : '-15px'

    const isMobile = useBreakpointValue({ base: true, md: false })
    if (isMobile) {
        leftValue = '-15px'
        rightValue = 'unset'
        borderWidthValue = '15px 15px 15px 0'
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={useColorModeValue('gray.100', 'gray.800')}
            spacing={5}
            rounded="lg"
            alignItems="center"
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue(
                    '#edf2f6',
                    '#1a202c'
                )} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>
                <Text
                    fontSize={{
                        base: 14,
                        md: 16
                    }}
                    color="#da4453"
                    mb={1}
                >
                    {experience.date.start} - {experience.date.end}
                </Text>

                <VStack
                    spacing={2}
                    mb={3}
                    textAlign="left"
                    alignItems={'flex-start'}
                >
                    <Heading
                        as={'h3'}
                        fontSize={{
                            base: 16,
                            md: 24
                        }}
                        lineHeight={1.5}
                    >
                        {experience.title}
                    </Heading>
                    <Text
                        fontSize={{
                            base: 14,
                            md: 16
                        }}
                        fontWeight={'bold'}
                        color={'gray.500'}
                    >
                        {experience.company}
                    </Text>
                    <Text
                        fontSize={{
                            base: 14,
                            md: 16
                        }}
                    >
                        {experience.description}
                    </Text>
                    <Box
                        pl={{
                            base: 2,
                            md: 4
                        }}
                    >
                        <UnorderedList
                            fontSize={{
                                base: 14,
                                md: 16
                            }}
                        >
                            {experience.activities.map((activity, i) => (
                                <ListItem key={i}>{activity}</ListItem>
                            ))}
                        </UnorderedList>
                    </Box>
                </VStack>
            </Box>
        </HStack>
    )
}

export default ExperienceCard
