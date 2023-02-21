import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import BarChartIcon from "@mui/icons-material/BarChart";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CommentIcon from "@mui/icons-material/Comment";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import InvertColorsIcon from '@mui/icons-material/InvertColors';

import { useNavigate } from "react-router-dom";

export default function MainListItems() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <ListItemButton onClick={() => navigate("/qrcode")}>
        <ListItemIcon>
          <QrCodeIcon />
        </ListItemIcon>
        <ListItemText primary="QRcode" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/color")}>
        <ListItemIcon>
          <ColorLensIcon />
        </ListItemIcon>
        <ListItemText primary="Color" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/google-trend")}>
        <ListItemIcon>
          <TrendingUpIcon />
        </ListItemIcon>
        <ListItemText primary="Trends" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/youtube-comment")}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Comment" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/youtube-popular")}>
        <ListItemIcon>
          <OndemandVideoIcon />
        </ListItemIcon>
        <ListItemText primary="Popular" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/youtube-analysis")}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Analysis" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/color_palette")}>
        <ListItemIcon>
          <InvertColorsIcon />
        </ListItemIcon>
        <ListItemText primary="Image color" />
      </ListItemButton>
    </React.Fragment>
  );
}
