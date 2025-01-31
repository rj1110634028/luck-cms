import React from "react";

import { Box, Paper } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import { useTranslation } from "react-i18next";

const LockStatus = () => {
  const { t} = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 128,
          height: 176,
          borderRadius: "10%",
          borderColor: "#000000",
          border: "1px solid ",
        },
      }}
    >
      <Paper className="lockStatusPaper" elevation={0}>
        <div className="lockCirclePaper">
          <LockOpenIcon
            sx={{
              color: "#363F4E",
              height: "16px",
              width: "16px",
            }}
          ></LockOpenIcon>
          {t('unlocked')}
        </div>
        <div className="lockCirclePaper">
          <LockIcon
            sx={{
              color: "#363F4E",
              height: "16px",
              width: "16px",
            }}
          ></LockIcon>
          {t('locked')}
        </div>
        <div className="lockCirclePaper">
          <CircleIcon
            sx={{
              color: "#363F4E",
              height: "16px",
              width: "16px",
            }}
          ></CircleIcon>
          {t('using')}
        </div>
        <div className="lockCirclePaper">
          <CircleIcon
            sx={{
              color: "#FFFFFF",
              borderRadius: "50%",
              height: "13.33px",
              width: "13.33px",
              margin: "1px",
              boxSizing: "border-box",
              border: "1px solid #000",
            }}
          ></CircleIcon>
          {t('canUse')}
        </div>
        <div className="lockCirclePaper">
          <CircleIcon
            sx={{
              color: "#FF5A5A",
              height: "16px",
              width: "16px",
            }}
          ></CircleIcon>
          {t('error')}&ensp;{" "}
        </div>
      </Paper>
    </Box>
  );
};

export default LockStatus;