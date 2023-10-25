import React from "react";
import { Container, AppBar, Toolbar, Typography, Button, Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <AppBar
            position="sticky"
            color="default"
            sx={{
                backgroundColor: 'white',
            }}>
            <Container>
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Typography variant="h3" fontWeight={100} fontFamily={'Courier'}>
                        SHOPPING CART
                    </Typography>
                </Toolbar>
                {cartQuantity > 0 && (
                    <IconButton onClick={openCart}
                        sx={{
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            top: 15,
                            right: 50
                        }}
                    >
                        <ShoppingCartIcon sx={{ fill: 'black' }}
                        />
                        <Badge
                            badgeContent={cartQuantity} color="error"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                transform: 'translate(25%, 25%)'
                            }}
                        />
                    </IconButton>
                )}
            </Container >
        </AppBar >
    );
}
