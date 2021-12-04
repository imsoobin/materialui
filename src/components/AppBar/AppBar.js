import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, CardMedia, Toolbar, Box, IconButton, Menu, MenuItem, Typography, Button, FormControl, OutlinedInput, Tooltip, Avatar } from "@mui/material";

const pages = ['Auction', 'Shop', 'Marketplace', 'Upcoming Drops', 'Help'];
const AppbarFuc = (props) => {
  const { nameTag } = props;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
  return (
    <AppBar position="fixed" sx={{ boxShadow: 'none', background: '#fff', color: 'black' }}>
      <Toolbar disableGutters sx={{ display: { xs: 'none', md: 'flex' } }} className={nameTag.appbar}>
        <CardMedia
          src='https://i.imgur.com/e8tQ6Fj.jpg'
          component="img"
          sx={{ mr: 1, width: 88, height: 28, display: { xs: 'none', md: 'flex' } }}
        >
        </CardMedia>
        <CardMedia
          src='https://i.imgur.com/e8tQ6Fj.jpg'
          component="img"
          sx={{ width: 88, height: 28, display: { xs: 'flex', md: 'none' } }}
        />
        {/* Menu khong toan man hinh */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#777E90', display: 'block', fontSize: 13, textTransform: 'none' }}
            >
              {page}
            </Button>
          ))}
        </Box>

        {/* Search */}
        <Box>
          <FormControl sx={{ position: 'relative', display: { xs: 'none', md: 'flex' } }}>
            <OutlinedInput placeholder="Search here!" sx={{ width: '22ch', height: '5ch', paddingRight: '30px', }} />
            <SearchIcon className={nameTag.searchIcon} />
          </FormControl>
        </Box>

        {/* Btn login */}
        <Button variant='text' sx={{ ml: 2, display: { xs: 'none', md: 'flex' } }}>
          Sign In
        </Button>
        <Button variant='contained' sx={{
          margin: '0px 10px',
          backgroundColor: '#ee4e00',
          padding: '7px',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#ee6e00',
          },
          display: { xs: 'none', md: 'flex' }
        }}>
          Sign Up
        </Button>
        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          <Tooltip title="Choose language">
            <Button variant='text' endIcon={<KeyboardArrowDownIcon />}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" />
              </IconButton>
            </Button>
          </Tooltip>

        </Box>
      </Toolbar>

      <Toolbar sx={{ display: { xs: 'flex', md: 'none' } }}>
        {/* Menu khi co tuong thich man hinh */}
        <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu id="menu-appbar" anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <CardMedia
          src='https://i.imgur.com/e8tQ6Fj.jpg'
          component="img"
          sx={{ width: 88, height: 28, display: { xs: 'flex', md: 'none' } }}
        />
        <Box sx={{ position: 'absolute', right: 20, display: { xs: 'flex', md: 'none' } }}>
          <Tooltip title="Choose language">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '55px', ml: '32px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {/* {settings.map((setting) => ( */}
            <MenuItem onClick={handleCloseNavMenu}>
              <Avatar src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png'></Avatar> English - USA
            </MenuItem>
            <MenuItem>
              <Avatar src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2560px-Flag_of_Vietnam.svg.png'></Avatar>Vietnamese
            </MenuItem>
            {/* ))} */}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
};
export default AppbarFuc;