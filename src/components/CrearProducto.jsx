import React, { useState } from 'react';
import "../styles/createProd.css";
import createNewProduct from '../api/createProduct';
import { useUser } from '../api/UserContext';

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
            <h2 className="form-title">Product Registration Form</h2>
            <form onSubmit={handleSubmit} >
                <div className='file-upload-form'>
                    <label for="file" class="file-upload-label">
                        <div class="file-upload-design">
                        <svg viewBox="0 0 640 512" height="1em">
                            <path
                            d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
                            ></path>
                        </svg>
                        <p>Drag and Drop</p>
                        <p>or</p>
                        <span class="browse-button">Browse file</span>
                        </div>
                        
                    </label>
                    <input
                        type="file"
                        onChange={handleImageChange}
                        className="form-input"
                        required
                        accept="image/*"
                    />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                </div>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={handleNameChange}
                        className="form-input"
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={productDescription}
                        onChange={handleDescriptionChange}
                        className="form-input"
                        required
                    />
                </div>
                
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={productPrice}
                        onChange={handlePriceChange}
                        className="form-input"
                        required
                    />
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
}

export default ProductRegistrationForm;
