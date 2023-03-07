import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home';
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route exact path="/" component={<Home/>}/>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App