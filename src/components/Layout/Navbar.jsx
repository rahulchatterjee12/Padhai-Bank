import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Container, Drawer, InputAdornment, Menu, MenuItem, TextField } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShareIcon from '@mui/icons-material/Share';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Slide from '@mui/material/Slide';
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import styled from 'styled-components';

const categoryList = [
    ' Coureses in English ',
    'Coureses in Hindi ',
    'Coureses in Bengala ',
    'Coureses in Tamil ',
    'Coureses in Telugu',
    'Stock Market * Import Export * HR Recruitment ',
    'Personality Development * Soft Skils * Spoken English ',
    'MS Office * Tally * Customer Service * Sales',
    'Graphic Design * Web Design ',
    'Mechanical * Civil * Electrical ',
    'Hardware * Networking * Cyber Security * Hacking ',
    'Machine Learning * DataScince ',
    'Programming ',
    'Software Development * Mobile App * Testing',
]

const manueList = [
    ' Become SME',
    'Resume Builder ',
    'Download the App',
    'Certiflate Veriflcation ',
    'Forums'
]

const SearchBar = () => {
    return (
        <Paper
            component="form"
            sx={{
                p: '1px 2px',
                display: 'flex',
                alignItems: 'center',
                width: 350,
                borderWidth: .5,
                borderColor: 'black'
            }}
            variant='outlined'
        >
            <IconButton type="button" sx={{ p: '5px' }} aria-label="search">
                <SearchIcon color="primary" />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Courses"
                inputProps={{ 'aria-label': 'search bar' }}
            />
        </Paper>
    )
}

const SearchBarM = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useState(false)
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <>
            <IconButton
                onClick={() => setOpen(!open)}
            >
                <SearchIcon />
            </IconButton>
            {open &&
                <Slide in={open} >
                    <Container
                        sx={{
                            position: 'absolute',
                            mt: 20,
                            left: 0,
                            width: '350px',
                            marginX: '5px',
                            background: 'white'
                        }}>
                        <TextField
                            id="search"
                            type="search"
                            label="Search"
                            value={searchTerm}
                            onChange={handleChange}
                            sx={{ width: 600 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Container>
                </Slide>
            }
        </>
    )
}

const Logo = () => {
    return (
        <>
            <Typography
                variant="h6" component="h2"
                sx={{
                    color: '#0d6efd',
                    fontWeight: { md: 800, sm: 600 },
                    fontSize: { md: 30, sm: 10 }
                }}>
                PadhaiBank
            </Typography>

        </>
    )
}

const Category = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Button
                startIcon={<AppsIcon />}
                endIcon={open ? <KeyboardArrowUpIcon /> : < KeyboardArrowDownIcon />}
                onClick={handleClick}
                sx={{
                    color: 'black'
                }}
            >
                Categories
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    minWidth: 400,
                    maxHeight: 500
                }}
            >
                {categoryList.map((items, i) => (
                    <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <MenuItem
                            key={items}
                            sx={{ fontSize: 14 }}
                            onClick={handleClose}>
                            {items}
                        </MenuItem>
                        <KeyboardArrowRightIcon />
                    </Box>
                ))}
            </Menu>
        </Box>
    )
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0, 1px',
    minHeight: 45,
}));

const SideDrawer = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return (
        <div className='flex flex-grow-0'>
            <div className='flex md:hidden items-center'>
                <div>
                    <IconButton
                        onClick={() => setDrawerOpen(true)}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                    <Drawer
                        anchor='left'
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                    >
                        <DrawerHeader>
                            <IconButton
                                sx={{ color: 'grey.500', gap: 25 }}
                                onClick={() => setDrawerOpen(false)}
                            >
                                <Logo />
                                <ClearIcon sx={{ color: 'black', fontWeight: 600 }} />
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                        <List sx={{ width: 'full' }}>
                            {categoryList.map((item, i) => (
                                <ListItem key={item}
                                    sx={{ borderBottom: '1px solid #c1c1c1' }}
                                    disablePadding>
                                    <ListItemButton
                                        sx={{
                                            paddingY: '2px',
                                            paddingX: '15px'
                                        }}
                                        component='div'
                                        onClick={() => setDrawerOpen(false)}
                                    >
                                        <ListItemText
                                            sx={{
                                                fontSize: '15px  !important',
                                                lineHeight: '5px !important'
                                            }}
                                            primary={item} />
                                        <ListItemIcon sx={{ minWidth: '15px' }}>
                                            <ChevronRightIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

const IconManu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <Button
                onClick={handleClick}
                startIcon={<FormatAlignRightIcon sx={{ color: 'black' }}
                />}
            />
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                sx={{
                    minWidth: { xs: 1, md: 400 },
                    maxHeight: { xs: 1, md: 500 }
                }}
            >
                {manueList.map(item => (
                    <MenuItem key={item} sx={{ fontSize: 14 }} onClick={handleClose}>{item}</MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ background: 'white' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <SideDrawer />
                    <Logo />
                    <div className='hidden md:block'>
                        <Category />
                    </div>
                    <div className='hidden md:block'>
                        <SearchBar />
                    </div>
                    <SearchBarM />
                    <div className='hidden md:block'>
                        <Button
                            sx={{ color: 'black' }}
                            startIcon={<ShareIcon />}
                        >
                            Share
                        </Button>
                    </div>
                    <Button sx={{ background: '#0d6efd', fontSize: { md: '0.875rem', xs: '0.65' } }} variant='contained'>Enroll Now</Button>
                    <div className='hidden md:block'>
                        <IconManu />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;