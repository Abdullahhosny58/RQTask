import { SxProps, Theme } from "@mui/material/styles";

const styles: { [key: string]: SxProps<Theme> } = {
  root: {
    p: 4,
    m: 2,
  },
  header: {
    fontWeight: "bold",
    color: "black",
    marginBottom: 2,
  },
  saveButton: {
    ml: 1,
  },
  addButton: {
    mt: 2,
  },
  clearButton: {
    mt: 2,
    ml: 2,
  },
  savedProductsContainer: {
    mt: 4,
    p: 2,
    border: "1px solid lightgrey",
  },
  savedProduct: {
    borderBottom: "1px solid lightgrey",
    pb: 1,
  },
};

export default styles;
