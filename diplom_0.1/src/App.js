import React, { Component, useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, Link, useParams } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import AboutProject from "./AboutProject/AboutProject";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { styled, useTheme, alpha } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import CreatePage from "./CreatePage/CreatePage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EditCar from "./editCar/editCar";
import CarList from "./carList/carList";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TelegramIcon from "@mui/icons-material/Telegram";
import CarInfo from "./CarInfo/CarInfo";
import Button from "@mui/material/Button";
import LogInUser from "./Users/LogInPage/LogInUser";
import CreateUser from "./Users/SignUpPage/CreateUserPage";
import PasswordRecoveryPage from "./Users/PassWord/PasswordRecoveryPage";
import UserCarList from "./UserCarList/UserCarList";
import AdminPanelPage from "./Users/AdminPanel/AdminPanelPage";
import axios from "axios";
import EditUser from "./Users/EditUser/EditUser";

const themeOne = createTheme({
  palette: {
    primary: {
      light: "#1B263B",
      main: "#1B263B",
      dark: "#1B263B",
      contrastText: "#fff",
    },
  },
});

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function App() {
  let navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const loggedInEmail = localStorage.getItem("loggedInEmail");
    if (loggedInEmail) {
      setEmail(loggedInEmail);
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/cars/users")
      .then((response) => {
        setUsers(response.data);
        const adminUser = response.data.find(
          (user) => user.email === email && user.role === "Admin"
        );
        const regularUser = response.data.find(
          (user) => user.email === email && user.role === "User"
        );
        if (adminUser) {
          setIsAdmin(true);
        }
        if (regularUser) {
          setIsUser(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [email]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onSubmit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/cars/log-out?email=${email}`
      );
      const user = response.data;
      if (user) {
        if (user.isAuthenticated) {
          axios
            .put(`http://localhost:4000/cars/log-out?email=${email}`, {
              isAuthenticated: false,
            })
            .then(() => {
              alert("Logout successful");
              localStorage.removeItem("loggedInEmail");
              navigate("/");
              window.location.reload();
            })
            .catch((error) => {
              console.log(error);
              alert("Failed to log out");
            });
        } else {
          alert("User is already logged out");
        }
      } else {
        alert("Email not registered");
        localStorage.removeItem("loggedInEmail");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Failed to log out");
    }
  };

  return (
    <ThemeProvider theme={themeOne}>
      <body>
        <Box sx={{}}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h2" noWrap component="div">
                Detroit Car Store
              </Typography>

              {email ? (
                <p style={{ marginLeft: "5%" }}>Logged in as: {email}</p>
              ) : (
                <p style={{ marginLeft: "5%" }}>You are not logged in</p>
              )}

              {email && (
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#415A77", marginLeft: "50%" }}
                  onClick={onSubmit}
                >
                  Logout
                </Button>
              )}
              {!email && (
                <Link to="/log-in" style={{ marginLeft: "50%" }}>
                  <Button
                    variant="contained"
                    to="/log-in"
                    style={{ backgroundColor: "#415A77" }}
                  >
                    Sign-in/ Sign-Up
                  </Button>
                </Link>
              )}
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutProject />} />
            {isUser && <Route path="/create-car" element={<CreatePage />} />}
            {isUser || isAdmin ? (
              <Route path="/update-car/:id" element={<EditCar />} />
            ) : null}
            {isAdmin && (
              <Route path="/update-user/:id" element={<EditUser />} />
            )}
            <Route path="/car-list" element={<CarList />} />
            <Route path="/car-info/:id" element={<CarInfo />} />
            <Route path="/log-in" element={<LogInUser />} />
            <Route path="/sign-up" element={<CreateUser />} />
            <Route path="/pass-rec" element={<PasswordRecoveryPage />} />
            <Route path="/user-cars" element={<UserCarList />} />
            {isAdmin && (
              <Route path="/user-cars/:emailadmin" element={<UserCarList />} />
            )}
            {isAdmin && (
              <Route path="/admin-panel" element={<AdminPanelPage />} />
            )}
          </Routes>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                backgroundColor: "#E0E1DD",
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem>
                <ButtonGroup
                  size="large"
                  fullWidth="true"
                  orientation="vertical"
                  aria-label="vertical outlined button group"
                >
                  {isAdmin && (
                    <Link to="/admin-panel">
                      <button
                        key="admin-panel"
                        className="a2"
                        style={{ marginBottom: "8%" }}
                      >
                        Admin panel
                      </button>
                    </Link>
                  )}
                  <Link to="/">
                    <button
                      key="home"
                      className="a2"
                      style={{ marginBottom: "8%" }}
                    >
                      Home
                    </button>
                  </Link>
                  <Link to="/car-list">
                    <button
                      key="car-list"
                      className="a2"
                      style={{ marginBottom: "8%" }}
                    >
                      All cars
                    </button>
                  </Link>
                  {isUser && (
                    <Link to="/user-cars">
                      <button
                        key="user-cars"
                        className="a2"
                        style={{ marginBottom: "8%" }}
                      >
                        Your cars
                      </button>
                    </Link>
                  )}
                  {isUser && (
                    <Link to="/create-car">
                      <button
                        key="create-car"
                        className="a2"
                        style={{ marginBottom: "8%" }}
                      >
                        Crete page
                      </button>
                    </Link>
                  )}
                  <Link to="/about">
                    <button
                      key="about"
                      className="a2"
                      style={{ marginBottom: "8%" }}
                    >
                      About
                    </button>
                  </Link>
                </ButtonGroup>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </Box>

        <footer className="site-footer " style={{ zIndex: 3 }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2023 All Rights Reserved by
                  <a href="#">Detroit</a>.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <GitHubIcon
                  fontSize="large"
                  style={{ marginRight: "5%" }}
                ></GitHubIcon>
                <InstagramIcon
                  fontSize="large"
                  style={{ marginRight: "5%" }}
                ></InstagramIcon>
                <YouTubeIcon
                  fontSize="large"
                  style={{ marginRight: "5%" }}
                ></YouTubeIcon>
                <TelegramIcon fontSize="large"></TelegramIcon>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </ThemeProvider>
  );
}
