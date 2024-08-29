import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../../styles/productlist.styles.scss";
import CarImage from "../../assets/Rectangle 151.svg";
import ConsoleImage from "../../assets/Rectangle 151 (1).svg";
import BananaImage from "../../assets/Rectangle 151 (2).svg";
import HeadphoneImage from "../../assets/Rectangle 151 (3).svg";
import ShoesImage from "../../assets/Rectangle 151 (4).svg";
import SugarImage from "../../assets/Rectangle 151 (5).svg";

const ProductList = () => {
    const [data, setData] = useState([])
    const productData = [
        { image: CarImage, title: "consectetur Elit", price: "£12.99" },
        { image: ConsoleImage, title: "consectetur Elit", price: "£12.99" },
        { image: BananaImage, title: "consectetur Elit", price: "£12.99" },
        { image: HeadphoneImage, title: "consectetur Elit", price: "£12.99" },
        { image: ShoesImage, title: "consectetur Elit", price: "£12.99" },
        { image: SugarImage, title: "consectetur Elit", price: "£12.99" },
    ];
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
