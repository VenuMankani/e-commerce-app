import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from "@mui/material";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../data/currency";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
};

function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();
    const quantity = getItemQuantity(id);

    return (
        <Card sx={{ height: "100%" }}>
            <CardMedia
                component="img"
                alt={name}
                height="200"
                image={imgUrl}
                style={{ objectFit: "cover" }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" fontFamily={'Courier'} fontWeight={700}>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontFamily={'Courier'} fontWeight={700}>
                    {formatCurrency(price)}
                </Typography>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {quantity === 0 ? (
                    <Button variant="contained"
                        fullWidth
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => increaseCartQuantity(id)}>
                        Add To Cart
                    </Button>
                ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: ".5rem" }}>
                            <IconButton
                                color="error"
                                onClick={() => decreaseCartQuantity(id)}
                            >
                                <MinusIcon />
                            </IconButton>
                            <Typography variant="h5" fontFamily={'Courier'} fontWeight={700}>{quantity}</Typography>
                            <IconButton
                                color="success"
                                onClick={() => increaseCartQuantity(id)}
                            >
                                <AddIcon />
                            </IconButton>
                        </div>
                        <Button
                            onClick={() => removeFromCart(id)} variant="contained" color="error"
                            endIcon={<DeleteIcon />}
                        >
                            Remove
                        </Button>
                    </div>
                )}
            </CardActions>
        </Card>
    );
}

export default StoreItem;
