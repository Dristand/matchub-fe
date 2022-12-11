import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Text
} from "@chakra-ui/react";

const IndividualClubPage = (props: any) => {
    const dummyProps = {
        "id": 1,
        "title": "Ristek",
        "about": "Fasilkom UI",
        "lastYearActiveMember": 200,
        "registrationFee": 0,
        "contactPersonName": "Widi",
        "contactPersonNumber": "091291929129",
        "organizer": "Ristek Fasilkom UI"
    }

    props = dummyProps;

    return (
        <Flex
            height={"100vh"}
            alignItems={'center'}
            justifyContent={'center'}
            direction={'column'}
            experimental_spaceY={5}
            maxWidth={'1920px'}
            minWidth={'700px'}
            p={20}
        >
            <Flex backgroundColor={'white'} w={'700px'} rounded={6}>
                <Stack divider={<StackDivider />} spacing='4' w={'full'} p={4}>
                    <Box padding={3}>
                        <Heading size='lg' textTransform='uppercase'>
                            {props.title}
                        </Heading>
                    </Box>
                    <Box padding={3}>
                        <Heading size='xs' textTransform='uppercase'>
                            About
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.about}
                        </Text>
                    </Box>
                    <Box padding={3}>
                        <Heading size='xs' textTransform='uppercase'>
                            Registration Fee
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.registrationFee} SGD
                        </Text>
                    </Box>
                    <Box padding={3}>
                        <Heading size='xs' textTransform='uppercase'>
                            Last Year Active Member
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.lastYearActiveMember}
                        </Text>
                    </Box>
                    <Box padding={3}>
                        <Heading size='xs' textTransform='uppercase'>
                            Contact Person
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.contactPersonName}
                        </Text>
                        <Text pt='2' fontSize='sm'>
                            +{props.contactPersonNumber}
                        </Text>
                    </Box>
                    <Box flexDirection={'row'} justifyItems={'center'} ml={4}>
                        <Button colorScheme={'teal'} w={"48%"} type={'submit'} mr={4}>Apply</Button>
                        <Button colorScheme={'red'} w={"48%"} type={'submit'} color={'white'}>Back</Button>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default IndividualClubPage;