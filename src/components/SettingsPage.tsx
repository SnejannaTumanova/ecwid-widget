import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/ecwidApi';
import ExportTable from './ExportTable';

const SettingsPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProducts();
      setProducts(productData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Settings</h2>
      <ExportTable products={products} />
    </div>
  );
};

export default SettingsPage;
