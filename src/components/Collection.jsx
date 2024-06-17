import React from "react";
import CrearProduct from "./CrearProducto"

import getCollectionUser from "../api/getCollectionUser"
import { useUser } from "../api/UserContext";
import { useState, useEffect } from "react";
import CardProduct from "./CardProduct";
export default function Collection() {

    const {user} = useUser()
    // import "../styles/createProd.css"
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const productsData = await getCollectionUser(user);
                
                setProducts(productsData['products'])

            } catch (error) {
                setError(error.message || "Error al obtener los productos");
                console.log('Error al obtener productos: ', error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);


    return (
        <section className="flex m-auto gap-8 flex-wrap justify-between mim-w-screen-xl ">
            {
                products.map((product) => (
                    <CardProduct key={product.product_id}
                        productName={product.product_name}
                        imageUrl={product.image_url}
                        price={product.price}
                        description={product.description}

                    />
                ))
            }
        </section>
    )
}