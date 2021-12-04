import { Button, Box } from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

// const menus = ['All item', 'Art', 'Game', 'PhotoGraphy']
const CenterFuc = (props) => {
  const { nameTag } = props
  return (
    <Box>
      <Box className={nameTag.center} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <div>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            endIcon={<KeyboardArrowDownIcon sx={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '50%' }} />}
            variant="outlined"
            size='medium'
            sx={{
              border: '1px solid rgba(0,0,0,0.3)',
              color: '#23262F', fontWeight: 600,
              textTransform: 'none',
              borderRadius: '10px',
            }}
          >
            Recently Added
          </Button>
        </div>
        <div>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              sx={{
                backgroundColor: '#07044B',
                fontSize: 14,
                textTransform: 'none',
                color: '#fff', borderRadius: '100px',
                position: 'static',
                width: '80px',
                height: '28px',
              }}
            >
              All item
            </Button>
            <Button sx={{ color: '#777E90', fontSize: 13, textTransform: 'none', height: '28px' }}>
              Art
            </Button>
            <Button sx={{ color: '#777E90', fontSize: 13, textTransform: 'none', height: '28px' }}>
              Game
            </Button>
            <Button sx={{ color: '#777E90', fontSize: 13, textTransform: 'none', height: '28px' }}>
              PhotoGraphy
            </Button>
          </Box>
        </div>
        <div>
          <Button
            id="basic-button"
            aria-controls="basic-menu"
            aria-haspopup="true"
            endIcon={<FilterAltIcon />}
            variant="outlined"
            size='medium'
            sx={{
              border: '1px solid rgba(0,0,0,0.3)',
              color: '#23262F', fontWeight: 600,
              textTransform: 'none',
              borderRadius: '10px',
            }}
          >
            Filter
          </Button>
        </div>
      </Box>
      <Box className={nameTag.centerrs} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <div>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Button
              sx={{
                backgroundColor: '#07044B',
                fontSize: 14,
                textTransform: 'none',
                color: '#fff', borderRadius: '100px',
                position: 'static',
                width: '80px',
                height: '28px',
              }}
            >
              All item
            </Button>
            <Button sx={{ color: '#777E90', fontSize: 13, textTransform: 'none', height: '28px' }}>
              Art
            </Button>
            <Button sx={{ color: '#777E90', fontSize: 13, textTransform: 'none', height: '28px' }}>
              Game
            </Button>
            <Button sx={{ color: '#777E90', fontSize: 13, textTransform: 'none', height: '28px' }}>
              PhotoGraphy
            </Button>
          </Box>
        </div>
      </Box>
    </Box>
  )
};
export default CenterFuc;