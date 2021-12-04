import { CardMedia, Box, Typography, Button } from "@mui/material";
import React from "react";

const BannerFuc = (props) => {
  const { nameTag } = props;
  return (
    <div>
      <Box className={nameTag.banner} sx={{ display: { xs: 'none', md: 'flex' } }}>
        <CardMedia
          sx={{ position: 'relative', height: '370px' }}
          component='img'
          src='https://cdn.wallpapersafari.com/53/80/niPMal.jpg'
        ></CardMedia>
        <div className={nameTag.bannerab}>
          <div>
            <Typography color='white'
              sx={{ fontWeight: 700, fontSize: '25px' }}>
              Upcoming NFT Drops
            </Typography>
          </div>
          <div>
            <Typography color='white'>
              List of upcoming NFT drops on Flow Blockchain
            </Typography>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          paddingTop: '170px',
        }}>
          <Button variant='outlined'
            sx={{ color: '#fff', border: '1px solid rgba(255,255,255,1)' }}
          >
            Upcoming Drops
          </Button>
        </div>
      </Box>
      <Box className={nameTag.bannerrs} sx={{ display: { xs: 'flex', md: 'none' } }}>
        <CardMedia
          sx={{ position: 'relative' }}
          component='img'
          src='https://cdn.wallpapersafari.com/53/80/niPMal.jpg'
        ></CardMedia>
        <div className={nameTag.bannerab}>
          <div>
            <Typography variant='h3' color='white'
              sx={{ fontWeight: 500, fontSize: 30, display: { xs: 'flex', md: 'none' } }}>
              Upcoming NFT Drops
            </Typography>
            <Typography color='white'>
              List of upcoming NFT drops on Flow Blockchain
            </Typography>
          </div>
          <div style={{ position: 'absolute' }}>
            <Button variant='outlined'
              sx={{ color: '#fff', border: '1px solid rgba(255,255,255,1)' }}
            >
              Upcoming Drops
            </Button>
          </div>
        </div>
      </Box>
    </div>
  )
};
export default BannerFuc;