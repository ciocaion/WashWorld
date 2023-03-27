import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from './features/products/productsSlice';
import styles from '@/styles/Home.module.css';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  program: string;
}


export default function Products(product) {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const [isProductSelected, setIsProductSelected] = useState(false);

  useEffect(() => {
    fetch(`https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/BV99123`)
      .then((response) => response.json())
      .then((data) => setProducts(data.response.products))
      .catch((error) => console.log(error));
  }, []);

  const handleProductSelect = (product: Product) => {
    dispatch(setSelectedProduct(product));
    setIsProductSelected(true);
  };

  return (
    <>
      <Head>
        <title>WashWorld</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className="titleStyle">Select product</h1>
          <FormControl component="fieldset">
            <RadioGroup sx={{ color: '#666', '&.Mui-checked': { color: 'white' } }}>
              {products.map((product: Product) => (
                <FormControlLabel
                  key={product.id}
                  value={product.program}
                  control={<Radio sx={{ '&.Mui-checked': { color: '#06c167' } }} />}
                  label={`${product.name} - ${product.price}KR`}
                  onClick={() => handleProductSelect(product)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </main>
      <div className="alert-next-grid">
        <div className="navigation">
          <button
            className="nextPage"
            onClick={() => isProductSelected && router.push('/start')}
            disabled={!isProductSelected}
            title={!isProductSelected ? 'No product selected' : ''}
          >
            {!isProductSelected && (
          <div className="overlay">
          </div>
        )}
            Next
          </button>
        </div>
      </div>
    </>
  );
}
