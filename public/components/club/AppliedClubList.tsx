import {
    Card, CardBody, Text, Stack, Divider, List, Box, Grid, GridItem
} from "@chakra-ui/react";
import IndividualList from "./IndividualList";

const AppliedClubList = () => {
    const dummyProps = {
        "id": 2,
        "title": "Club 2",
        "about": "Fasilkom UI",
        "lastYearActiveMember": 200,
        "registrationFee": 0,
        "contactPersonName": "Cin",
        "contactPersonNumber": "192837189273",
        "organizer": "Gatau siapa"
    }

    return (
        <IndividualList props={dummyProps}/>
    )
}

export default AppliedClubList;