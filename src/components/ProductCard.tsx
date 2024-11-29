import React from 'react';
import { ProductCardProps } from '../types/product';
import styles from './ProductCard.module.css';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img
        src={product.imageUrl}
        alt={product.name}
        className={styles.productCardImage}
      />
      <h3 className={styles.productCardTitle}>{product.name}</h3>
      <p className={styles.productCardPrice}>${product.price.toFixed(2)}</p>
      <button className={styles.productCardButton}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
