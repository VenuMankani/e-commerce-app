import React from "react";
import { Container, AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <AppBar position="sticky" color="default" elevation={1}>
            <Container>
                <Toolbar>
                    <Typography variant="h6" component={NavLink} to="/" color="inherit" sx={{ textDecoration: 'none' }}>
                        Home
                    </Typography>
                    <Typography variant="h6" component={NavLink} to="/store" color="inherit" sx={{ textDecoration: 'none', marginLeft: 2 }}>
                        Store
                    </Typography>
                    <Typography variant="h6" component={NavLink} to="/about" color="inherit" sx={{ textDecoration: 'none', marginLeft: 2 }}>
                        About
                    </Typography>
                    {cartQuantity > 0 && (
                        <Button
                            onClick={openCart}
                            variant="contained"
                            color="error"
                            sx={{
                                width: '0.5rem',
                                height: '3rem',
                                borderRadius: '50%',
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '63rem'
                            }}
                        >
                            <ShoppingCartIcon sx={{ fill: 'gold' }} />
                            <Badge
                                badgeContent={cartQuantity} color="error"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0,
                                    transform: 'translate(25%, 25%)'
                                }}
                            />
                        </Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}
