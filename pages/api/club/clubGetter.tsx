import {buildGetFetch} from "../auth/signIn";

interface ClubResponse {
    userId: number,
    email: string,
    fullName: string
}

const getClub = async (clubId: number) => {
    const response = await buildGetFetch(`club/detail/${clubId}`, true)
    if (response.status === 200) {
        return await response.json() as ClubResponse;
    } else if (response.status === 400) {
        alert('Club does not exists');
        window.location.href = "/404";
    }

    return null;
}

export default getClub;