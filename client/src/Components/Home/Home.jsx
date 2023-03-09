import React from 'react'
import NavBar from "./NarBar";
import Banner from './Banner';
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  )
}

export default Home