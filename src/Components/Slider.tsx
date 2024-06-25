// // import React from "react";
// import Slider from "react-slick";
// import './Slider.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import AuthorImg1 from '../assets/images/authorimg1.jpg';
// import AuthorImg2 from '../assets/images/authorimg2.jpg';
// import AuthorImg3 from '../assets/images/authorimg3.jpg';
// import AuthorImg4 from '../assets/images/authorimg4.jpg';
// import AuthorImg5 from '../assets/images/authorimg5.jpg';
// import AuthorImg6 from '../assets/images/authorimg6.jpg';
// import AuthorImg7 from '../assets/images/authorimg7.jpg';
// import AuthorImg8 from '../assets/images/authorimg8.jpg';


// function Sliderdiv() {

//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 400,
//     slidesToShow: 5,
//     slidesToScroll: 5,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 1000,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 700,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           initialSlide: 3
//         }
//       },
//       {
//         breakpoint: 550,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings} >
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg1} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>A G Riddle</h3>
//             <p>Published Books 2</p>
//           </div>
//         </div>
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg2} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>Andre Aciman</h3>
//             <p>Published Books 1</p>
//           </div>
//         </div>
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg3} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>Anna Banks</h3>
//             <p>Published Books 4</p>
//           </div>
//         </div>
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg4} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>Anna Burns</h3>
//             <p>Published Books 2</p>
//           </div>
//         </div>
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg5} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>Ashlee Vance</h3>
//             <p>Published Books 1</p>
//           </div>
//         </div>
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg6} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>Barbara O'Neal</h3>
//             <p>Published Books 5</p>
//           </div>
//         </div>
//         <div className="authors-card">
//         <div className="author-Image">
//           <div className="author-img">
//             <img src={AuthorImg7} />
//           </div>
//         </div>
//           <div className="author-content">
//             <h3>Blake Crouch</h3>
//             <p>Published Books 3</p>
//           </div>
//         </div>
//         <div className="authors-card">
//           <div className="author-Image">
//             <div className="author-img">
//               <img src={AuthorImg8} />
//             </div>
//           </div>
//           <div className="author-content">
//             <h3>Boo Walker</h3>
//             <p>Published Books 2</p>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// }
// export default Sliderdiv



import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
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
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}
