import {Box, Button, Flex, Heading, Stack, StackDivider, Text, useDisclosure} from "@chakra-ui/react";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import ClubApplicationCard from "./modal/ClubApplicationCard";

const IndividualClub = (props: any) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

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
            <Flex w={'700px'} rounded={6}>
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
                        <Button onClick={onOpen} colorScheme={'teal'} w={"48%"} type={'submit'} mr={4}>Apply</Button>
                        <Button w={"48%"} type={'submit'} onClick={goBack}>Back</Button>

                        <Modal onClose={onClose} isOpen={isOpen} isCentered>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Club Application Confirmation</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <ClubApplicationCard props={props.props}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button colorScheme='teal' mr={3} w={'50%'}>Save</Button>
                                    <Button onClick={onClose} w={'50%'} colorScheme={'red'}>Cancel</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default IndividualClub;