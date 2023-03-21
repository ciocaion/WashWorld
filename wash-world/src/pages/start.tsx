import { useSelector } from 'react-redux';
import { selectSelectedProduct } from './features/products/productsSlice';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Countdown from 'react-countdown';
import Grid from '@mui/material/Grid';

export default function Start() {
  const selectedProduct = useSelector(selectSelectedProduct);
  
  fetch('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/1/start/1', {
    method: 'POST'
  })
    .then(response => response.json())
    .then(data => {
      const estimatedDuration = data.response.estimated_duration;
      console.log(`The estimated duration is ${estimatedDuration}.`);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  return (
    <Grid container spacing={1} columns={16} className="paperComponent">      
      <Grid xs={8}>
        {selectedProduct ? (
          <Paper className='paperExpand'>
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.description}</p>
            <p>{selectedProduct.price}KR</p>
          </Paper>
        ) : (
          <Paper className='paperExpand'>
            <p>No product selected</p>
          </Paper>
        )}
      </Grid>
      <Grid xs={4}>
          <Paper className='paperExpand'>
          <Countdown date={Date.now() + 10000} />
          </Paper>
      </Grid>
    </Grid>
  );
}
