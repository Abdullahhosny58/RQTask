import { SxProps, Theme } from "@mui/material/styles";

const styles: { [key: string]: SxProps<Theme> } = {
  root: {
    display: "flex",
    alignItems: "center",
  },
  toolbarContainer: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  desktopLinksContainer: {
    display: "flex",
    gap: 2,
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  button: {
    color: "white",
  },
};

export default styles;
