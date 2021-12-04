import { Button, CardContent, CardMedia, Grid, Typography, Box } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import GavelIcon from '@mui/icons-material/Gavel';

const ContentFuc = (props) => {
  const { nameTag, cards } = props;
  return (
    <Box className={nameTag.cardGrid}>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid container spacing={3} className={nameTag.grid}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} md={3}>
              <div className={nameTag.cardd}>
                <CardContent className={nameTag.icon}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={nameTag.iconaction}>
                      <FavoriteIcon sx={{ color: '#EF466F', fontSize: 25 }} />
                    </div>
                    <div className={nameTag.iconaction}>
                      <SavedSearchIcon sx={{ color: '#EF466F', fontSize: 25 }} />
                    </div>
                  </div>
                </CardContent>
                <CardMedia
                  className={nameTag.cardMedia}
                  image="https://i.imgur.com/KRXXuE5.png"
                  title="Image title"
                />
                <CardContent className={nameTag.cardContent}>
                  <div>
                    <Typography gutterBottom variant='h6' sx={{ fontSize: 13, fontWeight: 700 }}>
                      Pleasant Present
                    </Typography>
                    <Typography sx={{ fontSize: 10, opacity: 0.7 }}>
                      DVO NFT platform
                    </Typography>
                  </div>
                  <div>
                    <Button sx={{ fontSize: 11, fontWeight: 700, border: '2px solid #EE4E00' }} variant='outlined' color='warning' size='small'>
                      100.1 USD
                    </Button>
                  </div>
                </CardContent>
                <CardContent className={nameTag.iconbottom}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <GavelIcon sx={{ fontSize: 16, color: 'orange' }} />
                    <Typography variant='h7' sx={{ fontSize: 13, color: 'orange', ml: 1 }}>openning</Typography>
                  </div>
                  <div>
                    <Typography variant='h7' color='gray'>Nov,30/2021</Typography>
                  </div>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ display: { xs: 'flex', md: 'none', xl: 'none' }, padding: '0 30px' }}>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} md={3}>
              <div className={nameTag.cardd}>
                <CardContent className={nameTag.icon}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className={nameTag.iconaction}>
                      <FavoriteIcon sx={{ color: '#EF466F', fontSize: 25 }} />
                    </div>
                    <div className={nameTag.iconaction}>
                      <SavedSearchIcon sx={{ color: '#EF466F', fontSize: 25 }} />
                    </div>
                  </div>
                </CardContent>
                <CardMedia
                  className={nameTag.cardMedia}
                  image="https://i.imgur.com/KRXXuE5.png"
                  title="Image title"
                />
                <CardContent className={nameTag.cardContent}>
                  <div>
                    <Typography gutterBottom variant='h6' sx={{ fontSize: 13, fontWeight: 700 }}>
                      Pleasant Present
                    </Typography>
                    <Typography sx={{ fontSize: 10, opacity: 0.7 }}>
                      DVO NFT platform
                    </Typography>
                  </div>
                  <div>
                    <Button sx={{ fontSize: 11, fontWeight: 700, border: '2px solid #EE4E00' }} variant='outlined' color='warning' size='small'>
                      100.1 USD
                    </Button>
                  </div>
                </CardContent>
                <CardContent className={nameTag.iconbottom}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <GavelIcon sx={{ fontSize: 16, color: 'orange' }} />
                    <Typography variant='h7' sx={{ fontSize: 13, color: 'orange', ml: 1 }}>openning</Typography>
                  </div>
                  <div>
                    <Typography variant='h7' color='gray'>Nov,30/2021</Typography>
                  </div>
                </CardContent>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}
export default ContentFuc