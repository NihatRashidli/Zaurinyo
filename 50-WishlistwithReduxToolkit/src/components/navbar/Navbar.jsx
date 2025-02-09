import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import Favorite from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import { useUserList } from "../../context/UserProvider";
import axios from "axios";
import { Badge } from "@mui/material";

const pages = ["Home", "About", "Wishlist", "Todo", "Products"];
const settings = ["Profile", "Register", "Login", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { loggedInUser, setLoggedInUser } = useUserList();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    if (loggedInUser) {

      const updatedUser = { ...loggedInUser, isLogin: false };

      await axios.put(
        `http://localhost:3000/users/${loggedInUser.id}`,
        updatedUser
      );

      setLoggedInUser(null);

    }
  };

  return (
    <AppBar className="navbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            RASHOĞULLARI LTD. MŞİ.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    <Link
                      to={`/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </Link>
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Rashinvate" src="./src/assets/image/900.webp" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  {setting === "Register" ? (
                    <Link
                      to="/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </Link>
                  ) : setting === "Login" ? (
                    <Link
                      to="/login"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        {setting}
                      </Typography>
                    </Link>
                  ) : setting === "Logout" ? (
                    <Typography
                      sx={{ textAlign: "center" }}
                      onClick={handleLogout}
                    >
                      {setting}
                    </Typography>
                  ) : (
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          <Link to={"/basket"}>
          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon />
          </Badge>
          </Link>
          
          <Link to='/wishlist'> <Favorite></Favorite></Link>

          <Box sx={{ flexGrow: 0 }}>
            {loggedInUser ? (
              <>
                <Typography sx={{ marginLeft: 2, color: "white" }}>
                  Welcome, {loggedInUser.username}
                </Typography>
              </>
            ) : (
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              ></Link>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {loggedInUser ? (
              <>
                <Typography sx={{ marginLeft: 2, color: "white" }}>
                  Welcome, {loggedInUser.username}
                  <a href="" onClick={handleLogout}>Logout</a>
                </Typography>
              </>
            ) : (
              <>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"  >Login/Register</InputLabel>

                    <Select


                    >
                      <MenuItem ><Link to='/login'>Login</Link></MenuItem>
                      <MenuItem ><Link to='/register'>Register</Link></MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </>

            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
