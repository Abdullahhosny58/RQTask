"use client";

import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import styles from "./stylesCreateProduct";
import { FC } from "react";
import useCreateProduct from "@/hooks/useCreateProduct";

const CreateProduct: FC = () => {
  const {
    products,
    savedProducts,
    handleChange,
    handleImageChange,
    addProduct,
    handleSave,
    deleteProduct,
    clearAllProducts,
  } = useCreateProduct();

  return (
    <Box sx={styles.root}>
      <Typography variant="h4" component="h1" sx={styles.header}>
        Create Product
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageChange(
                        index,
                        e.target.files ? e.target.files[0] : null
                      )
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    fullWidth
                    value={product.title}
                    onChange={(e) =>
                      handleChange(index, "title", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    type="number"
                    fullWidth
                    value={product.price}
                    onChange={(e) =>
                      handleChange(index, "price", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={2}
                    value={product.description}
                    onChange={(e) =>
                      handleChange(index, "description", e.target.value)
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteProduct(index)}
                    sx={styles.saveButton}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="secondary"
        onClick={addProduct}
        sx={styles.addButton}
      >
        Add Another Product
      </Button>
      <Button
        variant="outlined"
        color="error"
        onClick={clearAllProducts}
        sx={styles.clearButton}
      >
        Clear All Products
      </Button>

      {/* Display saved products */}
      <Box sx={styles.savedProductsContainer}>
        <Typography variant="h6">Saved Products:</Typography>
        {savedProducts.map((product, index) => (
          <Box key={index} sx={styles.savedProduct}>
            <Typography>
              <strong>Title:</strong> {product.title}
            </Typography>
            <Typography>
              <strong>Price:</strong> {product.price}
            </Typography>
            <Typography>
              <strong>Description:</strong> {product.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CreateProduct;
