import {buildGetFetch} from "../auth/signIn";

interface ClubResponse {
    userId: number,
    email: string,
    fullName: string
}

const getClub = async (clubId: number) => {
    const response = await buildGetFetch(`auth/login/${clubId}`, true)
    if (response.status === 200) {
        return await response.json() as ClubResponse;
    }

    return null;
}

export default getClub;