import React from "react";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../data/currency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
    isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart();
    const totalAmount = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return (
        <Drawer anchor="right" open={isOpen} onClose={closeCart}>
            <div>
                <IconButton onClick={closeCart}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <div>
                <Typography variant="h6" align="center" gutterBottom>
                    Cart
                </Typography>
                <Stack spacing={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <Typography variant="h6" align="right" fontWeight="bold" paddingRight={5}>
                        Total {formatCurrency(totalAmount)}
                    </Typography>
                </Stack>
            </div>
        </Drawer>
    );
}
