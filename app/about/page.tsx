// pages/about.tsx

import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";

const Page = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to our website! We are dedicated to providing you with the
          best products and services. Our mission is to ensure customer
          satisfaction and deliver top-notch quality.
        </Typography>
        <Typography variant="body1" paragraph>
          Established in 2023, our team is passionate about making your shopping
          experience enjoyable and effortless. Thank you for choosing us!
        </Typography>
      </Paper>
    </Container>
  );
};

export default Page;
