/*import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {auth} from "../firebase/setup"
import "./Navbar.css"
import out from "../images/out.png"
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props) {
  
  const navigate = useNavigate()

  const logout = async()=>{
    try{
      await signOut(auth)
      navigate("/")
    }catch(err){
      console.error(err)
    }
  }

  


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar elevation={0} sx={{backgroundColor:"#E9E9E9",height:"70px"}}  position="static">
        <Toolbar variant="dense">
            <img alt='image'  className='profile-img' src={props.recieverProImg ?? auth.currentUser?.photoURL}/>
            <h3 className='reciever-name'>{props.recieverUsername ?? ""}</h3>
            <img alt='image' style={{marginLeft:"10px"}} onClick={logout} className='logout-icon' src={out}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
*/
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { auth } from "../firebase/setup";
import "./Navbar.css";
import out from "../images/out.png";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ recieverProImg, recieverUsername }) {
  
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.error(err);
      // Optional: Add user feedback here
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
  elevation={2} 
  sx={{ 
    background: "linear-gradient(to right, #507D2A, #87ebcf)",  /* Adds a gradient background */
    height: "70px", 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    padding: "0 20px", 
    borderBottom: "2px solid #ccc",  /* Subtle border to enhance design */
    boxShadow: "1 5px 12px rgba(0, 0, 0, 0.1)", /* Soft shadow for depth */
    position: "static" 
  }}
>
  <Toolbar variant="dense" sx={{ minHeight: "70px"}}>
    <img alt='User profile' className='profile-img' src={recieverProImg ?? auth.currentUser?.photoURL}/>
    <h3 className='reciever-name'>{recieverUsername ?? ""}</h3>
    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
      <span className='logout-text'>Logout</span>
      <img alt='Logout icon' onClick={logout} className='logout-icon' src={out} />
    </Box>
  </Toolbar>
</AppBar>

    </Box>
  );
}