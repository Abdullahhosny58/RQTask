"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { AppBar, Box, Toolbar } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <AppBar position="fixed">
              <Toolbar>
                <Navbar />
              </Toolbar>
            </AppBar>
            <Box
              component="main"
              sx={{
                marginTop: { sm: 8, md: 10 },
                flexGrow: 1,
                p: 3,
              }}
            >
              {children}
            </Box>
          </Box>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
