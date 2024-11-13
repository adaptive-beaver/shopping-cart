import React from "react";
import { images } from "../../../img/items";
import "./Product.scss";

interface ProductProps {
  name: string;
  code: string;
  onSelect: () => void;
}

const getProductImageKey = (productName: string): string => {
  const lastWord = productName.split(" ").pop();
  return lastWord ? lastWord.replace("-", "").toLowerCase() : "fallback";
};

const getProductImage = (productName: string): string => {
  const imageKey = getProductImageKey(productName);
  return images[imageKey] || images["fallback"];
};

export const Product: React.FC<ProductProps> = ({ name, code, onSelect }) => (
  <figure className="product-image">
    <ProductImage name={name} onSelect={onSelect} />
    <ProductDetails name={name} code={code} onSelect={onSelect} />
  </figure>
);

const ProductImage: React.FC<{ name: string; onSelect: () => void }> = ({
  name,
  onSelect,
}) => (
  <a onClick={onSelect}>
    <img role="img" src={getProductImage(name)} alt={name} />
  </a>
);

const ProductDetails: React.FC<{
  name: string;
  code: string;
  onSelect: () => void;
}> = ({ name, code, onSelect }) => (
  <div className="product-description">
    <h3 className="product-name" aria-label="product-name">
      <a onClick={onSelect}>{name}</a>
    </h3>
    <p aria-label="product-code" className="product-code">
      <span>Product code</span> {code}
    </p>
  </div>
);

export default Product;
