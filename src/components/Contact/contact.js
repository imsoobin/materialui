import React from "react";
import { Box, CardMedia, FormControl, OutlinedInput, Typography } from '@mui/material'
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

const text01 = ['Auction', 'Shop', 'MarketPlace'];
const text02 = ['Upcoming Drops', 'Complete', 'Help'];
const Contact = (props) => {
  const { nameTag } = props;
  return (
    <Box className={nameTag.contact} >
      <Box className={nameTag.contactleft}>
        <CardMedia
          component='img'
          src='https://i.imgur.com/e8tQ6Fj.jpg'
          sx={{ width: 88, height: 28, mb: 2 }}
        ></CardMedia>
        <Typography variant='h7' sx={{ fontSize: 16 }}>NFT Auction and Shop site built for the Listen Campaign.</Typography>
      </Box>
      <Box sx={{ width: '50px' }}>
        {text01.map((text) => (
          <Typography key={text} variant='h6' sx={{ fontSize: 14, padding: '0 0 10px 0' }}>
            {text}
          </Typography>
        ))}
      </Box>
      <Box sx={{ width: '110px' }}>
        {text02.map((text) => (
          <Typography key={text} variant='h6' sx={{ fontSize: 14, padding: '0 0 10px 0' }}>
            {text}
          </Typography>
        ))}
      </Box>
      <Box sx={{ width: '355px' }}>
        <Typography variant='h6' sx={{ fontSize: 16, mb: 2 }}>Join Newsletter</Typography>
        <Typography sx={{ fontSize: 14 }}>Subscribe our newsletter to get more free design course and resource</Typography>

        <Box sx={{ top: '30px', position: 'relative' }}>
          <FormControl sx={{ display: { xs: 'none', md: 'flex' } }}>
            <OutlinedInput placeholder="Search here!" sx={{ width: '355px', height: '5ch', paddingRight: '30px', }} />
            <KeyboardTabIcon sx={{ color: '#ee4e00', border: '1px solid #ee4e00', borderRadius: '50%' }} className={nameTag.searchIcon} />
          </FormControl>
        </Box>
      </Box>
    </Box >
  )
}
export default Contact;