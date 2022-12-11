import API_BASE_URL from "../../../public/const/api";

export const registerUser = async (email: string, password: string, studentId: number, fullName: string): Promise<null | string> => {
    try {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
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
        if (response.status !== 201)  {
            console.log(response);
            const responseData = await response.json() as Record<string, unknown>;
            return `failure`;
        }
    } catch (e) {
        return `Something went wrong`
    }
    return null;
}