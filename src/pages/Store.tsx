import React from "react";
import { Grid, Typography } from "@mui/material";
import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
    return (
        <>
            <Typography variant="h4">Store</Typography>
            <Grid container spacing={3}>
                {storeItems.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
                        <StoreItem {...item} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Store;
