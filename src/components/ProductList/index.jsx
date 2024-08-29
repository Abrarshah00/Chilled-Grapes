import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../../styles/productlist.styles.scss";

const ProductList = () => {
    const [data, setData] = useState([])
    const fetchProductList = async () => {
        try {
            const response = await fetch("https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products");
            const data = await response.json();
            setData(data[0])
            console.log("data", data)
            // setData(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProductList()
    }, [])
    return (
        <div className="product-list-container">
            {data?.map((product, index) => (
                <ProductCard product={product} key={index} />
            ))}

        </div>
    );
};

export default ProductList;
