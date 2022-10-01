import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import Starred from '../src/pages/Starred'
import PageNotFound from './components/PageNotFound';
import Show from './pages/Show';
import { ThemeProvider } from 'styled-components';
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  return (
    
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/starred' element={<Starred/>}/> 
        <Route path='/show/:id' element={<Show/>}/> 
        <Route path="*" element={<PageNotFound />} />
        <Route >This is 404 page</Route>
      </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
