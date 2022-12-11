import {Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text} from "@chakra-ui/react";

export default function SignUpConfirmationCard() {
    return (
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Student Id
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            1906293114
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Full Name
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            John Doe
                        </Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                            Email Address
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            example@gmail.com
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    )
}