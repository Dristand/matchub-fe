import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";

export default function SignUpConfirmationCard(props: any) {
    return (
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Student Id
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.props.studentId}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Full Name
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.props.fullName}
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Email Address
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {props.props.email}
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}