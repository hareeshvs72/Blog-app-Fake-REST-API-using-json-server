import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Create from './component/Create';


function Header() {
  return (
    <>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <Link to={'/'} className='text-light text-decoration-none'>  Blog</Link>
            </Typography>
         
          <Link to={'/create'}>  <Button color="inherit" className='text-light'>Create </Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header