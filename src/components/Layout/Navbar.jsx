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
import { Menu, MenuItem } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ShareIcon from '@mui/icons-material/Share';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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

const Logo = () => {
    return (
        <>
            <Typography
                variant="h6" component="h2"
                sx={{
                    color: '#0d6efd',
                    fontWeight: 800,
                    fontSize: 30
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
                    minWidth: 400,
                    maxHeight: 500
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
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Logo />
                    <Category />
                    <SearchBar />

                    <Button
                        sx={{ color: 'black' }}
                        startIcon={<ShareIcon />}
                    >
                        Share
                    </Button>
                    <Button sx={{ background: '#0d6efd' }} variant='contained'>Join for Free</Button>
                    <IconManu />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;