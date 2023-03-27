import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { selectSelectedProduct } from './features/products/productsSlice';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Countdown from 'react-countdown';
import Grid from '@mui/material/Grid';
import router from 'next/router';
import Lottie from 'react-lottie';
import animationData from '../assets/wash-car.json';


export default function Start() {
  const selectedProduct = useSelector(selectSelectedProduct);
  const [estimatedDurationMs, setEstimatedDurationMs] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://b46f027d-3a5f-4de6-9075-5e861759e531.mock.pstmn.io/1/start/1', {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        const estimatedDuration = data.response.estimated_duration;
        const [minutes, seconds] = estimatedDuration.split(':');
        const durationMs = (parseInt(minutes) * 60 + parseInt(seconds)) * 1000;
        setEstimatedDurationMs(durationMs);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  

  return (
    <Box sx={{ flexGrow: 1 }}>
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
      <Lottie options={animationOptions} height={50} width={200} />
            {estimatedDurationMs && (
              <Countdown className='countdown'
                date={Date.now() + estimatedDurationMs}
                onComplete={() => router.push('/')}
              />
            )}
            <Grid container justifyContent="center">
            <Link href="/">
              <button className='nextPage'  onClick={() => router.push('/')}>End</button>
            </Link>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
