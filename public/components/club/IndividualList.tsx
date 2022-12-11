import {Box, Card, CardBody, Flex, Grid, GridItem, Heading, Icon, Link, Text} from "@chakra-ui/react";
import {MdOutlinePeopleAlt} from "react-icons/md";

const IndividualList = () => {
    return (
        <Link href={'/club/2'}>
            <Card w={'900px'} border={'1px'} borderColor={'black.100'}rounded={'6'}>
                <CardBody>
                    <Grid
                        h='100'
                        templateRows='repeat(3, 1fr)'
                        templateColumns='repeat(7, 1fr)'
                        gap={4}
                    >
                        <GridItem colSpan={6}>
                            <Heading>Club A</Heading>
                        </GridItem>

                        <GridItem colSpan={6}>
                            <Text>Organizer: Student Organization</Text>
                        </GridItem>

                        <GridItem rowSpan={2} colSpan={1}>
                            <Flex direction={'row'} justifyContent={'center'} alignItems={'center'}>
                                <Icon as={MdOutlinePeopleAlt}/>
                                <Text ml={1} mb={1}>120</Text>
                            </Flex>
                        </GridItem>
                    </Grid>
                </CardBody>
            </Card>
        </Link>
    )
}

export default IndividualList;