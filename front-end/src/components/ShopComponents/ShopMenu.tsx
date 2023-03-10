// styles
import "../../styles/Shop_styles/Shop.scss";

// components
import { ShopItems } from "./ShopItems";
import { ShopItemPreview } from "./ShopItemPreview";

// IF
import { Product, ProductsProps } from "../../interfaces/IProducts";

// react
import { useEffect, useState } from "react";

// axios
import axios from "axios";


export const ShopMenu = () => {

    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [selectedImage, setSelectedImage] = useState<ProductsProps | null>(data && data[0]);
    const [selectedItemId, setSelectedItemId] = useState<string | null>(data && data[3].id);

    useEffect(() => {

        setLoading(true);

        axios.get("http://localhost:1337/api/products?populate=*")
            .then((response) => {
                setError(null)
                setData(response.data.data);                                                // save the respone into data const
                handleImageClick(response.data.data[0])                                     // set the first object in the array
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                console.log(error);
                setLoading(false);
            });
    }, [])




    const handleImageClick = (data: ProductsProps) => {

        setSelectedImage(data);
        setSelectedItemId(data.id);
    };


    if (loading) return <h2>Loading..</h2>
    if (error) return <h2>Error.. <br /> {error}</h2>

    return (
        <>
            <div className="ShopContainer">


                <ShopItems products={data} onImageClick={handleImageClick} arrow={selectedItemId} />
                <ShopItemPreview product={selectedImage} />
            </div>
        </>
    )
}