"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Stack, CircularProgress, Alert, Box } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import Pagination from "@mui/material/Pagination";
import styles from "./stylesProductItems";
import useProducts from "../../hooks/useProducts";

const ProductItems = () => {
  const {
    isLoading,
    error,
    pageNumber,
    setPageNumber,
    currentItems,
    totalPages,
  } = useProducts();

  if (isLoading)
    return (
      <Box sx={styles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  if (error) return <Alert severity="error">{error.message}</Alert>;

  if (!currentItems.length) return null;

  return (
    <Box>
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
      >
        {currentItems.map((item) => (
          <Card key={item.id} sx={styles.card}>
            <CardMedia
              sx={styles.cardMedia}
              image={item.image}
              title={item.title}
            />
            <CardContent>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography gutterBottom variant="h6" component="div">
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" component="p">
                  {item.price}$
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions sx={styles.cardActions}>
              <Button sx={{ textTransform: "capitalize" }}>
                <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="large" />
                Add To Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>

      <Stack spacing={2} sx={styles.stack}>
        <Pagination
          count={totalPages}
          page={pageNumber}
          onChange={(event, value) => setPageNumber(value)}
          color="primary"
        />
      </Stack>
    </Box>
  );
};

export default ProductItems;
