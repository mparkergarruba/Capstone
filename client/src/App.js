import './App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from './NavBar';
import PatNavBar from './PatNavBar';
import DocNavBar from './DocNavBar';
import HomePage from './HomePage';
import Login from './Login';
import SignUp from './SignUp';
import PatPage from './PatPage';
import Logout from './Logout';
import DocIn from './DocIn';
import DocOut from './DocOut';
import DocPage from './DocPage';
import SideBarShell from './SideBarShell';
import { Image } from 'semantic-ui-react';
import Logo from './images/ShiningSea.jpg'
import Footer from './Footer';


function App() {
  const [pat, setPat] = useState(null) 
  const [doc, setDoc] = useState(null) 

  return (
    <div className='App'>
      <div className='Wrapper'>
      <div className='App-Header'>
        <div className='App-Ele'>
          <img className='Logo' src={Logo} size='small' />
        </div>
        <div className='App-Ele-Nav'>
          <div >
            <h1 className='Title-Top'>Shining Sea Acupuncture</h1>
            <p className='Title-Bottom'>Catherine Parker Dipl.OM, (NCCAOM), M.S., L.Ac.</p>
            
          </div>
          <div>
            {!pat ? !doc ? <NavBar /> : <DocNavBar /> : <PatNavBar />}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<Login setPat={setPat} pat={pat} />} />
        <Route path='/signup' element={<SignUp setPat={setPat} />} />
        <Route path='/patient/*' element={<PatPage pat={pat} setPat={setPat} />} />
        <Route path='/logout' element={<Logout setPat={setPat} />} />
        <Route path='/docin' element={<DocIn setDoc={setDoc} />} />
        <Route path='/docout' element={<DocOut setDoc={setDoc} />} />
        <Route path="/docpage/*" element={<DocPage doc={doc} />} />
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
