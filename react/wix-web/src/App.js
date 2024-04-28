
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

import Wix from './Wix';
import Wix2 from './Wix2';
import Wix3 from './Wix3';
import Wix4 from './Wix4';
import Wix5 from './Wix5';
import Wix6 from './Wix6';
import Wix7 from './Wix7';


function App() {
 
  return (
  


    <BrowserRouter>
    <Navbar/>
    <Routes>
          <Route path="/" element={<Wix/>}/>
          <Route path="About" element={<Wix2/>}/>
          <Route path="Portfolio" element={<Wix3/>}/>
          <Route path="Books" element={<Wix4/>}/>
          <Route path="ClientAlbmuns" element={<Wix5/>}/>
          <Route path="Blogs" element={<Wix6/>}/>
          <Route path="Contact" element={<Wix7/>}/>
    </Routes>
    </BrowserRouter>

    
  );
}

export default App;
