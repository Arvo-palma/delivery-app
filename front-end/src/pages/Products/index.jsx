// vitals
import React, { useEffect, useState } from 'react';

// components
import NavBar from '../../components/NavBar';
import ProductCard from '../../components/ProductCard';
import CartCheckoutButton from '../../components/CartTotalPrice/CartTotalPrice';

function Products() {
  const [products, setProducts] = useState([]);

  const getProdutcs = async () => {
    const responseFetch = await fetch('http://localhost:3001/customer/products');
    const data = await responseFetch.json();
    return { responseFetch, data };
  };

  useEffect(() => {
    const getItens = async () => {
      const { data } = await getProdutcs();
      setProducts(data);
    };
    getItens();
  }, []);

  return (
    <section>
      <nav>
        <NavBar page="produtos" />
      </nav>
      <div className="card-container">
        {products.map((product) => (
          <ProductCard
            id={ product.id }
            key={ product.id }
            name={ product.name }
            urlImage={ product.urlImage }
            price={ product.price }
          />
        ))}
      </div>
      <CartCheckoutButton />
    </section>
  );
}

export default Products;
