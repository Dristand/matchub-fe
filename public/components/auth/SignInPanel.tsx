import {Button, FormControl, FormLabel, Input, TabPanel} from "@chakra-ui/react";
import {useState} from "react";
import {signIn} from "../../../pages/api/auth/signIn";

export default function SignInPanel() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            await signIn(loginEmail,loginPassword)
        } catch (err) {
            alert("Wrong credential!")
        }
    }

    return (
        <TabPanel>
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder={'example@gmail.com'} variant={'filled'} mb={'3'} type={'email'}
                           value={loginEmail} onChange={e => setLoginEmail(e.target.value)}/>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input placeholder={'********'} variant={'filled'} mb={'6'} type={'password'}
                           value={loginPassword} onChange={e => setLoginPassword(e.target.value)}/>
                </FormControl>

                <Button colorScheme={'teal'} w={"full"} type={'submit'}>Sign in</Button>
            </form>
        </TabPanel>
    )
}