import React, {Component} from 'react';
import "./App.css"
import {Routes, Route , Link, useParams} from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutProject from "./AboutProject/AboutProject";
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import { styled, useTheme,alpha } from '@mui/material/styles';
import {InputBase} from "@mui/material";
import ButtonGroup from '@mui/material/ButtonGroup';
import CreatePage from './CreatePage/CreatePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import EditCar from './editCar/editCar';
import CarList from './carList/carList';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import CarInfo from './CarInfo/CarInfo';
import Button from '@mui/material/Button';
import LogInPage from './Users/LogInPage/LoginPage';
import CreateUser from './Users/CreateUserPage';
import PasswordRecoveryPage from './Users/PassWord/PasswordRecoveryPage';

const themeOne = createTheme({
    palette: {
        primary: {
          light: '#1B263B',
          main: '#1B263B',
          dark: '#1B263B',
          contrastText: '#fff',
        },
        
      },
  });

const buttonsNav = [
   <Link to="/" ><button key="home" className='a2'>Home</button></Link>,
    <Link to="/car-list"><button key="car-list" className='a2'>CarList</button></Link>,
      <Link to="/about" ><button key="about" className='a2'>About</button></Link>,
      <Link to="/create-car" ><button key="create-car" className='a2'>CretePage</button></Link>
];



const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: '100%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',

    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function App() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={themeOne}>
             <body>
              <Box sx={{  }} >
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h2" noWrap component="div">
                       Detroit Car Store
                    </Typography>

                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    
                    <Link to="/log-in" style={{marginLeft:'60%'}} ><Button variant="contained" to="/log-in" style={{ backgroundColor:'#415A77'}} >My Account</Button></Link>
                </Toolbar>
            </AppBar>

            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/about" element={<AboutProject/>} />
                <Route path="/create-car" element={<CreatePage />} /> 
                <Route path="/update-car/:id" element={<EditCar/>} />
                <Route path = "/car-list"  element={<CarList/>}/>
                <Route path = "/car-info/:id" element={<CarInfo/>}/>
                <Route path = "/log-in" element={<LogInPage/>}/>
                <Route path = "/sign-up" element={<CreateUser/>}/>
                <Route path = "/pass-rec" element={<PasswordRecoveryPage/>}/>
                
                
            </Routes>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor :"#E0E1DD"
                       
                    },
                    
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>

                        <ListItem >
                            <ButtonGroup size='large'
                                         fullWidth= 'true'
                                orientation="vertical"
                                aria-label="vertical outlined button group"
                              
                            >
                                {buttonsNav}
                            </ButtonGroup>

                        </ListItem>

                </List>
                <Divider />

            </Drawer>

        </Box>

        <footer className="site-footer " style={{ zIndex: 3}}>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by 
         <a href="#">Detroit</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12" >
             
           <GitHubIcon fontSize="large"  style={{marginRight: "2%" }} ></GitHubIcon>
           <InstagramIcon fontSize='large'  style={{marginRight: "2%" }} ></InstagramIcon>
           <YouTubeIcon  fontSize='large' style={{marginRight: "2%" }}  ></YouTubeIcon>
           <TelegramIcon fontSize='large'></TelegramIcon>
             
          </div>
        </div>
      </div>
</footer>

       
      </body>
      </ThemeProvider>
    );
}