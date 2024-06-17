import axios from "./apiConfig";

const createNewProduct = async (userId, formData) => {
    try {
        const response = await axios.post(`/api/users/collection/${userId}/create-product`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.log(`Error: ${error.response ? error.response.data : error.message}`);
        throw error;
    }
}

export default createNewProduct;
