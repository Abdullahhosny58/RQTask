"use client";

import ProductItems from "@/components/product/Product";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      sx={{
        p: 4,
        m: 2,
        typography: "h6",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          color: "black",
          marginBottom: 2,
        }}
      >
        Product Items
      </Typography>
      <Box>
        <Link href="/create-product" passHref>
          <Button
            variant="contained"
            disableElevation
            sx={{ display: "flex", px: "200px", mx: "500px" }}
          >
            Create Product
          </Button>
        </Link>
        <ProductItems />
      </Box>
    </Box>
  );
}
