import React, { useState } from "react";
import { NavData } from "./NavData";
import { NavigationItem } from "./NavigationItem";
import { Grid } from "@mui/material";

export const NavigationList=()=>{
    const[data,setData]=useState(NavData);


    
    
    return(
        <Grid container spacing={3}>
 {
        data.map((item)=>
        <NavigationItem item={item}/>
        )
       }
        </Grid>
      
    );
}