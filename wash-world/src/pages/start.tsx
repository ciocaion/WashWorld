import { useSelector } from 'react-redux';
import { selectSelectedProduct } from './features/products/productsSlice';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

export default function Start() {
  const selectedProduct = useSelector(selectSelectedProduct);
  
  return (
    <Grid container spacing={2} columns={16}>      
      <Grid xs={8}>
        {selectedProduct ? (
          <Paper>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}KR</p>
          </Paper>
        ) : (
          <Paper>
            <p>No product selected</p>
          </Paper>
        )}
      </Grid>
      <Grid xs={8}>
          <Paper>
            <p>Timer</p>
          </Paper>
      </Grid>
    </Grid>
  );
}
