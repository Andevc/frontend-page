
import api from "./apiConfig"


const getCollectionUser = async (user) => {

    try{

        const response = await api.get(`/api/users/collection/${user}`)
        return response.data
    }catch (error){
        console.log("Error: ",error)
        throw error;
    }
}

export default getCollectionUser;