import React from "react";
import { Stack, Typography, IconButton, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../data/currency";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item = storeItems.find(i => i.id === id);
    if (item == null) return null;

    return (
        <Stack direction="row" spacing={2} alignItems="center" padding={2}>
            <Avatar
                alt={item.name}
                src={item.imgUrl}
                sx={{ width: 75, height: 75, objectFit: "cover" }}
            />
            <div>
                <Typography variant="body1" fontFamily={'Courier'} fontWeight={700}>
                    {item.name}{" "}
                    {quantity > 1 && (
                        <span style={{ fontSize: ".65rem" }}>x{quantity}</span>
                    )}
                </Typography>
                <Typography variant="body2" color="textSecondary" fontFamily={'Courier'} fontWeight={700}>
                    {formatCurrency(item.price)}
                </Typography>
            </div>
            <div><Typography fontFamily={'Courier'} fontWeight={700} >{formatCurrency(item.price * quantity)}</Typography></div>
            <IconButton
                color="error"
                onClick={() => removeFromCart(item.id)}
            >
                <DeleteIcon />
            </IconButton>
        </Stack>
    );
}
