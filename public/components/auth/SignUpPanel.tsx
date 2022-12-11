import {Button, FormControl, FormLabel, Input, TabPanel} from "@chakra-ui/react";
import SignUpConfirmationModal from "./modal/SignUpConfirmationModal";

export default function SignUpPanel() {
    return (
        <TabPanel>

            <FormControl isRequired>
                <FormLabel>Student Id</FormLabel>
                <Input placeholder={'1906293114'} variant={'filled'} mb={'3'} type={'number'}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder={'John Doe'} variant={'filled'} mb={'3'}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input placeholder={'example@gmail.com'} variant={'filled'} mb={'3'} type={'email'}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input placeholder={'********'} variant={'filled'} mb={'6'} type={'password'}/>
            </FormControl>

            <SignUpConfirmationModal/>
        </TabPanel>
    )
}