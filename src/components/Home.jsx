import React from "react";
import getAllProducts from "../api/getAllProducts";
import { useState } from "react";
import { useEffect } from "react";
import CardProduct from "./CardProduct";
import Loader from "./Loading";
export default function Home(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect( () => {
        const fetchProducts = async () =>{
            try{
                const productsData = await getAllProducts();
                setProducts(productsData)
        
            }catch (error){
                setError(error.message || "Error al obtener los productos");
                console.log('Error al obtener productos: ', error);
            }
            finally{
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) return (<Loader />);

    return (
        <section className="flex m-auto gap-8 flex-wrap justify-between mim-w-screen-xl border border-red-500">
            {
                products.map( (product) => (
                    <CardProduct key = {product.product_id}
                        productName ={product.product_name}
                        imageUrl = {product.image_url}
                        price = {product.price}
                        description = {product.description}

                     />
                ))
            }
        </section>
    )


}
