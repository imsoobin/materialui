import { makeStyles } from '@mui/styles';
// import { createTheme } from '@mui/material/styles'

const useStyles = makeStyles(() => ({
  appbar: {
    width: '100%',
    padding: '10px 160px',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  card: {
    width: '88px',
    height: '28px',
    marginRight: '20px',
  },
  searchIcon: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    color: 'gray',
    cursor: 'pointer',
    '&:hover': {
      color: 'black',
    }
  },
  banner: {
    padding: '0 160px',
    marginTop: 78,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerab: {
    position: 'absolute',
    textAlign: 'center',
  },
  bannerrs: {
    marginTop: 78,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    padding: '50px 160px',
  },
  cardd: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '10px',
    border: '1px solid rgba(0,0,0,0.1)',
    '&:hover': {
      boxShadow: '1px 1px 10px rgba(0,0,0,0.2)',
      cursor: 'pointer',
    },
    position: 'relative',
  },
  cardGrid: {
    padding: '40px 0',
  },
  cardMedia: {
    //ty le man hinh 16:9 - 56.25%
    height: '255px',
    borderRadius: '10px',
  },
  cardContent: {
    flexGrow: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  grid: {
    position: 'relative',
    width: '100%',
    padding: '0 160px'
  },
  iconbottom: {
    display: 'flex',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    position: 'absolute',
    width: '100%',
    opacity: 0.9,
  },
  iconaction: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
  },
  center: {
    display: 'flex',
    width: '100%',
    padding: '30px 160px',
    justifyContent: 'space-between',
  },
  centerrs: {
    display: 'flex',
    width: '100%',
    padding: '30px',
    justifyContent: 'center',
  },
  footer: {
    textAlign: 'center',
    padding: '60px 250px',
    backgroundColor: '#F4F5F6;',
    color: '#23262F',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
  },
  copyright: {
    padding: '20px 160px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#f4f5f6',
    color: '#23262f',
  },
  contact: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'initial',
    padding: '80px 160px',
    borderBottom: '1px solid rgba(0,0,0,0.1)',
    backgroundColor: '#f4f5f6',
  },
  contactleft: {
    width: '256px',
  }
}));

export default useStyles;