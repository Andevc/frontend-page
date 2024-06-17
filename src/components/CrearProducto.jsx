import React, { useState } from 'react';
import "../styles/createProd.css"

function ProductRegistrationForm() {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [productPrice, setProductPrice] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const product_id = ""
    const handleNameChange = (e) => {
        setProductName(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setProductDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setProductImage(file);

        // Mostrar la vista previa de la imagen
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handlePriceChange = (e) => {
        setProductPrice(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('productDescription', productDescription);
        formData.append('productImage', productImage);
        formData.append('productPrice', productPrice);
        formData.append('product_id', product_id);
        try {
            const response = await fetch('http://127.0.0.1:5000/users/04b3e687ba/collection/create-product/', { // Reemplaza con el ID de usuario correcto
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Error al enviar el formulario');
            }

            const result = await response.json();
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
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Name:</label>
                    <input type="text" value={productName} onChange={handleNameChange} className="form-input" required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={productDescription} onChange={handleDescriptionChange} className="form-input" required />
                </div>
                <div>
                    <label>Product Image:</label>
                    <input type="file" onChange={handleImageChange} className="form-input" required accept="image/*" />
                    {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                </div>
                <div>
                    <label>Price:</label>
                    <input type="number" value={productPrice} onChange={handlePriceChange} className="form-input" required />
                </div>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
}

export default ProductRegistrationForm;
