import API_BASE_URL from "../../../public/const/api";

interface LoginResponse {
    access_token: string,
}

interface AccessTokenFormat {
    userId: number,
    email: string,
    fullName: string
}

export const getUserToken = () => localStorage.getItem("accessToken");
export const getUserId = () => localStorage.getItem("userId");
export const getEmail = () => localStorage.getItem("email");
export const getFullName = () => localStorage.getItem("fullName");

export const buildPostFetch = async (url: string, data: Record<string, any>, authorize = false) => (
    fetch(`${API_BASE_URL}${url}`, {
        "mode": "cors",
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
    fetch(`${API_BASE_URL}${url}`, {
        "mode": "cors",
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
    console.log(email, password)
    console.log(`${process.env.NEXT_PUBLIC_API_URL}auth/login/`)
    const response = await buildPostFetch("auth/login/", {email, password})
    if (response.status === 201) {
        console.log('berhasil login')
        const responseData = await response.json() as LoginResponse;

        await persistUserInfo(responseData);
        window.location.href = "/";
    }
}

const persistUserInfo = async (loginResponse: LoginResponse) => {
    localStorage.setItem("accessToken", loginResponse.access_token);

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