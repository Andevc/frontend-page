import React, { useState } from 'react';
import "../styles/createProd.css";
import createNewProduct from '../api/createProduct';
import { useUser } from '../api/UserContext';
import { MdCloudUpload } from "react-icons/md";
function ProductRegistrationForm() {
    const { user } = useUser();
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productPrice, setProductPrice] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const product_id = ""
    const handleNameChange = (e) => setProductName(e.target.value);
    const handleDescriptionChange = (e) => setProductDescription(e.target.value);
    const handlePriceChange = (e) => setProductPrice(e.target.value);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductImage(file);

        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        if (file) reader.readAsDataURL(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productDescription', productDescription);
        formData.append('productImage', productImage);
        formData.append('productPrice', productPrice);
        formData.append('product_id', product_id);

        console.log(formData)
        try {
            const result = await createNewProduct(user, formData);
            alert('Producto registrado con éxito: ' + JSON.stringify(result));

            // Limpiar el estado después de la subida
            setProductName('');
            setProductDescription('');
            setProductImage(null);
            setProductPrice('');
            setImagePreview(null);
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un problema al enviar el formulario');
        }
    };

    return (
        <div className="form-container">
            <h2 className="text-2xl uppercase text-center mb-2">Crear Producto</h2>
            <form onSubmit={handleSubmit} className='formProd'>
                <div className='container'>
                    <div class="w-full flex flex-row-reverse ">

                        <label for="file" class="footer">
                            <div>
                                
                                <MdCloudUpload size={50} className='text-white' /> 
                            </div>
                            <p className='ml-3'>Subir Imagen</p>
                        </label>
                        <input
                            name='file'
                            id='file'
                            type="file"
                            onChange={handleImageChange}
                            className="p-4-file"
                            required
                            accept="image/*"
                        />

                    </div>
                    {imagePreview && <img src={imagePreview} alt="Preview" className="h-4/5 object-contain object-top shadow-2xl rounded-lg" />}
                </div>
                <div className="right-panel">

                    <div>
                        <label>Product Name:</label>
                        <input
                            type="text"
                            value={productName}
                            onChange={handleNameChange}
                            className="p-4"
                            required
                        />
                    </div>
                    <div>
                        <label>Description:</label>
                        <textarea
                            value={productDescription}
                            onChange={handleDescriptionChange}
                            className="p-4"
                            required
                        />
                    </div>

                    <div>
                        <label>Price:</label>
                        <input
                            type="number"
                            value={productPrice}
                            onChange={handlePriceChange}
                            className="p-4"
                            required
                        />
                    </div>
                    <button type="submit" className="bg-green-500 w-1/2 rounded-xl py-2 px-8 uppercase hover:bg-green-800">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default ProductRegistrationForm;
