import {
    Box,
    Button,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Text
} from "@chakra-ui/react";
import IndividualClub from "../../public/components/club/IndividualClub";

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

    return (
        <IndividualClub props={dummyProps}/>
    )
}

export default IndividualClubPage;