import Head from 'next/head'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const inter = Inter({ subsets: ['latin'] })

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  program: string;
}

interface Props {
  lpn: string;
}

export default function Products({ lpn }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch(`https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/products/BV99123 `)
      .then(response => response.json())
      .then(data => setProducts(data.response.products))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Head>
        <title>WashWorld</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          <h1 className='titleStyle'>Select product</h1>
          <FormControl component="fieldset">
            <RadioGroup sx={{ color:'#666','&.Mui-checked': {color: 'white'},}}>
              {products.map((product: Product) => (
                <FormControlLabel key={product.id} value={product.program} control={<Radio sx={{ '&.Mui-checked': {color: '#06c167'},}} />} label={`${product.name} - ${product.price}KR`}  />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      </main>
    </>
  )
}
