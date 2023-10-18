import { Card, CardContent } from "@mui/material";
import React from "react";
import { Landing } from "./component/Landing";
import "./component/common.css";

function App() {
  return (
    <Card sx={{bgcolor:"lightyellow"}}>
        <CardContent>
          <Landing />
        </CardContent>
    </Card>
  );
}

export default App;
