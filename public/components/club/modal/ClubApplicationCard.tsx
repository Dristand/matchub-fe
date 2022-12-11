import {Box, Card, CardBody, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";

const ClubApplicationCard = (props: any) => {
    return (
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Club
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.props.title}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Registration Fee
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.props.registrationFee} SGD
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}

export default ClubApplicationCard;