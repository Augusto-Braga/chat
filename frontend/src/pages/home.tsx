import { Typography } from "@mui/material";
import React from "react";

const HomePage: React.FC = () => {
  const message = "HELLO WORLD";

  return <Typography variant="h1">{`${message} HOMEPAGE`}</Typography>;
};

export default HomePage;
