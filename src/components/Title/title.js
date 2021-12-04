import { Typography } from "@mui/material";
import React from "react";

const TitleFuc = (props) => {
  const { nameTag } = props
  return (
    <div>
      <Typography
        className={nameTag.title} variant='h3'
        sx={{ fontSize: 35, fontWeight: 600 }}
      >
        Upcoming Drops
      </Typography>
    </div>
  )
}
export default TitleFuc;