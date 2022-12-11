import API_BASE_URL from "../../../public/const/api";

export const signUp = async (email: string, password: string, studentId: number, fullName: string): Promise<null | string> => {
    try {
        const response = await fetch(`${API_BASE_URL}auth/register`, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                email,
                password,
                studentId,
                fullName
            })
        })
        console.log(response)
        if (response.status == 201) {
            const responseData = await response.json() as Record<string, unknown>;
            console.log(responseData)
            alert('User created successfully')

            window.location.href = "";
        }
        if (response.status !== 201)  {
            const responseData = await response.json() as Record<string, unknown>;
            console.log(responseData)
            alert(responseData.message)
        }

    } catch (e) {
        return `Something went wrong`
    }
    return null;
}