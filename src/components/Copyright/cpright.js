import { Typography } from "@mui/material";
import React from "react";

const CopyRightFuc = (props) => {
  const { nameTag } = props;
  return (
    <div className={nameTag.copyright}>
      <Typography sx={{ fontSize: 12 }}>
        Copyright © 2021 ListenNFT LLC. All rights reserved
      </Typography>
      <Typography sx={{ fontSize: 12 }}>
        We use cookies for better service.
      </Typography>
    </div>
  )
}
export default CopyRightFuc;