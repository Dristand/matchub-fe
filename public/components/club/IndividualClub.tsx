import {Box, Button, Flex, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";

const IndividualClub = (props: any) => {
    const goBack = () => {
        window.history.back();
    }

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
                            {props.props.title}
                        </Heading>
                    </Box>
                    <Box padding={3}>
                        <Heading size='sm' textTransform='uppercase'>
                            About
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            {props.props.about}
                        </Text>
                    </Box>
                    <Box padding={3}>
                        <Heading size='sm' textTransform='uppercase'>
                            Registration Fee
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            {props.props.registrationFee} SGD
                        </Text>
                    </Box>
                    <Box padding={3}>
                        <Heading size='sm' textTransform='uppercase'>
                            Last Year Active Member
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            {props.props.lastYearActiveMember}
                        </Text>
                    </Box>
                    <Box padding={3}>
                        <Heading size='sm' textTransform='uppercase'>
                            Contact Person
                        </Heading>
                        <Text pt='2' fontSize='md'>
                            {props.props.contactPersonName}
                        </Text>
                        <Text pt='2' fontSize='md'>
                            +{props.props.contactPersonNumber}
                        </Text>
                    </Box>
                    <Box flexDirection={'row'} justifyItems={'center'} ml={4}>
                        <Button colorScheme={'teal'} w={"48%"} type={'submit'} mr={4}>Apply</Button>
                        <Button colorScheme={'red'} w={"48%"} type={'submit'} color={'white'}
                                onClick={goBack}>Back</Button>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default IndividualClub;