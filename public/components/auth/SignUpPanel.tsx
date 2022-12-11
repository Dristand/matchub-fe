import {
    Box,
    Button, Card,
    CardBody,
    FormControl,
    FormLabel, Heading,
    Input,
    Stack,
    StackDivider,
    TabPanel, Text,
    useDisclosure
} from "@chakra-ui/react";
import {useState} from "react";
import {signIn} from "../../../pages/api/auth/signIn";
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal";
import SignUpConfirmationCard from "./modal/SignUpConfirmationCard";
import {signUp} from "../../../pages/api/auth/signUp";
import {parse} from "json5";

export default function SignUpPanel() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [studentId, setStudentId] = useState("");
    const [fullName, setFullName] = useState("");

    const handleClick = async (e:any) => {
        e.preventDefault();

        try {
            const response = await signUp(email, password, parseInt(studentId), fullName)
            console.log(response)

            onClose();

        } catch (err) {
            alert("error!")
        }
    }

    return (
        <TabPanel>

            <form>
                <FormControl isRequired>
                    <FormLabel>Student Id</FormLabel>
                    <Input placeholder={'1906293114'} variant={'filled'} mb={'3'} type={'number'}
                           value={studentId} onChange={e => setStudentId(e.target.value)}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input placeholder={'John Doe'} variant={'filled'} mb={'3'}
                           value={fullName} onChange={e => setFullName(e.target.value)}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder={'example@gmail.com'} variant={'filled'} mb={'3'} type={'email'}
                           value={email} onChange={e => setEmail(e.target.value)}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder={'********'} variant={'filled'} mb={'6'} type={'password'}
                           value={password} onChange={e => setPassword(e.target.value)}/>
                </FormControl>

                <Button onClick={onOpen} colorScheme={'teal'} w={'full'}>Sign Up</Button>

                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Sign Up Confirmation</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Card>
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Student Id
                                            </Heading>
                                            <Text pt='2' fontSize='sm' >
                                                {studentId}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Full Name
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {fullName}
                                            </Text>
                                        </Box>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase'>
                                                Email Address
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {email}
                                            </Text>
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleClick} colorScheme='teal' mr={3} w={'50%'} type={'submit'}>Save</Button>
                            <Button onClick={onClose} w={'50%'} colorScheme={'red'}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </form>
        </TabPanel>
    )
}