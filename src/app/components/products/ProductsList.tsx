import React from 'react';
import { CartItem, ItemCode } from 'shopping-cart/types';
import { Product } from './Product';
import { ProductQuantity } from './ProductQuantity';

interface ProductsListProps {
  items: CartItem[];
  scan: (itemCode: ItemCode, quantity?: number) => void;
  remove: (itemCode: ItemCode) => void;
}

export const ProductsList: React.FunctionComponent<ProductsListProps> = ({ items, scan, remove }) => {
  return (
    <ul className="products-list">
      { items.map((cartItem) => (
        <li key={cartItem.id} className="product row">
          <div className="col-product">
            <Product shortName={cartItem.shortName} code={cartItem.id} />
          </div>
          <div className="col-quantity">
            <ProductQuantity
              quantity={cartItem.quantity}
              add={() => scan(cartItem.code)}
              remove={() => remove(cartItem.code)}
              edit={(quantity) => scan(cartItem.code, quantity)}
            />
          </div>
          <div className="col-price">
            <span className="product-price">{cartItem.price}</span>
            <span className="product-currency currency">€</span>
          </div>
          <div className="col-total">
            <span className="product-price">{cartItem.price * cartItem.quantity}</span>
            <span className="product-currency currency">€</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
