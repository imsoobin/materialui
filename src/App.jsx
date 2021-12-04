import React from "react";
import { CssBaseline, Divider } from '@mui/material';
import useStyles from "./style";
import AppbarFuc from "./components/AppBar/AppBar";
import BannerFuc from "./components/Banner/banner";
import TitleFuc from "./components/Title/title";
import ContentFuc from "./components/Content/content";
import CenterFuc from "./components/Center/center";
import FooterFuc from "./components/Footer/footer";
import LoadmoreFuc from "./components/Loadmore/loadmore";
import CopyRightFuc from "./components/Copyright/cpright";
import Contact from "./components/Contact/contact";

const App = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const nameTag = useStyles()
  return (
    <>
      <CssBaseline />
      {/* Phan header */}
      <AppbarFuc nameTag={nameTag} />
      {/* Banner */}
      <BannerFuc nameTag={nameTag} />
      {/* Title */}
      <TitleFuc nameTag={nameTag} />
      {/* Center */}
      <CenterFuc nameTag={nameTag} />
      <Divider />
      {/* Noi dung content */}
      <ContentFuc nameTag={nameTag} cards={cards} />
      {/* Load more */}
      <LoadmoreFuc />
      {/* Contact */}
      <Contact nameTag={nameTag} />
      {/* Footer */}
      <FooterFuc nameTag={nameTag} />
      {/* CopyRight */}
      <CopyRightFuc nameTag={nameTag} />
    </>
  )
}
export default App;