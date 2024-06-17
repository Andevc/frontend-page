import React from "react";
import CrearProduct from "./CrearProducto"
import axios from "../api/apiConfig";
import getCollectionUser from "../api/getCollectionUser"
import { useUser } from "../api/UserContext";
export default function Collection(){



    const { user } = useUser();

    
    return (

       <CrearProduct/> 
    )
}