import { SxProps, Theme } from "@mui/material/styles";

const styles: { [key: string]: SxProps<Theme> } = {
  loadingBox: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    zIndex: 9999,
  },
  card: {
    maxWidth: 333,
    mt: 6,
    ":hover .MuiCardMedia-root": {
      rotate: "1deg",
      scale: "1.1",
      transition: "0.35s",
    },
  },
  cardMedia: {
    height: 400,
    width: 300,
  },
  cardActions: {
    justifyContent: "space-between",
  },
  stack: {
    pt: "50px",
    alignItems: "center",
  },
};

export default styles;
