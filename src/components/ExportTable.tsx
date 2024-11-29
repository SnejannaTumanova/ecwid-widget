import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const ExportTable: React.FC<{ products: any[] }> = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

  const handleCheckboxChange = (product: any) => {
    setSelectedProducts((prevState) => {
      if (prevState.includes(product)) {
        return prevState.filter((item) => item !== product);
      } else {
        return [...prevState, product];
      }
    });
  };

  const headers = [
    { label: 'Product ID', key: 'id' },
    { label: 'Name', key: 'name' },
    { label: 'Price', key: 'price' },
    // Добавлю другие нужные поля, когда пойму, какие данные приходят
  ];

  return (
    <div>
      <h3>Export Products</h3>
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product)}
                  onChange={() => handleCheckboxChange(product)}
                />
              </td>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <CSVLink
        data={selectedProducts}
        headers={headers}
        filename={'selected-products.csv'}
        className="export-button"
      >
        <button disabled={selectedProducts.length === 0}>
          Export Selected
        </button>
      </CSVLink>
    </div>
  );
};

export default ExportTable;
