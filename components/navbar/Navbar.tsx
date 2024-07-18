"use client";

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import Link from "next/link";
import styles from "./styleNavbar";
import useNavbar from "../../hooks/useNavbar";

const Navbar: React.FC = () => {
  const { isMobile, anchorEl, links, handleMenu, handleClose } = useNavbar();

  return (
    <Box sx={styles.root}>
      <Box sx={styles.toolbarContainer}>
        <Toolbar>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {links.map((link) => (
                  <MenuItem key={link.label} onClick={handleClose}>
                    <Link href={link.href} legacyBehavior passHref>
                      <Button>{link.label}</Button>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={styles.desktopLinksContainer}>
              {links.map((link) => (
                <Link key={link.label} href={link.href} passHref legacyBehavior>
                  <Button sx={styles.button}>{link.label}</Button>
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </Box>
    </Box>
  );
};

export default Navbar;
