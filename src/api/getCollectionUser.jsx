
import axios from "./apiConfig"
import { useUser } from "./UserContext"

const getCollectionUser = async () => {
    const {user} = useUser()
    try{
        const response = await axios.get(`${user}/collection/`)
        return response.data
    }catch (error){
        console.log("Error: ",error)
        throw error;
    }
}

export default getCollectionUser;