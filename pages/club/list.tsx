import {Flex, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import AvailableClubList from "../../public/components/club/AvailableClubList";
import AppliedClubList from "../../public/components/club/AppliedClubList";

const ClubList = () => {
    return (
        <Flex height={"100vh"} alignItems={'center'} justifyContent={'center'}>

            <Flex direction={'column'} background={'gray.200'} p={3} m={6} rounded={6}>
                <Tabs isFitted variant='soft-rounded' colorScheme='teal'>
                    <TabList justifyContent={'center'} border={'1px'} p={1} rounded={6} color={'teal'}>
                        <Tab>Available Club</Tab>
                        <Tab>Applied Club</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel width={'100%'}>
                            <AvailableClubList/>
                        </TabPanel>
                        <TabPanel width={'100%'}>
                            <AppliedClubList/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Flex>
    )
}

export default ClubList;