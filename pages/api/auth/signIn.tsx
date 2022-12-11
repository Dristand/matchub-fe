import API_BASE_URL from "../../../public/const/api";
const alternativeHardCodeURL = 'http://localhost:3000/'

interface LoginResponse {
    access: string,
}

interface AccessTokenFormat {
    userId: number,
    email: string,
    fullName: string
}

export const getUserToken = () => localStorage.getItem("accessToken");

export const buildPostFetch = async (url: string, data: Record<string, any>, authorize = false) => (
    fetch(`${alternativeHardCodeURL}${url}`, {
        "method": "POST",
        "headers": authorize ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getUserToken() || ""}`
        } : {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data),
    })
)

export const buildGetFetch = async (url: string, authorize = false) => (
    fetch(`${alternativeHardCodeURL}${url}`, {
        "method": "GET",
        "headers": authorize ? {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getUserToken() || ""}`
        } : {
            "Content-Type": "application/json"
        },
    })
)

export const signIn = async (email: string, password: string) => {
    const response = await buildPostFetch("auth/login/", {email, password})
    if (response.status === 200) {
        const responseData = await response.json() as LoginResponse;

        await persistUserInfo(responseData);
        window.location.href = "/";
    }
}

const persistUserInfo = async (loginResponse: LoginResponse) => {
    localStorage.setItem("accessToken", loginResponse.access);

    const response = await buildGetFetch("auth/jwt", true);
    if (response.status == 200) {
        const responseData = await response.json() as AccessTokenFormat;

        localStorage.setItem("userId", String(responseData.userId))
        localStorage.setItem("email", responseData.email)
        localStorage.setItem("fullName", responseData.fullName)
    }
}

export const SignOut = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("accessTokenExpiry")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("userId")
}