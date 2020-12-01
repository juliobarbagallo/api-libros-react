import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav() {
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);


  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
          <IconButton
                edge="start"
                className={classes.menuButton}
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
            <MenuIcon />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
            >
                <MenuItem containerElement={<Link to="/" />} onClick={handleClose}>Home</MenuItem>
                <MenuItem containerElement={<Link to="/libros" />} onClick={handleClose}>Libros</MenuItem>
                <MenuItem containerElement={<Link to="/contact" />} onClick={handleClose}>Contact</MenuItem>
                <Link to="/" exact style={{ margin: 10 }} onClick={handleClose}>
                
                    <Typography className={classes.root}>
                        Home
                    </Typography>
                
                </Link>
            </Menu>  

          <Typography variant="h6" className={classes.title}>
            E-Libreria
          </Typography>
          
            <Link to="/" exact style={{ margin: 10 }}>
                
                    <Typography className={classes.root}>
                        Home
                    </Typography>
                
            </Link>
            <Link to="/autores" style={{ margin: 10 }}>
                <Typography className={classes.root}>
                    Autores
                </Typography>
            </Link>
            <Link to="/contact" style={{ margin: 10 }}>
                <Typography className={classes.root}>
                    Contact
                </Typography>
            </Link>
            
        </Toolbar>
      </AppBar>
    </div>
  );
}
