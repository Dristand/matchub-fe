import {
    Card, CardBody, Text, Stack, Divider, List, Grid, GridItem, Flex, Box, Heading, Icon
} from "@chakra-ui/react";
import {MdOutlinePeopleAlt} from "react-icons/md";
import IndividualList from "./IndividualList";

const AvailableClubList = () => {
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

    return (
        <IndividualList props={dummyProps}/>
    )
}

export default AvailableClubList;