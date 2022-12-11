import {Button, FormControl, FormLabel, Input, TabPanel} from "@chakra-ui/react";

export default function SignInPanel() {
    return (
        <TabPanel>
            <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input placeholder={'example@gmail.com'} variant={'filled'} mb={'3'} type={'email'}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder={'********'} variant={'filled'} mb={'6'} type={'password'}/>
            </FormControl>

            <Button colorScheme={'teal'} w={"full"} type={'submit'}>Sign in</Button>
        </TabPanel>
    )
}