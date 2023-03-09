import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
const App = () => {
  return (
    <>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Home />
        </Box>
    </>
  )
}

export default App