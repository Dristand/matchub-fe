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
import getClub from "../api/club/clubGetter";
import {useRouter} from 'next/router'

const IndividualClubPage = (props: any) => {
    const router = useRouter()
    const clubId = router.query.id

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
    console.log(clubId)

    // const getClubProps = async () => {
    //     const response = await getClub(clubId)
    // }

    return (
        <IndividualClub props={dummyProps}/>
    )
}

export default IndividualClubPage;