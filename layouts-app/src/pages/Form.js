import React from "react";
import { Grid } from "../layouts/Grid";
import { Box } from "../layouts/Box";
import { Center } from "../layouts/Line";

function Form() {
  return (
    <Center>
      <Grid
        gap="5rem"
        bgColor="pink"
        gridBorder="1px solid red"
        childBorder="1px solid green">
        <Box>One</Box>
        <Box>Two</Box>
        <Box>Three</Box>
        <Box>Four</Box>
        <Box>Five</Box>
        <Box>Six</Box>
        <Box>Seven</Box>
      </Grid>
    </Center>
  );
}

export default Form;
