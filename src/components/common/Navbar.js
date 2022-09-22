import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



//images
import logoB from "../../images/logoB.png"


//router 
import { Link } from 'react-router-dom';



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <React.Fragment>
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: "#001039", height: "100%", color: "#ffffff90" }} >
        <Typography variant="h6" sx={{ my: 2 }}>
          <Link to="/">
            <div className="flex items-center justify-center">
              <img src={logoB} className="mr-3 h-8" alt="Bhavipath Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bhavipath</span>
            </div>
          </Link>
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
              <Link key={item+'1'} to={item=="Home"?"/":item}>
            <ListItem  disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
              </Link>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex' }}>
        <AppBar component="nav" sx={{ bgcolor: "#ffffff10" }} className="backdrop-blur-lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: { xs: 0, sm: 1 }, justifyContent: 'end', display: { xs: 'block', sm: 'block' }, marginLeft: { xs: 'auto' } }}
            >
              <Link to="/">
              <div href="/" className="flex items-center">
                <img src={logoB} className="mr-3 h-8" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Bhavipath</span>
              </div>
              </Link>
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Link  key={item+'2'} to={item=="Home"?"/":item}>
                <Button sx={{ color: '#fff' }}>
                  {item}
                </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

        </Box>
      </Box>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
