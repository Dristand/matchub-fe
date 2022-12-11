import {
    Button,
    Flex,
    Input,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    FormControl,
    FormLabel, Card
} from "@chakra-ui/react";
import SignUpPanel from "../public/SignUpPanel";
import SignInPanel from "../public/SignInPanel";

function HomePage() {
    return (
        <Flex height={"100vh"} alignItems={'center'} justifyContent={'center'}>

            <Flex direction={'column'} background={'gray.200'} p={3} m={6} rounded={6}>
                <Tabs isFitted variant='soft-rounded' colorScheme='teal'>
                    <TabList justifyContent={'center'} border={'1px'} p={1} rounded={6} color={'teal'}>
                        <Tab>Sign In</Tab>
                        <Tab>Sign Up</Tab>
                    </TabList>

                    <TabPanels>
                        <SignInPanel/>
                        <SignUpPanel/>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    )
}

export default HomePage