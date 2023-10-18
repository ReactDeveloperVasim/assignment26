import React from "react";
import { Grid, Button } from "@mui/material";
import { Product } from "./Product";

export const CategoryItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Button variant="contained" fullWidth color="secondary">
        {item}
      </Button>
    </Grid>
  );
};