import { Typography } from "@mui/material";
import React from "react";

const FooterFuc = (props) => {
  const { nameTag } = props
  return (
    <footer>
      <div className={nameTag.footer}>
        <Typography sx={{ fontSize: 24, fontWeight: 600, mb: 1 }}>THE LISTEN CAMPAIGN</Typography>
        <Typography variant='h6' sx={{ mb: 1, fontSize: 16 }}>
          Celebrating Solutions to Vulnerable and Disadvantaged Children’s Problems
        </Typography>
        <Typography variant='h7' sx={{ fontSize: 12, lineHeight: '16px' }}>
          The Listen campaign is a unique, annual and global star-studded campaign, that will illuminate the problems faced by the world’s one billion vulnerable and severely disadvantaged children and will celebrate projects already providing much-needed solutions. At the heart of the campaign are children telling their own stories.
        </Typography>
      </div>
    </footer>
  )
};
export default FooterFuc;