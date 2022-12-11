import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from "@chakra-ui/modal";
import {Box, Button, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text, useDisclosure} from "@chakra-ui/react";
import SignUpConfirmationCard from "./SignUpConfirmationCard";

export default function SignUpConfirmationModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Button onClick={onOpen} colorScheme={'teal'} w={'full'} type={'submit'}>Sign Up</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Sign Up Confirmation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SignUpConfirmationCard/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='teal' mr={3} w={'50%'}>Save</Button>
                        <Button onClick={onClose} w={'50%'} colorScheme={'red'}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}