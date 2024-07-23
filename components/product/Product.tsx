"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Stack, CircularProgress, Alert, Box } from "@mui/material";
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

  return (
    <Box>
      {isLoading && (
        <Box sx={styles.loadingBox}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error">{error.message}</Alert>}

      {!isLoading && !error && currentItems.length > 0 && (
        <>
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
                <CardActions sx={styles.cardActions}></CardActions>
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
        </>
      )}
    </Box>
  );
};

export default ProductItems;
