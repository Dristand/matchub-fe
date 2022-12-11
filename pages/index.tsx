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
    FormLabel, Card, Heading, Container
} from "@chakra-ui/react";

function HomePage() {
    return (
        <Flex
            height={"100vh"}
            alignItems={'center'}
            justifyContent={'center'}
            direction={'column'}
            experimental_spaceY={5}
            maxWidth={'1920px'}
            w={'full'}
            p={20}
        >

            <Container>
                <Heading>
                    ABC CLUB MANAGEMENT
                </Heading>
            </Container>

            <Container>
                <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </text>
            </Container>
        </Flex>
    )
}

export default HomePage