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
    maxWidth: 350,
    mt: 6,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    ":hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 16px rgba(0, 0, 0, 0.2)",
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
