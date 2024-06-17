
import api from "./apiConfig"
const getAllProducts = async () => {
    try{
        const response = await api.get('/api/products')
        return response.data
    } catch (error) {
        console.log("Error: ", error)
        throw error;
    }
};

export default getAllProducts;