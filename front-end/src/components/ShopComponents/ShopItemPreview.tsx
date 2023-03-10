// react
import { useState } from "react";

// styles
import "../../styles/Shop_styles/ShopItemPreview.scss";
import styled from "styled-components";

// IF
import { ProductsProps } from "../../interfaces/IProducts";


const ProductDescription = styled.p`
    color: #161616;
    font-size: 1.5rem;
`

const ProductPrice = styled.p`
    color: #161616;
    font-size: 3rem;
    font-weight: bold;
`

const SizeButton = styled.button<{ isSelected: boolean }>`
    width: 40px;
    height: 40px;
    border: 1px solid #1d0623;
    border-radius: 0px;
    color: ${({ isSelected }) => isSelected ? "#e4e4e4" : "#1d0623"};
    background-color: ${({ isSelected }) => isSelected ? '#1d0623' : '#e4e4e4'};
    cursor: pointer;
    font-size: 1rem;
    box-shadow: 0px 0px 7px 0px #1d0623;

    &:hover {
        color: #e4e4e4;
        background-color: #1d0623;
        box-shadow: 0px 0px 17px 0px #1d0623;
        transition: all 100ms
    }
`

const OrderButton = styled.button`
    width: 300px;
    height: 40px;
    text-transform: uppercase;
    background-color: #1d0623;
    color: #e4e4e4;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    box-shadow: 1px 1px 10px 1px #161616;
`


export const ShopItemPreview = ({ product }: { product: ProductsProps | null }) => {

    const [size, setSize] = useState<string | null>(null);

    const handleSizeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSize((e.target as HTMLButtonElement).value);
    }

    
    const handleOrder = () => {

    };

    if (!product) {
        return null;
    }


    return (

        <div className="ShopItemPreviewContainer">
            <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} />
            <h5>{product.attributes.Title}</h5>
            <br />
            <ProductDescription>{product.attributes.Description}</ProductDescription>
            <div className="ProductSizeContainer">
                <SizeButton isSelected={size === 'S'} value={'S'} onClick={handleSizeSelect}>S</SizeButton>
                <SizeButton isSelected={size === 'M'} value={'M'} onClick={handleSizeSelect}>M</SizeButton>
                <SizeButton isSelected={size === 'L'} value={'L'} onClick={handleSizeSelect}>L</SizeButton>
                <SizeButton isSelected={size === 'XL'} value={'XL'} onClick={handleSizeSelect}>XL</SizeButton>
            </div>
            <ProductPrice>{product.attributes.Price}</ProductPrice>
            <OrderButton onClick={handleOrder}>?????????????? ????????</OrderButton>
        </div>
    )
}
